import fetchPopular from './JS/fetchPopular';
import './sass/main.scss';
const list = document.querySelector('.gallery__list');

renderPopular();

function renderPopular() {
  fetchPopular().then(data => {
    const popular = data.results;
    const markup = popular.map(movie => {
      const releaseDate = movie.release_date.split('-')[0];
      return `<li class="gallery__item">
                           <a><img class="gallery__image" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                            <h3 class="gallery__film-title">${movie.title}</h3>
                            <p class="gallery__film-genres"><span class="gallery__film-year">${releaseDate}</span></p>
                           </a> 
                    </li>`;
    });
    list.innerHTML = markup.join('');
  });
}
