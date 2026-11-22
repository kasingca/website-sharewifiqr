/**
 * Hero: centred stack, one cell per row.
 * Rows are classified by content: copy (h1, lede, CTAs, note), a "works with" list,
 * and the product media (picture). A two-cell row is supported too.
 * @param {Element} block The hero block element
 */
export default function decorate(block) {
  block.querySelectorAll(':scope > div > div').forEach((cell) => {
    if (cell.querySelector('h1, h2')) cell.classList.add('hero-copy');
    else if (cell.querySelector('picture, img')) cell.classList.add('hero-media');
    else if (cell.querySelector('ul')) cell.classList.add('hero-chips');
    else cell.classList.add('hero-copy');
  });

  // the hero image is the LCP candidate: load it eagerly
  const img = block.querySelector('.hero-media img');
  if (img) {
    img.loading = 'eager';
    img.fetchPriority = 'high';
  }
}
