import './js/preloader';
import './js/crew1/crew-list';
import './js/scroll-up.js';
import './sass/main.scss';
import './js/theme-switcher';
import { renderMovieCard } from './js/renderMovieCard.js';
import { renderModal } from './js/modal';
import { counter } from './js/btn-pag';
import { toTopOnClick } from './js/scroll-up';
import { clickCounter } from './js/btn-pag';

const watched = document.querySelector('.watched');
const queue = document.querySelector('.queue');
const perPage = document.querySelector('#perPage');
const libList = document.querySelector('.gallery-library__list');
const btnList = document.querySelector('.btn__list');

function addArrToLocalStor(key) {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
}
let wachedArray = addArrToLocalStor('watched');
let queueArray = addArrToLocalStor('queue');

sessionStorage.getItem('currentList')
  ? JSON.parse(sessionStorage.getItem('currentList'))
  : sessionStorage.setItem('currentList', JSON.stringify('watched'));
let currentList = JSON.parse(sessionStorage.getItem('currentList'));

sessionStorage.getItem('perPage')
  ? JSON.parse(sessionStorage.getItem('perPage'))
  : sessionStorage.setItem('perPage', JSON.stringify(9));
let currentPerPage = Number(JSON.parse(sessionStorage.getItem('perPage')));
perPage.value = currentPerPage;

sessionStorage.getItem('currentPageLibWa')
  ? JSON.parse(sessionStorage.getItem('currentPageLibWa'))
  : sessionStorage.setItem('currentPageLibWa', JSON.stringify(1));
let currentPageLibWa = JSON.parse(sessionStorage.getItem('currentPageLibWa'));

sessionStorage.getItem('currentPageLibQu')
  ? JSON.parse(sessionStorage.getItem('currentPageLibQu'))
  : sessionStorage.setItem('currentPageLibQu', JSON.stringify(1));
let currentPageLibQu = JSON.parse(sessionStorage.getItem('currentPageLibQu'));

if (currentList === 'watched') {
  watched.classList.add('btn-active');
  queue.classList.remove('btn-active');
  let total_pages = Math.ceil(wachedArray.length / currentPerPage);
  counter(total_pages, currentPageLibWa);
  libList.innerHTML = renderMovieCard(
    wachedArray.slice(
      (currentPageLibWa - 1) * currentPerPage,
      currentPerPage * currentPageLibWa
    )
  );
} else {
  watched.classList.remove('btn-active');
  queue.classList.add('btn-active');
  let total_pages = Math.ceil(queueArray.length / currentPerPage);
  counter(total_pages, currentPageLibQu);
  libList.innerHTML = renderMovieCard(
    queueArray.slice(
      (currentPageLibQu - 1) * currentPerPage,
      currentPerPage * currentPageLibQu
    )
  );
}

queue.addEventListener('click', clickBtnQueue);
function clickBtnQueue() {
  watched.classList.remove('btn-active');
  queue.classList.add('btn-active');
  sessionStorage.setItem('currentList', JSON.stringify('queue'));
  currentList = 'queue';
  queueArray = addArrToLocalStor('queue');
  let total_pages = Math.ceil(queueArray.length / currentPerPage);
  counter(total_pages, currentPageLibQu);
  libList.innerHTML = renderMovieCard(
    queueArray.slice(
      (currentPageLibQu - 1) * currentPerPage,
      currentPerPage * currentPageLibQu
    )
  );
}

watched.addEventListener('click', clickBtnWatch);
function clickBtnWatch() {
  watched.classList.add('btn-active');
  queue.classList.remove('btn-active');
  sessionStorage.setItem('currentList', JSON.stringify('watched'));
  currentList = 'watched';
  wachedArray = addArrToLocalStor('watched');
  let total_pages = Math.ceil(wachedArray.length / currentPerPage);
  counter(total_pages, currentPageLibWa);
  libList.innerHTML = renderMovieCard(
    wachedArray.slice(
      (currentPageLibWa - 1) * currentPerPage,
      currentPerPage * currentPageLibWa
    )
  );
}

