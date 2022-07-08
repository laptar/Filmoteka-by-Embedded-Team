import './js/Crew/crew-list';
import './js/scroll-up.js';
import './sass/main.scss';
import './js/theme-switcher';
import { renderMovieCard } from './js/renderMovieCard.js';
import { renderModal } from './js/modal';

const watched = document.querySelector('.watched');
const queue = document.querySelector('.queue');

const libList = document.querySelector('.gallery-library__list');

let wachedArray = JSON.parse(localStorage.getItem('watched'));
let queueArray = JSON.parse(localStorage.getItem('queue'));

let currentList = sessionStorage.getItem('currentList')
  ? JSON.parse(sessionStorage.getItem('currentList'))
  : 'watched';

if (currentList === 'watched') {
  libList.innerHTML = renderMovieCard(wachedArray);
} else {
  libList.innerHTML = renderMovieCard(queueArray);
}

// let currentList = 'watched';

if (wachedArray.length === 0) {
  libList.innerHTML = `<img
        class="gallery"
        src="https://c.tenor.com/KOZLvzU0o4kAAAAC/no-results.gif"
        width="500px"
        alt=""
      />`;
}
if (queueArray.length === 0) {
  libList.innerHTML = `<img
        class="gallery"
        src="https://c.tenor.com/KOZLvzU0o4kAAAAC/no-results.gif"
        width="500px"
        alt=""
      />`;
}

queue.addEventListener('click', clickBtn);
function clickBtn() {
  sessionStorage.setItem('currentList', JSON.stringify('queue'));
  currentList = 'queue';
  queueArray = JSON.parse(localStorage.getItem('queue'));
  libList.innerHTML = renderMovieCard(queueArray);
  queue.classList.add('btn-active');
  watched.classList.remove('btn-active');
}

watched.addEventListener('click', clickBtnWatch);
function clickBtnWatch() {
  sessionStorage.setItem('currentList', JSON.stringify('watched'));
  currentList = 'watched';
  wachedArray = JSON.parse(localStorage.getItem('watched'));
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
