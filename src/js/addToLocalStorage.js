import { renderMovieCard } from './renderMovieCard';
import { counter } from './btn-pag';

const list = document.querySelector('.gallery__list');
const warning = document.querySelector('.warning');

function addToLocalStorage(fetch, fetchGenres, page, movie = '') {
  sessionStorage.setItem('currentNumPage', JSON.stringify(page));
  sessionStorage.setItem('currentSerch', JSON.stringify(movie));
  fetch(page, movie).then(cards => {
    console.log(cards.total_pages);
    fetchGenres().then(data => {
      const cardGanr = cards.results;
      cards.results.forEach((card, ind) => {
        card.genre_ids.forEach((id, indx) => {
          data.genres.forEach(el => {
            if (el.id === id) {
              cardGanr[ind].genre_ids[indx] = el.name;
            }
          });
        });
      });

      counter(cards.total_pages, page);

      localStorage.setItem('currentPage', JSON.stringify(cardGanr));
      if (cardGanr.length === 0) {
        warning.classList.remove('hidden');
        sessionStorage.setItem('currentSerch', JSON.stringify(''));
        form.reset();
      } else {
        warning.classList.add('hidden');
        const markup = renderMovieCard(cardGanr);
        list.innerHTML = markup;
      }
    });
  });
}

export { addToLocalStorage };
