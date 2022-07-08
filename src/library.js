import './js/crew1/crew-list';
import './js/scroll-up.js';
import './sass/main.scss';
import './js/theme-switcher';
import { renderMovieCard } from './js/renderMovieCard.js';
import { renderModal } from './js/modal';

const watched = document.querySelector('.watched');
const queue = document.querySelector('.queue');

const libList = document.querySelector('.gallery-library__list');

function addArrToLocalStor(key) {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
}
let wachedArray = addArrToLocalStor('watched');
let queueArray = addArrToLocalStor('queue');

let currentList = sessionStorage.getItem('currentList')
  ? JSON.parse(sessionStorage.getItem('currentList'))
  : 'watched';

if (currentList === 'watched') {
  watched.classList.add('btn-active');
  queue.classList.remove('btn-active');
  console.log(wachedArray);
  libList.innerHTML = renderMovieCard(wachedArray);
} else {
  watched.classList.remove('btn-active');
  queue.classList.add('btn-active');
  libList.innerHTML = renderMovieCard(queueArray);
}

queue.addEventListener('click', clickBtn);
function clickBtn() {
  watched.classList.remove('btn-active');
  queue.classList.add('btn-active');
  sessionStorage.setItem('currentList', JSON.stringify('queue'));
  currentList = 'queue';
  queueArray = addArrToLocalStor('queue');
  libList.innerHTML = renderMovieCard(queueArray);
}

watched.addEventListener('click', clickBtnWatch);
function clickBtnWatch() {
  watched.classList.add('btn-active');
  queue.classList.remove('btn-active');
  sessionStorage.setItem('currentList', JSON.stringify('watched'));
  currentList = 'watched';
  wachedArray = addArrToLocalStor('watched');
  libList.innerHTML = renderMovieCard(wachedArray);
}

libList.addEventListener('click', clickCard);
function clickCard(evt) {
  if (currentList === 'watched') {
    renderModal(evt, 'watched');
  } else {
    renderModal(evt, 'queue');
  }
}
