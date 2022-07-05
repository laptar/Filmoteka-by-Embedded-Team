import './JS/Crew/crew-list';
import fetchPopular from './JS/fetchPopular';
import searchMovie from './JS/searchMovie';
import fetchGenres from './JS/fetchGenres';
import './sass/main.scss';

import { renderModal } from './JS/modal_close';
const list = document.querySelector('.gallery__list');
const form = document.querySelector('.search');
const warning = document.querySelector('.warning');

// Cлушатели
document.addEventListener('submit', onFormSubmit);

// Функция поиска по названию фильма
function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { search },
  } = e.target;
  const query = search.value;

  searchMovie(query).then(data => {
    const length = data.results.length;
    if (length === 0) {
      warning.classList.remove('hidden');
      form.reset();
    } else {
      warning.classList.add('hidden');
      const movies = data.results;
      const markup = movies.map(movie => {
        const releaseDate = movie.release_date.split('-')[0];
        return `<li class="gallery__item">
                                <img class="gallery__image" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                                <h3 class="gallery__film-title">${movie.title}</h3>
                                <p class="gallery__film-genres"><span class="gallery__film-year">${releaseDate}</span></p>
                        </li>`;
      });
      list.innerHTML = markup.join('');
    }
  });
}

// Функция загружает популярные фильмы на главную страницу
let popular;

fetchPopular().then(data => {
  popular = data.results;
  // console.log(popular);
  const markup = popular.map(movie => {
    const releaseDate = movie.release_date.split('-')[0];
    return `<li class="gallery__item">
                            <img class="gallery__image" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" id="${movie.id}">
                            <h3 class="gallery__film-title">${movie.title}</h3>
                            <p class="gallery__film-genres"><span class="gallery__film-year">${releaseDate}</span></p>
                    </li>`;
  });
  list.innerHTML = markup.join('');
  renderModal(popular);
});

// renderModal(popular);
