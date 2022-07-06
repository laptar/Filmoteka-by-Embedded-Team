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
let carrentPaege = 'watched';

watched.addEventListener('click', clickBtnWatch);
function clickBtnWatch() {
  carrentPaege = 'watched';
  libList.innerHTML = renderMovieCard(wachedArray);
  renderModal('watched');
  console.log(carrentPaege);
}

queue.addEventListener('click', clickBtn);
function clickBtn() {
  carrentPaege = 'queue';
  libList.innerHTML = renderMovieCard(queueArray);
  renderModal('queue');
  console.log(carrentPaege);
}

console.log(carrentPaege);
if (carrentPaege === 'watched') {
  renderModal('watched');
} else {
  renderModal('queue');
}
