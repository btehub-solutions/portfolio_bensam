/**
 * M3 Spec-Compliant Bottom Sheet Controller
 */

export function createBottomSheet({ title, content, actions = [] } = {}) {
  const scrim = document.createElement('div');
  scrim.className = 'bte-bottom-sheet-scrim';

  const sheet = document.createElement('div');
  sheet.className = 'bte-bottom-sheet';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');

  sheet.innerHTML = `
    <div class="bte-bottom-sheet__drag-handle">
      <div class="bte-bottom-sheet__drag-handle-pill"></div>
    </div>
    <div class="bte-bottom-sheet__header">
      <h2 class="bte-bottom-sheet__title">${title || 'Bottom Sheet'}</h2>
      <md-icon-button id="bte-sheet-close-btn" aria-label="Close bottom sheet">
        <md-icon><span class="material-symbols-outlined">close</span></md-icon>
      </md-icon-button>
    </div>
    <div class="bte-bottom-sheet__body">
      ${typeof content === 'string' ? content : ''}
    </div>
    <div class="bte-bottom-sheet__actions" id="bte-sheet-actions"></div>
  `;

  if (typeof content !== 'string' && content instanceof HTMLElement) {
    sheet.querySelector('.bte-bottom-sheet__body').appendChild(content);
  }

  const actionsContainer = sheet.querySelector('#bte-sheet-actions');
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
      scrim.classList.add('bte-bottom-sheet-scrim--visible');
      sheet.classList.add('bte-bottom-sheet--open');
    });

    scrim.addEventListener('click', close);
    sheet.querySelector('#bte-sheet-close-btn').addEventListener('click', close);
    document.addEventListener('keydown', onKeyDown);
  }

  function close() {
    scrim.classList.remove('bte-bottom-sheet-scrim--visible');
    sheet.classList.remove('bte-bottom-sheet--open');
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
