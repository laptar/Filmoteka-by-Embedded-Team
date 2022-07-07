import './js/Crew/crew-list';
import './js/scroll-up.js';
import './sass/main.scss';
import './js/theme-switcher';
import { renderMovieCard } from './js/renderMovieCard.js';
import { renderModal } from './js/modal.js';

const watched = document.querySelector('.watched');
const queue = document.querySelector('.queue');

const libList = document.querySelector('.gallery-library__list');
const wachedArray = JSON.parse(localStorage.getItem('watched'));
const queueArray = JSON.parse(localStorage.getItem('queue'));

const markup = renderMovieCard(wachedArray);
libList.innerHTML = markup;
let currentList = 'watched';

queue.addEventListener('click', clickBtn);
function clickBtn() {
  currentList = 'queue';
  libList.innerHTML = renderMovieCard(queueArray);
  queue.classList.add('btn-active');
  watched.classList.remove('btn-active');
}

watched.addEventListener('click', clickBtnWatch);
function clickBtnWatch(event) {
  currentList = 'watched';
  console.log(event.target);
  libList.innerHTML = renderMovieCard(wachedArray);
  queue.classList.remove('btn-active');
  watched.classList.add('btn-active');
}

libList.addEventListener('click', clickCard);
function clickCard(evt) {
  if (currentList === 'watched') {
    renderModal(evt, 'watched');
  } else {
    renderModal(evt, 'queue');
  }
}
