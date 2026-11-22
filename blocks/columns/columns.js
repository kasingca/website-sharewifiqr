export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns: a column with a picture and no heading (a caption may follow)
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      if (col.querySelector('picture') && !col.querySelector('h1, h2, h3, h4, ul, ol')) {
        col.classList.add('columns-img-col');
      }
    });
  });
}
