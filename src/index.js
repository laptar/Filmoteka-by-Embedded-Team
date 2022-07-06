import './js/scroll-up';
import './js/Crew/crew-list';
import { fetchPopular } from './js/fetchPopular.js';
import { searchMovie } from './js/searchMovie';
import { fetchGenres } from './js/fetchGenres.js';
import { renderMovieCard } from './js/renderMovieCard';
import { addToLocalStorage } from './js/addToLocalStorage';
import './sass/main.scss';

import { renderCard } from './js/renderCard';
import { renderModal } from './js/modal_close';
import { counter } from './js/btn-pag';

const list = document.querySelector('.gallery__list');
const form = document.querySelector('.search');
const warning = document.querySelector('.warning');

let serchFilm = '';
let page = 1;

fetchPopular(page).then(data => {
  addToLocalStorage(fetchPopular, fetchGenres, page);
  const popular = data.results;
  const markup = renderMovieCard(popular);
  list.innerHTML = markup;
  // console.log(data);
  counter(data.total_pages, page);
});

// Cлушатели
document.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  serchFilm = e.target.search.value;
  addToLocalStorage(searchMovie, fetchGenres, serchFilm);
  searchMovie(serchFilm).then(data => {
    const length = data.results.length;
    if (length === 0) {
      warning.classList.remove('hidden');
      form.reset();
    } else {
      warning.classList.add('hidden');
      const movies = data.results;
      const markup = renderMovieCard(movies);
      list.innerHTML = markup;
      counter(data.total_pages);
    }
  });
}
function renderWeb(page = 1) {
  //добавляет в локальное хранилище
  console.log(`serch: ${serchFilm}`);
  if (!serchFilm) {
    fetchPopular(page).then(data => {
      addToLocalStorage(fetchPopular, fetchGenres, page);
      const popular = data.results;
      const markup = renderMovieCard(popular);
      list.innerHTML = markup;
    });
  } else {
    searchMovie(page, serchFilm).then(data => {
      addToLocalStorage(searchMovie, fetchGenres, serchFilm);
      const movies = data.results;
      const markup = renderMovieCard(movies);
      list.innerHTML = markup;
    });
  }
  // Cлушатели
  document.addEventListener('submit', onFormSubmit);
  function onFormSubmit(e) {
    e.preventDefault();
    serchFilm = e.target.search.value;
    addToLocalStorage(searchMovie, fetchGenres, serchFilm);
    searchMovie(serchFilm).then(data => {
      const length = data.results.length;
      if (length === 0) {
        warning.classList.remove('hidden');
        form.reset();
      } else {
        warning.classList.add('hidden');
        const movies = data.results;
        const markup = renderMovieCard(movies);
        list.innerHTML = markup;
      }
    });
  }
}
renderWeb();

renderModal('currentPage');
console.log(serchFilm);

export { renderWeb };
