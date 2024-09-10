// show more catalog btn ------------------------
const showMore = document.querySelector('.showmore-catalog-btn');
let items = 4;
const catalogLength = document.querySelectorAll('.catalog-item').length;
showMore.addEventListener('click', () => {
  items += 1;
  const array = Array.from(document.querySelector('.catalog-list').children);
  const visItems = array.slice(0, items);
  visItems.forEach(el => el.classList.add('is-visible'));
  if (visItems.length === catalogLength) {
    showMore.style.display = 'none';
  }
});
