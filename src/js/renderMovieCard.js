function findInLocStor(id, localStor) {
  const watchStor = localStorage.getItem(localStor)
    ? JSON.parse(localStorage.getItem(localStor))
    : false;
  if (!watchStor) {
    return watchStor;
  } else {
    return watchStor.find(elm => elm.id === id);
  }
}

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
        <div class="ico-watched ${
          findInLocStor(movie.id, 'watched') ? '' : 'visually-hidden'
        }">
          <img src="./images/watch.png" alt="" />
          <p class="ico__text-watched">ON WATCHED</p>
        </div>
        <div class="ico-queue ${
          findInLocStor(movie.id, 'queue') ? '' : 'visually-hidden'
        }">
          <img src="./images/queue.svg" alt="" />
          <p class="ico__text-queue">ON QUEUE</p>
        </div>
                                <div class="gallery__wrapper">
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
                                



                                <span class="gallery__film-year">| ${releaseDate}</span></p></div>
                        </li>`;
  });

  return markup.join('');
}

export { renderMovieCard };
