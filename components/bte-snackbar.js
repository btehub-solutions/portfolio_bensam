/**
 * M3 Spec-Compliant Snackbar Controller
 */

let hostElement = null;

function getHost() {
  if (!hostElement || !document.body.contains(hostElement)) {
    hostElement = document.createElement('div');
    hostElement.className = 'bte-snackbar-host';
    hostElement.setAttribute('aria-live', 'polite');
    hostElement.setAttribute('role', 'status');
    document.body.appendChild(hostElement);
  }
  return hostElement;
}

export function showSnackbar({ message, actionText, onAction, duration = 4000 }) {
  const host = getHost();
  const bar = document.createElement('div');
  bar.className = 'bte-snackbar';

  const text = document.createElement('span');
  text.className = 'bte-snackbar__text';
  text.textContent = message;
  bar.appendChild(text);

  if (actionText) {
    const action = document.createElement('button');
    action.type = 'button';
    action.className = 'bte-snackbar__action';
    action.textContent = actionText;
    action.addEventListener('click', () => {
      if (onAction) onAction();
      dismiss();
    });
    bar.appendChild(action);
  }

  host.appendChild(bar);

  // Trigger animation
  requestAnimationFrame(() => {
    bar.classList.add('bte-snackbar--visible');
  });

  let timeoutId = setTimeout(dismiss, duration);

  function dismiss() {
    clearTimeout(timeoutId);
    bar.classList.remove('bte-snackbar--visible');
    setTimeout(() => {
      if (bar.parentElement) bar.parentElement.removeChild(bar);
    }, 300);
  }

  return { dismiss };
}
