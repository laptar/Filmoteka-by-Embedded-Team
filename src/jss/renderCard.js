function renderCard(arr) {
  const markup = arr.map(movie => {
    const releaseDate = movie.release_date.split('-')[0];
    return `<li class="gallery__item">
                            <img class="gallery__image" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" id="${movie.id}">
                            <h3 class="gallery__film-title">${movie.title}</h3>
                            <p class="gallery__film-genres"><span class="gallery__film-year">${releaseDate}</span></p>
                    </li>`;
  });
  return markup.join('');
}

export { renderCard };
