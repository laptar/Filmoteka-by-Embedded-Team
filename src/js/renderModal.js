function renderModal2(event, nameStor) {
  let watched = localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched'))
    : [];

  let queue = localStorage.getItem('queue')
    ? JSON.parse(localStorage.getItem('queue'))
    : [];
  const isInWatched = watched.some(item => String(item.id) === event.target.id);
  const isInQueue = queue.some(item => String(item.id) === event.target.id);
  console.log(isInWatched);
  console.log(isInQueue);
  const modalRender = `
          <button type="button" class="modal__button-close" data-modal-close></button>
        <div class="modal__image">
          <img
            src = "https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}"
            alt="${currentMovie.title}"
               />
        </div>
        <div class="modal-info">
          <h1 class="modal__title">${currentMovie.title}</h1>
          <table class="modale_table">
            <tbody class="modale_table">
              <tr class="modale_table-row">
                <td class="modale__table-name">Vote/Votes</td>
                <td class="modale__table-about">
                  <span class="vote">${currentMovie.vote_average}</span>
                  <span class="modale__table-name">/</span>${
                    currentMovie.vote_count
                  }
                </td>
              </tr>
              <tr class="modale__table-row">
                <td class="modale__table-name">Popularity</td>
                <td class="modale__table-about">${currentMovie.popularity}
                </td>
              </tr>
              <tr class="modale__table-row">
                <td class="modale__table-name">Original Title</td>
                <td class="modale__table-about">${currentMovie.title}</td>
              </tr>
              <tr class="modale__table-row">
                <td class="modale__table-name">Genre</td>
                <td class="modale__table-about">${currentMovie.genre_ids.join(
                  ', '
                )}</td>
              </tr>
            </tbody>
          </table>
          <h2 class="modal__about-title">About</h2>
          <p class="modal__about-text">${currentMovie.overview}</p>
          <div class="buttons">
            <button
              type="button"
              class="modal__button-watched modal__button-text"
            >${isInWatched ? 'REMUVE WATCH' : 'add to watched'}
              
            </button>
            <button type="button" class="modal__button-queue modal__button-text">
            ${isInQueue ? 'REMUVE QUEUE' : 'add to queue'}
              
            </button>
          </div>
        </div>`;
}
