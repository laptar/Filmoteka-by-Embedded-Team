function renderModal(event, nameStor) {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    modal: document.querySelector('[data-modal]'),
    info: document.querySelector('.modal'),
  };
  // refs.openModalBtn.addEventListener('click', toggleModalOpen);
  // function toggleModalOpen(event) {
  if (event.target.nodeName === 'IMG') {
    // console.log(JSON.parse(localStorage.getItem('currentPage')));
    const arr = JSON.parse(localStorage.getItem(nameStor));
    const currentMovie = arr.find(
      curentId => String(curentId.id) === event.target.id
    );
    // console.log(currentMovie);
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
    console.log(closeModalBtn);
    closeModalBtn.addEventListener('click', toggleModal);
    // Змінні кнопок модалки
    const watchedBtn = document.querySelector('.modal__button-watched');
    const queueBtn = document.querySelector('.modal__button-queue');
    // Провірка чи є щось в локал сторедж
    let watched = localStorage.getItem('watched')
      ? JSON.parse(localStorage.getItem('watched'))
      : [];
    let queue = localStorage.getItem('queue')
      ? JSON.parse(localStorage.getItem('queue'))
      : [];
    //----
    // Кнопка додавання та видалення з вотч
    const idInW = String(watched.map(el => el.id));
    if (idInW.includes(event.target.id)) {
      watchedBtn.textContent = 'REMUVE WATCH';
      watchedBtn.addEventListener('click', remuveWatch);
      function remuveWatch() {
        watched = watched.filter(el => String(el.id) !== event.target.id);
        localStorage.setItem('watched', JSON.stringify(watched));
        toggleModal();
      }
    } else {
      watchedBtn.addEventListener('click', addToWatchList);
      function addToWatchList() {
        if (!watched.find(item => item.id === currentMovie.id)) {
          watched.push(currentMovie);
          localStorage.setItem('watched', JSON.stringify(watched));
          toggleModal();
        }
      }
    }
    // ----
    // Кнопка додавання та видалення з кювеє
    const idInQ = String(queue.map(el => el.id));
    if (idInQ.includes(event.target.id)) {
      queueBtn.textContent = 'REMUVE QUEUE';
      queueBtn.addEventListener('click', remuveWatch);
      function remuveWatch() {
        queue = queue.filter(el => String(el.id) !== event.target.id);
        localStorage.setItem('queue', JSON.stringify(queue));
        toggleModal();
      }
    } else {
      queueBtn.textContent = 'ADD TO QUEUE';
      queueBtn.addEventListener('click', addToQueueList);
      function addToQueueList() {
        if (!queue.find(item => item.id === currentMovie.id)) {
          queue.push(currentMovie);
          localStorage.setItem('queue', JSON.stringify(queue));
          toggleModal();
        }
      }
    }
    // ----
    document.addEventListener('keydown', ev => {
      refs.modal.classList.add('is-hidden');
      refs.info.innerHTML = '';
    });
    refs.modal.addEventListener('mousedown', evt => {
      if (evt.target.nodeName === 'SECTION') {
        refs.modal.classList.add('is-hidden');
        refs.info.innerHTML = '';
      }
    });
  }
  function toggleModal() {
    refs.modal.classList.add('is-hidden');
    refs.info.innerHTML = '';
  }
}
// }
export { renderModal };
