import './js/scroll-up.js';
import './js/Crew/crew-list.js';
import { fetchPopular } from './js/fetchPopular.js';
import { searchMovie } from './js/searchMovie';
import { fetchGenres } from './js/fetchGenres.js';
import { renderMovieCard } from './js/renderMovieCard';
import { addToLocalStorage } from './js/addToLocalStorage';
import './js/theme-switcher';
import './sass/main.scss';

import { renderCard } from './js/renderCard';
import { renderModal } from './js/modal.js';

const list = document.querySelector('.gallery__list');
const form = document.querySelector('.search');
const warning = document.querySelector('.warning');

//добавляет в локальное хранилище

addToLocalStorage(fetchPopular, fetchGenres);


document.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const query = e.target.search.value;
  addToLocalStorage(searchMovie, fetchGenres, query);
}

list.addEventListener('click', clickHeroCard);
function clickHeroCard(evt) {
  renderModal(evt, 'currentPage');
}
