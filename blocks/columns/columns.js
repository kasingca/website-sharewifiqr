/**
 * Groups each h3 (with a leading icon paragraph, if any) and the elements after it
 * into a card wrapper. Authored elements are moved, never rebuilt.
 * @param {Element} col The column cell
 */
function groupCards(col) {
  const heads = [...col.querySelectorAll(':scope > h3')];
  if (heads.length < 2) return;
  col.classList.add('columns-stack');
  let card = null;
  [...col.children].forEach((el) => {
    const startsCard = el.tagName === 'H3'
      || (el.tagName === 'P' && el.querySelector('.icon') && el.nextElementSibling?.tagName === 'H3');
    if (startsCard && !(el.tagName === 'H3' && card && card.lastElementChild?.querySelector?.('.icon')
      && card.children.length === 1)) {
      card = document.createElement('div');
      card.className = 'columns-card';
      el.before(card);
    }
    if (card) card.append(el);
  });
}

export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      // image column: a picture and no heading (a caption may follow)
      if (col.querySelector('picture, img') && !col.querySelector('h1, h2, h3, h4, ul, ol')) {
        col.classList.add('columns-img-col');
      } else {
        groupCards(col);
      }
    });
  });
}
