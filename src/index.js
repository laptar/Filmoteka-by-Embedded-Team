import './js/preloader';
import './js/scroll-up.js';
import './js/crew1/crew-list';
import { fetchPopular } from './js/fetchPopular.js';
import { fetchGenres } from './js/fetchGenres.js';
import { searchMovie } from './js/searchMovie';
import { addToLocalStorage } from './js/addToLocalStorage';
import './js/theme-switcher';
import './sass/main.scss';
import { toTopOnClick } from './js/scroll-up';

import { renderModal } from './js/modal.js';
import { clickCounter } from './js/btn-pag';
const btnList = document.querySelector('.btn__list');
const list = document.querySelector('.gallery__list');
const form = document.querySelector('.search');
const warning = document.querySelector('.warning');
const counterPage = document.querySelector('.counter');
const logo = document.querySelector('.header__logo');

let currentPage = sessionStorage.getItem('currentNumPage')
  ? JSON.parse(sessionStorage.getItem('currentNumPage'))
  : 1;
let query = sessionStorage.getItem('currentSerch')
  ? JSON.parse(sessionStorage.getItem('currentSerch'))
  : '';

document.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  query = e.target.search.value;
  addToLocalStorage(searchMovie, fetchGenres, 1, query);
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
  if (evt.target.nodeName === 'BUTTON') {
    toTopOnClick();
    console.log(evt.target.nodeName);
    currentPage = sessionStorage.getItem('currentNumPage')
      ? JSON.parse(sessionStorage.getItem('currentNumPage'))
      : 1;
    query = sessionStorage.getItem('currentSerch')
      ? JSON.parse(sessionStorage.getItem('currentSerch'))
      : '';
    currentPage = clickCounter(evt, currentPage);
    if (!query) {
      addToLocalStorage(fetchPopular, fetchGenres, currentPage);
    } else {
      addToLocalStorage(searchMovie, fetchGenres, currentPage, query);
    }
  }
}

// -----GoHome
logo.addEventListener('click', goHome);

function goHome() {
  console.log(123);
  query = '';
  currentPage = 1;
  addToLocalStorage(fetchPopular, fetchGenres, currentPage);
}
