/**
 * M3 Spec-Compliant Time Picker Controller
 */

export function createTimePicker({ onTimeSelect, initialHours = 10, initialMinutes = 30, initialPeriod = 'AM' } = {}) {
  let hours = initialHours;
  let minutes = initialMinutes;
  let period = initialPeriod;
  let mode = 'hours'; // 'hours' | 'minutes'

  const container = document.createElement('div');
  container.className = 'bte-time-picker';
  container.setAttribute('role', 'dialog');
  container.setAttribute('aria-label', 'Select time');

  function render() {
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    container.innerHTML = `
      <div class="bte-time-picker__title">Select time</div>
      
      <div class="bte-time-picker__display">
        <div class="bte-time-picker__time-cell ${mode === 'hours' ? 'bte-time-picker__time-cell--selected' : ''}" id="bte-tp-hours">
          ${formattedHours}
        </div>
        <div class="bte-time-picker__separator">:</div>
        <div class="bte-time-picker__time-cell ${mode === 'minutes' ? 'bte-time-picker__time-cell--selected' : ''}" id="bte-tp-minutes">
          ${formattedMinutes}
        </div>
        <div class="bte-time-picker__period-toggle">
          <button type="button" class="bte-time-picker__period-btn ${period === 'AM' ? 'bte-time-picker__period-btn--selected' : ''}" id="bte-tp-am">AM</button>
          <button type="button" class="bte-time-picker__period-btn ${period === 'PM' ? 'bte-time-picker__period-btn--selected' : ''}" id="bte-tp-pm">PM</button>
        </div>
      </div>

      <div class="bte-time-picker__dial" id="bte-dial-face">
        <div class="bte-time-picker__dial-center"></div>
      </div>

      <div class="bte-time-picker__actions">
        <md-icon-button id="bte-tp-keyboard" aria-label="Switch to keyboard input">
          <md-icon><span class="material-symbols-outlined">keyboard</span></md-icon>
        </md-icon-button>
        <div class="flex-row gap-2">
          <md-text-button id="bte-tp-cancel">Cancel</md-text-button>
          <md-filled-button id="bte-tp-ok">OK</md-filled-button>
        </div>
      </div>
    `;

    // Render Dial Numbers
    const dialFace = container.querySelector('#bte-dial-face');
    const radius = 96;
    const center = 128;

    if (mode === 'hours') {
      for (let h = 1; h <= 12; h++) {
        const angle = (h * 30 - 90) * (Math.PI / 180);
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);

        const numEl = document.createElement('div');
        numEl.className = `bte-time-picker__dial-number ${h === hours ? 'bte-time-picker__dial-number--selected' : ''}`;
        numEl.style.left = `${x}px`;
        numEl.style.top = `${y}px`;
        numEl.textContent = h;

        numEl.addEventListener('click', () => {
          hours = h;
          mode = 'minutes'; // auto-switch to minutes per M3 spec!
          render();
          notify();
        });

        dialFace.appendChild(numEl);
      }
    } else {
      // Minutes (increments of 5)
      for (let m = 0; m < 60; m += 5) {
        const angle = (m * 6 - 90) * (Math.PI / 180);
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);

        const numEl = document.createElement('div');
        numEl.className = `bte-time-picker__dial-number ${m === minutes ? 'bte-time-picker__dial-number--selected' : ''}`;
        numEl.style.left = `${x}px`;
        numEl.style.top = `${y}px`;
        numEl.textContent = m.toString().padStart(2, '0');

        numEl.addEventListener('click', () => {
          minutes = m;
          render();
          notify();
        });

        dialFace.appendChild(numEl);
      }
    }

    container.querySelector('#bte-tp-hours').addEventListener('click', () => {
      mode = 'hours';
      render();
    });

    container.querySelector('#bte-tp-minutes').addEventListener('click', () => {
      mode = 'minutes';
      render();
    });

    container.querySelector('#bte-tp-am').addEventListener('click', () => {
      period = 'AM';
      render();
      notify();
    });

    container.querySelector('#bte-tp-pm').addEventListener('click', () => {
      period = 'PM';
      render();
      notify();
    });
  }

  function notify() {
    if (onTimeSelect) {
      onTimeSelect({ hours, minutes, period, formatted: `${hours}:${minutes.toString().padStart(2, '0')} ${period}` });
    }
  }

  render();
  return { element: container, getTime: () => ({ hours, minutes, period }) };
}
