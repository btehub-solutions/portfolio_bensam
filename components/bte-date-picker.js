/**
 * M3 Spec-Compliant Date Picker Controller
 */

export function createDatePicker({ onDateSelect, initialDate = new Date() } = {}) {
  let viewDate = new Date(initialDate);
  let selectedDate = new Date(initialDate);

  const container = document.createElement('div');
  container.className = 'bte-date-picker';
  container.setAttribute('role', 'dialog');
  container.setAttribute('aria-label', 'Choose date');

  function render() {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    const headlineText = selectedDate
      ? `${dayNames[selectedDate.getDay()]}, ${monthShortNames[selectedDate.getMonth()]} ${selectedDate.getDate()}`
      : 'Select date';

    container.innerHTML = `
      <div class="bte-date-picker__header">
        <div class="bte-date-picker__supporting-text">Select date</div>
        <div class="bte-date-picker__headline">${headlineText}</div>
      </div>
      <div class="bte-date-picker__controls">
        <span class="bte-date-picker__month-label">${monthNames[month]} ${year}</span>
        <div class="flex-row gap-1">
          <md-icon-button id="bte-prev-month" aria-label="Previous month">
            <md-icon><span class="material-symbols-outlined">chevron_left</span></md-icon>
          </md-icon-button>
          <md-icon-button id="bte-next-month" aria-label="Next month">
            <md-icon><span class="material-symbols-outlined">chevron_right</span></md-icon>
          </md-icon-button>
        </div>
      </div>
      <div class="bte-date-picker__weekdays">
        <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
      </div>
      <div class="bte-date-picker__grid" id="bte-calendar-days"></div>
      <div class="bte-date-picker__actions">
        <md-text-button id="bte-dp-cancel">Cancel</md-text-button>
        <md-filled-button id="bte-dp-ok">OK</md-filled-button>
      </div>
    `;

    const grid = container.querySelector('#bte-calendar-days');

    // Empty lead slots
    for (let i = 0; i < firstDayIndex; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.className = 'bte-date-picker__day bte-date-picker__day--empty';
      grid.appendChild(emptyCell);
    }

    // Days
    for (let d = 1; d <= daysInMonth; d++) {
      const dayBtn = document.createElement('button');
      dayBtn.type = 'button';
      dayBtn.className = 'bte-date-picker__day';
      dayBtn.textContent = d;

      const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === d;
      const isSelected = selectedDate && selectedDate.getFullYear() === year && selectedDate.getMonth() === month && selectedDate.getDate() === d;

      if (isToday) dayBtn.classList.add('bte-date-picker__day--today');
      if (isSelected) dayBtn.classList.add('bte-date-picker__day--selected');

      dayBtn.addEventListener('click', () => {
        selectedDate = new Date(year, month, d);
        render();
        if (onDateSelect) onDateSelect(selectedDate);
      });

      grid.appendChild(dayBtn);
    }

    container.querySelector('#bte-prev-month').addEventListener('click', () => {
      viewDate.setMonth(viewDate.getMonth() - 1);
      render();
    });

    container.querySelector('#bte-next-month').addEventListener('click', () => {
      viewDate.setMonth(viewDate.getMonth() + 1);
      render();
    });
  }

  render();
  return { element: container, getSelectedDate: () => selectedDate };
}
