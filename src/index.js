import './JS/scroll-up';
import './js/Crew/crew-list';
import { fetchPopular } from './js/fetchPopular.js';
import { searchMovie } from './js/searchMovie';
import { fetchGenres } from './js/fetchGenres.js';
import { renderMovieCard } from './js/renderMovieCard';
import { addToLocalStorage } from './js/addToLocalStorage';
import './sass/main.scss';

import { renderCard } from './JS/renderCard';
import { renderModal } from './js/modal_close';

const list = document.querySelector('.gallery__list');
const form = document.querySelector('.search');
const warning = document.querySelector('.warning');

//добавляет в локальное хранилище

addToLocalStorage(fetchPopular, fetchGenres);

fetchPopular().then(data => {
  const popular = data.results;
  const markup = renderMovieCard(popular);
  list.innerHTML = markup;
});

// Cлушатели
document.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const query = e.target.search.value;
  addToLocalStorage(searchMovie, fetchGenres, query);
  searchMovie(query).then(data => {
    const length = data.results.length;
    if (length === 0) {
      warning.classList.remove('hidden');
      form.reset();
    } else {
      warning.classList.add('hidden');
      const movies = data.results;
      const markup = renderMovieCard(movies);
      list.innerHTML = markup;
    }
  });
}
renderModal();
