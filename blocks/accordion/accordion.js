/**
 * Accordion (FAQ): one row per item — question cell, answer cell.
 * The authored question moves into a title div beside a toggle button, so it
 * stays editable in the Experience Workspace; the whole title row toggles.
 * @param {Element} block The accordion block element
 */
export default function decorate(block) {
  [...block.children].forEach((row, i) => {
    const [label, body] = row.children;
    if (!label) return;
    const item = document.createElement('div');
    item.className = 'accordion-item';

    const head = document.createElement('div');
    head.className = 'accordion-head';
    const title = document.createElement('div');
    title.className = 'accordion-title';
    title.append(...label.childNodes);
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'accordion-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', `Show answer: ${title.textContent.trim()}`);

    const panel = document.createElement('div');
    panel.className = 'accordion-panel';
    panel.id = `${block.id || 'accordion'}-panel-${i}`;
    panel.hidden = true;
    if (body) panel.append(...body.childNodes);
    toggle.setAttribute('aria-controls', panel.id);

    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', open);
      panel.hidden = !open;
      item.classList.toggle('open', open);
    };
    head.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));

    head.append(title, toggle);
    item.append(head, panel);
    row.replaceWith(item);
  });
}
