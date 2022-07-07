import { renderMovieCard } from './renderMovieCard';
const list = document.querySelector('.gallery__list');
const warning = document.querySelector('.warning');

function addToLocalStorage(fetch, fetchGenres, movie = '') {
  fetch(movie).then(cards => {
    // console.log(card.results);
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


      localStorage.setItem('currentPage', JSON.stringify(cardGanr));
      if (cardGanr.length === 0) {
        warning.classList.remove('hidden');
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