libList.addEventListener('click', clickCard);

function clickCard(evt) {
  if (currentList === 'watched') {
    renderModal(evt, 'watched');
    wachedArray = addArrToLocalStor('watched');
    let total_pages = Math.ceil(wachedArray.length / currentPerPage);
    counter(total_pages, currentPageLibWa);
    libList.innerHTML = renderMovieCard(
      wachedArray.slice(
        (currentPageLibWa - 1) * currentPerPage,
        currentPerPage * currentPageLibWa
      )
    );
  } else {
    renderModal(evt, 'queue');
    queueArray = addArrToLocalStor('queue');
    let total_pages = Math.ceil(queueArray.length / currentPerPage);
    counter(total_pages, currentPageLibQu);
    libList.innerHTML = renderMovieCard(
      queueArray.slice(
        (currentPageLibQu - 1) * currentPerPage,
        currentPerPage * currentPageLibQu
      )
    );
  }
}

perPage.addEventListener('change', onPage);
function onPage(evt) {
  let currentPerPage = evt.target.value;
  sessionStorage.setItem('perPage', JSON.stringify(currentPerPage));

  if (currentList === 'watched') {
    watched.classList.add('btn-active');
    queue.classList.remove('btn-active');
    wachedArray = addArrToLocalStor('watched');
    let total_pages = Math.ceil(wachedArray.length / currentPerPage);
    counter(total_pages, currentPageLibWa);
    libList.innerHTML = renderMovieCard(
      wachedArray.slice(
        (currentPageLibWa - 1) * currentPerPage,
        currentPerPage * currentPageLibWa
      )
    );
  } else {
    watched.classList.remove('btn-active');
    queue.classList.add('btn-active');
    queueArray = addArrToLocalStor('queue');
    let total_pages = Math.ceil(queueArray.length / currentPerPage);
    counter(total_pages, currentPageLibQu);
    libList.innerHTML = renderMovieCard(
      queueArray.slice(
        (currentPageLibQu - 1) * currentPerPage,
        currentPerPage * currentPageLibQu
      )
    );
  }
}

btnList.addEventListener('click', onClick);
function onClick(evt) {
  if (evt.target.nodeName === 'BUTTON') {
    toTopOnClick();
    if (currentList === 'watched') {
      currentPageLibWa = JSON.parse(sessionStorage.getItem('currentPageLibWa'));
      currentPageLibWa = clickCounter(evt, currentPageLibWa);
      currentPerPage = Number(JSON.parse(sessionStorage.getItem('perPage')));
      sessionStorage.setItem(
        'currentPageLibWa',
        JSON.stringify(currentPageLibWa)
      );
      wachedArray = addArrToLocalStor('watched');
      let total_pages = Math.ceil(wachedArray.length / currentPerPage);
      counter(total_pages, currentPageLibWa);
      libList.innerHTML = renderMovieCard(
        wachedArray.slice(
          (currentPageLibWa - 1) * currentPerPage,
          currentPerPage * currentPageLibWa
        )
      );
    } else {
      currentPageLibQu = JSON.parse(sessionStorage.getItem('currentPageLibQu'));
      currentPageLibQu = clickCounter(evt, currentPageLibQu);
      currentPerPage = Number(JSON.parse(sessionStorage.getItem('perPage')));

      sessionStorage.setItem(
        'currentPageLibQu',
        JSON.stringify(currentPageLibQu)
      );
      queueArray = addArrToLocalStor('queue');
      let total_pages = Math.ceil(queueArray.length / currentPerPage);
      counter(total_pages, currentPageLibQu);
      libList.innerHTML = renderMovieCard(
        queueArray.slice(
          (currentPageLibQu - 1) * currentPerPage,
          currentPerPage * currentPageLibQu
        )
      );
    }
  }
}
