/**
 * M3 Spec-Compliant Tooltip Controller
 * Plain & Rich Tooltips
 */

let activeTooltip = null;

export function attachTooltip(anchor, { text, subhead, rich = false, actionText, onAction } = {}) {
  if (!anchor) return null;

  const tooltipId = 'bte-tip-' + Math.random().toString(36).substring(2, 9);
  const tip = document.createElement('div');
  tip.id = tooltipId;
  tip.setAttribute('role', 'tooltip');

  if (rich) {
    tip.className = 'bte-tooltip-rich';
    if (subhead) {
      const titleEl = document.createElement('div');
      titleEl.className = 'bte-tooltip-rich__subhead';
      titleEl.textContent = subhead;
      tip.appendChild(titleEl);
    }
    const bodyEl = document.createElement('div');
    bodyEl.className = 'bte-tooltip-rich__body';
    bodyEl.textContent = text;
    tip.appendChild(bodyEl);

    if (actionText) {
      const actionsEl = document.createElement('div');
      actionsEl.className = 'bte-tooltip-rich__actions';
      const actionBtn = document.createElement('button');
      actionBtn.type = 'button';
      actionBtn.className = 'md-typescale-label-large text-primary';
      actionBtn.style.background = 'none';
      actionBtn.style.border = 'none';
      actionBtn.style.cursor = 'pointer';
      actionBtn.textContent = actionText;
      actionBtn.addEventListener('click', () => {
        if (onAction) onAction();
        hide();
      });
      actionsEl.appendChild(actionBtn);
      tip.appendChild(actionsEl);
    }
    anchor.setAttribute('aria-details', tooltipId);
  } else {
    tip.className = 'bte-tooltip';
    tip.textContent = text;
    anchor.setAttribute('aria-describedby', tooltipId);
  }

  function show() {
    if (activeTooltip && activeTooltip !== tip) {
      activeTooltip.classList.remove('bte-tooltip--visible', 'bte-tooltip-rich--visible');
      if (activeTooltip.parentElement) activeTooltip.parentElement.removeChild(activeTooltip);
    }

    document.body.appendChild(tip);
    positionTooltip();
    requestAnimationFrame(() => {
      tip.classList.add(rich ? 'bte-tooltip-rich--visible' : 'bte-tooltip--visible');
      activeTooltip = tip;
    });

    document.addEventListener('keydown', onKeyDown);
  }

  function hide() {
    tip.classList.remove('bte-tooltip--visible', 'bte-tooltip-rich--visible');
    setTimeout(() => {
      if (tip.parentElement) tip.parentElement.removeChild(tip);
      if (activeTooltip === tip) activeTooltip = null;
    }, 150);
    document.removeEventListener('keydown', onKeyDown);
  }

  function onKeyDown(e) {
    if (e.key === 'Escape') {
      hide();
    }
  }

  function positionTooltip() {
    const rect = anchor.getBoundingClientRect();
    const tipRect = tip.getBoundingClientRect();

    // Place below trigger by default, or above if near bottom edge
    let top = rect.bottom + 8;
    if (top + tipRect.height > window.innerHeight - 8) {
      top = rect.top - tipRect.height - 8;
    }

    let left = rect.left + (rect.width / 2) - (tipRect.width / 2);
    // Boundary check for screen edges
    if (left < 8) left = 8;
    if (left + tipRect.width > window.innerWidth - 8) {
      left = window.innerWidth - tipRect.width - 8;
    }

    tip.style.top = `${Math.max(8, top)}px`;
    tip.style.left = `${left}px`;
  }

  anchor.addEventListener('mouseenter', show);
  anchor.addEventListener('mouseleave', hide);
  anchor.addEventListener('focus', show);
  anchor.addEventListener('blur', hide);

  return { show, hide, element: tip };
}
