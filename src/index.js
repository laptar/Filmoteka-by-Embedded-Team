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
import { counter, clickCounter } from './js/btn-pag';
const btnList = document.querySelector('.btn__list');
const list = document.querySelector('.gallery__list');
const form = document.querySelector('.search');
const warning = document.querySelector('.warning');
const counterPage = document.querySelector('.counter');

let currentPage = 1;
let query = '';
// console.log(Number(counterPage.textContent));
// addToLocalStorage(fetchPopular, fetchGenres);
document.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  query = e.target.search.value;
  addToLocalStorage(searchMovie, fetchGenres, currentPage, query);
}

if (!query) {
  addToLocalStorage(fetchPopular, fetchGenres, currentPage);
} else {
  addToLocalStorage(searchMovie, fetchGenres, currentPage, query);
}

list.addEventListener('click', clickHeroCard);
function clickHeroCard(evt) {
  renderModal(evt, 'currentPage');
}

btnList.addEventListener('click', onClick);
function onClick(evt) {
  // currentPage = Number(counterPage.textContent);
  currentPage = clickCounter(evt, currentPage);
  console.log(currentPage);
  if (!query) {
    addToLocalStorage(fetchPopular, fetchGenres, currentPage);
  } else {
    addToLocalStorage(searchMovie, fetchGenres, currentPage, query);
  }
}
