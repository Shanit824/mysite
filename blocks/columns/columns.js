import { getConfigValue } from '../../scripts/configs.js';

export default async function decorate(block) {
  const config = await getConfigValue('get-config-value');
  if (config) {
    block.classList.add('added-class-via-config-feature');
  }
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}
