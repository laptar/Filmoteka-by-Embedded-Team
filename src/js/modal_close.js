function renderModal() {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),

    modal: document.querySelector('[data-modal]'),
    info: document.querySelector('.modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModalOpen);

  function toggleModalOpen(event) {
    // console.log(event.target);

    if (event.target.nodeName === 'IMG') {
      console.log(JSON.parse(localStorage.getItem('currentPage')));
      const arr = JSON.parse(localStorage.getItem('currentPage'));
      const currentMovie = arr.find(
        curentId => String(curentId.id) === event.target.id
      );
      // Додаємо дві змінні 2 обєкта які беремо із локал сторадж, потім кожен розпрсимо, і кожен файндом перебиремо, якщо фільм доданий то в шаблонку вставляємо тернарнік, і міняємо ADD /remuv
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
        >
          add to Watched
        </button>
        <button type="button" class="modal__button-queue modal__button-text">
          add to queue
        </button>
      </div>
    </div>`;

      refs.info.insertAdjacentHTML('beforeend', modalRender);
      refs.modal.classList.remove('is-hidden');
      const closeModalBtn = document.querySelector('[data-modal-close]');
      closeModalBtn.addEventListener('click', toggleModal);
      document.addEventListener('keydown', ev => {
        refs.modal.classList.add('is-hidden');
        refs.info.innerHTML = '';
      });
      refs.modal.addEventListener('mousedown', evt => {
        console.dir(evt.target.nodeName);
        if (evt.target.nodeName === 'SECTION') {
          refs.modal.classList.add('is-hidden');
          refs.info.innerHTML = '';
        }
      });
    }
  }
  function toggleModal() {
    refs.modal.classList.add('is-hidden');
    refs.info.innerHTML = '';
  }
}

export { renderModal };
