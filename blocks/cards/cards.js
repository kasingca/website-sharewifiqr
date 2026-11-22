import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * Cards: one row per card; a cell holding only an image becomes the card image,
 * any other cell the card body. Variants (features, steps, compare, posts, pricing)
 * are styled in CSS only.
 * @param {Element} block The cards block element
 */
export default function decorate(block) {
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      const imageOnly = div.querySelector('picture, img')
        && !div.querySelector('h1, h2, h3, h4, ul, ol, p:not(:has(picture, img))');
      div.className = imageOnly ? 'cards-card-image' : 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimized = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    const optimizedImg = optimized.querySelector('img');
    if (img.width) optimizedImg.width = img.width;
    if (img.height) optimizedImg.height = img.height;
    img.closest('picture').replaceWith(optimized);
  });
  block.replaceChildren(ul);
}
