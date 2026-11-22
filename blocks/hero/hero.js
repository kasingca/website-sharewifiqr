/**
 * Hero: one row, two cells — copy (eyebrow, h1, lede, CTAs, note) and media (picture).
 * Cells are classified by content, so authors may put the image first or second.
 * @param {Element} block The hero block element
 */
export default function decorate(block) {
  const cells = [...block.querySelectorAll(':scope > div > div')];
  cells.forEach((cell) => {
    const onlyMedia = cell.querySelector('picture') && !cell.querySelector('h1, h2, p:not(:has(picture))');
    cell.classList.add(onlyMedia ? 'hero-media' : 'hero-copy');
  });

  // the hero image is the LCP candidate: load it eagerly
  const img = block.querySelector('.hero-media img');
  if (img) {
    img.loading = 'eager';
    img.fetchPriority = 'high';
  }
}
