import './js/preloader';
import './js/crew/crew-list';
import './js/scroll-up.js';
import './sass/main.scss';
import './js/theme-switcher';
import { renderMovieCard } from './js/renderMovieCard.js';
import { renderModal } from './js/modal';
import { counter } from './js/btn-pag';
import { toTopOnClick } from './js/scroll-up';
import { clickCounter } from './js/btn-pag';

const watchedBtn = document.querySelector('.watched');
const queueBtn = document.querySelector('.queue');
const perPage = document.querySelector('#perPage');
const libList = document.querySelector('.gallery-library__list');
const btnList = document.querySelector('.btn__list');

function addToLocalStor(key, value) {
  localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : localStorage.setItem(key, JSON.stringify(value));
  return JSON.parse(localStorage.getItem(key));
}
// let wachedArray = addToLocalStor('watched', []);
// let queueArray = addToLocalStor('queue', []);

function addToSessionStor(key, value) {
  sessionStorage.getItem(key)
    ? JSON.parse(sessionStorage.getItem(key))
    : sessionStorage.setItem(key, JSON.stringify(value));
  return JSON.parse(sessionStorage.getItem(key));
}

let currentList = addToSessionStor('currentList', 'watched');
// let currentPerPageWa = addToSessionStor('perPageWa', 9);
// let currentPerPageQu = addToSessionStor('perPageQu', 9);
// let currentPageLibWa = addToSessionStor('currentPageLibWa', 1);
// let currentPageLibQu = addToSessionStor('currentPageLibQu', 1);

function renderWatchadFilmCare() {
  const wachedArray = addToLocalStor('watched', []);
  const currentPerPageWa = addToSessionStor('perPageWa', 9);
  const currentPageLibWa = addToSessionStor('currentPageLibWa', 1);
  perPage.value = currentPerPageWa;
  const total_pages = Math.ceil(wachedArray.length / currentPerPageWa);
  counter(total_pages, currentPageLibWa);
  libList.innerHTML = renderMovieCard(
    wachedArray.slice(
      (currentPageLibWa - 1) * currentPerPageWa,
      currentPerPageWa * currentPageLibWa
    )
  );
}

function renderQueueFilmCard() {
  const queueArray = addToLocalStor('queue', []);
  const currentPerPageQu = addToSessionStor('perPageQu', 9);
  const currentPageLibQu = addToSessionStor('currentPageLibQu', 1);
  perPage.value = currentPerPageQu;
  const total_pages = Math.ceil(queueArray.length / currentPerPageQu);
  counter(total_pages, currentPageLibQu);
  libList.innerHTML = renderMovieCard(
    queueArray.slice(
      (currentPageLibQu - 1) * currentPerPageQu,
      currentPerPageQu * currentPageLibQu
    )
  );
}

// -------Стартовий рендер---------

if (JSON.parse(sessionStorage.getItem('currentList')) === 'watched') {
  watchedBtn.classList.add('btn-active');
  queueBtn.classList.remove('btn-active');
  renderWatchadFilmCare();
} else {
  watchedBtn.classList.remove('btn-active');
  queueBtn.classList.add('btn-active');
  renderQueueFilmCard();
}

// -------Перемикання кнопками вочед і кюе---------

watchedBtn.addEventListener('click', clickBtnWatch);
function clickBtnWatch() {
  watchedBtn.classList.add('btn-active');
  queueBtn.classList.remove('btn-active');
  sessionStorage.setItem('currentList', JSON.stringify('watched'));
  renderWatchadFilmCare();
}

queueBtn.addEventListener('click', clickBtnQueue);
function clickBtnQueue() {
  watchedBtn.classList.remove('btn-active');
  queueBtn.classList.add('btn-active');
  sessionStorage.setItem('currentList', JSON.stringify('queue'));
  renderQueueFilmCard();
}

// -------Зміна кількості елементів на сторінці---------

perPage.addEventListener('change', onPage);
function onPage(evt) {
  if (JSON.parse(sessionStorage.getItem('currentList')) === 'watched') {
    const PerPageWa = Number(evt.target.value);
    sessionStorage.setItem('perPageWa', JSON.stringify(PerPageWa));
    sessionStorage.setItem('currentPageLibWa', JSON.stringify(1));
    renderWatchadFilmCare();
  } else {
    const PerPageQu = Number(evt.target.value);
    sessionStorage.setItem('perPageQu', JSON.stringify(PerPageQu));
    sessionStorage.setItem('currentPageLibQu', JSON.stringify(1));
    renderQueueFilmCard();
  }
}

// -------Кнопки пагінації---------

btnList.addEventListener('click', onClick);
function onClick(evt) {
  if (evt.target.nodeName === 'BUTTON') {
    toTopOnClick();
    if (JSON.parse(sessionStorage.getItem('currentList')) === 'watched') {
      let curPage = addToSessionStor('currentPageLibWa', 1);
      curPage = Number(clickCounter(evt, curPage));
      sessionStorage.setItem('currentPageLibWa', JSON.stringify(curPage));
      renderWatchadFilmCare();
    } else {
      let curPage = JSON.parse(sessionStorage.getItem('currentPageLibQu'));
      curPage = Number(clickCounter(evt, curPage));
      sessionStorage.setItem('currentPageLibQu', JSON.stringify(curPage));
      renderQueueFilmCard();
    }
  }
}

// ----

libList.addEventListener('click', clickCard);
function clickCard(evt) {
  if (JSON.parse(sessionStorage.getItem('currentList')) === 'watched') {
    renderModal(evt, 'watched');
  } else {
    renderModal(evt, 'queue');
  }
}

export { renderWatchadFilmCare, renderQueueFilmCard };
