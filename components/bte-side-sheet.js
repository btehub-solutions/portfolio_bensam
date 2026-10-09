/**
 * M3 Spec-Compliant Side Sheet Controller
 */

export function createSideSheet({ title, content, actions = [] } = {}) {
  const scrim = document.createElement('div');
  scrim.className = 'bte-side-sheet-scrim';

  const sheet = document.createElement('div');
  sheet.className = 'bte-side-sheet';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');

  sheet.innerHTML = `
    <div class="bte-side-sheet__header">
      <h2 class="bte-side-sheet__title">${title || 'Side Sheet'}</h2>
      <md-icon-button id="bte-side-sheet-close-btn" aria-label="Close side sheet">
        <md-icon><span class="material-symbols-outlined">close</span></md-icon>
      </md-icon-button>
    </div>
    <div class="bte-side-sheet__body">
      ${typeof content === 'string' ? content : ''}
    </div>
    <div class="bte-side-sheet__actions" id="bte-side-sheet-actions"></div>
  `;

  if (typeof content !== 'string' && content instanceof HTMLElement) {
    sheet.querySelector('.bte-side-sheet__body').appendChild(content);
  }

  const actionsContainer = sheet.querySelector('#bte-side-sheet-actions');
  if (actions.length === 0) {
    actionsContainer.style.display = 'none';
  } else {
    actions.forEach(act => {
      const btn = document.createElement(act.variant === 'filled' ? 'md-filled-button' : 'md-text-button');
      btn.textContent = act.text;
      btn.addEventListener('click', () => {
        if (act.onClick) act.onClick();
        close();
      });
      actionsContainer.appendChild(btn);
    });
  }

  function open() {
    document.body.appendChild(scrim);
    document.body.appendChild(sheet);
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      scrim.classList.add('bte-side-sheet-scrim--visible');
      sheet.classList.add('bte-side-sheet--open');
    });

    scrim.addEventListener('click', close);
    sheet.querySelector('#bte-side-sheet-close-btn').addEventListener('click', close);
    document.addEventListener('keydown', onKeyDown);
  }

  function close() {
    scrim.classList.remove('bte-side-sheet-scrim--visible');
    sheet.classList.remove('bte-side-sheet--open');
    document.body.style.overflow = '';

    setTimeout(() => {
      if (scrim.parentElement) scrim.parentElement.removeChild(scrim);
      if (sheet.parentElement) sheet.parentElement.removeChild(sheet);
    }, 250);

    document.removeEventListener('keydown', onKeyDown);
  }

  function onKeyDown(e) {
    if (e.key === 'Escape') close();
  }

  return { open, close, element: sheet };
}
