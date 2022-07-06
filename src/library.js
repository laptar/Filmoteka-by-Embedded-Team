import './js/Crew/crew-list';
import './js/scroll-up';
import './sass/main.scss';
import { renderMovieCard } from './js/renderMovieCard';
import { renderModal } from './js/modal_close';

const watched = document.querySelector('.watched');
const queue = document.querySelector('.queue');

const libList = document.querySelector('.gallery-library__list');
const wachedArray = JSON.parse(localStorage.getItem('watched'));
const queueArray = JSON.parse(localStorage.getItem('queue'));
renderMovieCard(wachedArray);
const markup = renderMovieCard(wachedArray);
libList.innerHTML = markup;

queue.addEventListener('click', clickBtn);

function clickBtn() {
  libList.innerHTML = renderMovieCard(queueArray);
}

watched.addEventListener('click', clickBtnWatch);
function clickBtnWatch(event) {
  console.log(event.target);
  libList.innerHTML = renderMovieCard(wachedArray);
}
