import './js/Crew/crew-list';
import fetchPopular from './js/fetchPopular';
import searchMovie from './js/searchMovie';
import fetchGenres from './js/fetchGenres';
import './sass/main.scss';

import { renderCard } from './JS/renderCard';
import { renderModal } from './js/modal_close';
const list = document.querySelector('.gallery__list');
const form = document.querySelector('.search');
const warning = document.querySelector('.warning');

// Cлушатели
document.addEventListener('submit', onFormSubmit);

// Функция поиска по названию фильма
function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { search },
  } = e.target;
  const query = search.value;

  searchMovie(query).then(data => {
    const length = data.results.length;
    if (length === 0) {
      warning.classList.remove('hidden');
      form.reset();
    } else {
      warning.classList.add('hidden');
      const movies = data.results;
      const markup = renderCard(movies);
      list.innerHTML = markup;
    }
  });
}

// Функция загружает популярные фильмы на главную страницу

fetchPopular().then(data => {
  const popular = data.results;
  // console.log(popular);
  const markup = renderCard(popular);
  list.innerHTML = markup;
  renderModal(popular);
});

// renderModal(popular);
