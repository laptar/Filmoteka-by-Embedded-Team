function renderMovieCard(array) {
  if (array.length === 0) {
    return '<img class="gallery" src="https://c.tenor.com/KOZLvzU0o4kAAAAC/no-results.gif" width="500px" alt=""/>';
  }
  const markup = array.map(movie => {
    const releaseDate = movie.release_date.split('-')[0];
    return `<li class="gallery__item">
                                <img class="gallery__image" src="${
                                  movie.poster_path
                                    ? 'https://image.tmdb.org/t/p/w500/' +
                                      movie.poster_path
                                    : 'https://c.tenor.com/MaKLmuQyh0UAAAAC/vincent-vega-pulp-fiction.gif'
                                }" alt="${movie.title}" id="${movie.id}">
                                <h3 class="gallery__film-title">${
                                  movie.title
                                }</h3>
                                <p class="gallery__film-genres">${
                                  movie.genre_ids.length >= 3
                                    ? movie.genre_ids.slice(0, 2).join(', ') +
                                      ', Others...'
                                    : movie.genre_ids.join(', ')
                                    ? movie.genre_ids.join(', ')
                                    : 'NO DATA'
                                }



                                <span class="gallery__film-year">| ${releaseDate}</span></p>
                        </li>`;
  });

  return markup.join('');
}

export { renderMovieCard };
