import { renderMovieCard } from './renderMovieCard';
const libList = document.querySelector('.gallery-library__list');

function renderModal(event, nameStor) {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    modal: document.querySelector('[data-modal]'),
    info: document.querySelector('.modal'),
    body: document.querySelector('body'),
  };
  refs.body.classList.add('body-fixed');

  if (event.target.nodeName === 'IMG') {
    const arr = JSON.parse(localStorage.getItem(nameStor));
    const currentMovie = arr.find(
      curentId => String(curentId.id) === event.target.id
    );

    // Додаємо дві змінні 2 обєкта які беремо із локал сторадж, потім кожен розпрсимо, і кожен файндом перебиремо, якщо фільм доданий то в шаблонку вставляємо тернарнік, і міняємо ADD /remuv
    let watched = localStorage.getItem('watched')
      ? JSON.parse(localStorage.getItem('watched'))
      : [];

    let queue = localStorage.getItem('queue')
      ? JSON.parse(localStorage.getItem('queue'))
      : [];

    const isInWatched = watched.some(
      item => String(item.id) === event.target.id
    );
    const isInQueue = queue.some(item => String(item.id) === event.target.id);

    const modalRender = `
      <button type="button" class="modal__button-close" data-modal-close></button>
    <div >
      <img class="modal__image"
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
              <span class="modale__table-name">/</span>${currentMovie.vote_count
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
      <ul class="buttons">
        <button
          type="button"
          class="modal__button-watched modal__button-text ${isInWatched ? 'accent' : ''
      }"
        >${isInWatched ? 'REMUVE WATCH' : 'add to watched'}
          
        </button>
        <button 
          type="button"
            class="modal__button-queue modal__button-text ${isInQueue ? 'accent' : ''
      }"
        >${isInQueue ? 'REMUVE QUEUE' : 'add to queue'}
          
        </button>
      </ul>
    </div>`;
    refs.info.insertAdjacentHTML('beforeend', modalRender);
    refs.modal.classList.remove('is-hidden');

    const closeModalBtn = document.querySelector('[data-modal-close]');
    // console.log(closeModalBtn);
    closeModalBtn.addEventListener('click', toggleModal);
    // Змінні кнопок модалки
    const watchedBtn = document.querySelector('.modal__button-watched');
    const queueBtn = document.querySelector('.modal__button-queue');
    // Провірка чи є щось в локал сторедж
    //----
    // Кнопка додавання та видалення з вотч
    watchedBtn.addEventListener('click', clickWatch);
    function clickWatch() {
      const idInW = String(watched.map(el => el.id));
      if (idInW.includes(event.target.id)) {
        watched = watched.filter(el => String(el.id) !== event.target.id);
        localStorage.setItem('watched', JSON.stringify(watched));
        cangeNameAddWatch();
      } else {
        if (!watched.find(item => item.id === currentMovie.id)) {
          watched.push(currentMovie);
          localStorage.setItem('watched', JSON.stringify(watched));
          cangeNameRemWatch();
        }
      }
    }
    // -------

    // const idInW = String(watched.map(el => el.id));
    // if (idInW.includes(event.target.id)) {
    //   console.log(event.target.id);
    //   watchedBtn.addEventListener('click', remuveWatch);
    //   function remuveWatch() {
    //     watched = watched.filter(el => String(el.id) !== event.target.id);
    //     localStorage.setItem('watched', JSON.stringify(watched));
    //     // libList.innerHTML = renderMovieCard(watched);
    //     // toggleModal();
    //     cangeNameAddWatch();
    //   }
    // } else {
    //   watchedBtn.addEventListener('click', addToWatchList);
    //   function addToWatchList() {
    //     if (!watched.find(item => item.id === currentMovie.id)) {
    //       watched.push(currentMovie);
    //       localStorage.setItem('watched', JSON.stringify(watched));
    //       // libList.innerHTML = renderMovieCard(watched);
    //       // toggleModal();
    //       cangeNameRemWatch();
    //     }
    //   }
    // }
    // ----
    // Кнопка додавання та видалення з кювеє
    queueBtn.addEventListener('click', clickQueue);
    function clickQueue() {
      const idInQ = String(queue.map(el => el.id));
      if (idInQ.includes(event.target.id)) {
        queue = queue.filter(el => String(el.id) !== event.target.id);
        localStorage.setItem('queue', JSON.stringify(queue));
        cangeNameAddQueue();
      } else {
        if (!queue.find(item => item.id === currentMovie.id)) {
          queue.push(currentMovie);
          localStorage.setItem('queue', JSON.stringify(queue));
          cangeNameRemQueue();
        }
      }
    }

    // ---

    // const idInQ = String(queue.map(el => el.id));
    // console.log(idInQ);
    // if (idInQ.includes(event.target.id)) {
    //   queueBtn.addEventListener('click', remuveQueue);
    //   function remuveQueue() {
    //     queue = queue.filter(el => String(el.id) !== event.target.id);
    //     localStorage.setItem('queue', JSON.stringify(queue));
    //     // libList.innerHTML = renderMovieCard(queue);
    //     // toggleModal();
    //     cangeNameAddQueue();
    //   }
    // } else {
    //   queueBtn.addEventListener('click', addToQueueList);
    //   function addToQueueList() {
    //     if (!queue.find(item => item.id === currentMovie.id)) {
    //       queue.push(currentMovie);
    //       localStorage.setItem('queue', JSON.stringify(queue));
    //       // libList.innerHTML = renderMovieCard(queue);
    //       // toggleModal();
    //       cangeNameRemQueue();
    //     }
    //   }
    // }

    // ----
    document.addEventListener('keydown', ev => {
      renderAfterAdd();

      refs.body.classList.remove('body-fixed');
      refs.modal.classList.add('is-hidden');
      refs.info.innerHTML = '';
    });
    refs.modal.addEventListener('mousedown', evt => {
      renderAfterAdd();

      refs.body.classList.remove('body-fixed');
      if (evt.target.nodeName === 'SECTION') {
        refs.modal.classList.add('is-hidden');
        refs.info.innerHTML = '';
      }
    });

    // ==================

    function cangeNameRemWatch() {
      // console.log('міняю');
      watchedBtn.textContent = 'REMUVE WATCH';
      // watchedBtn.classList.add('disable');
      watchedBtn.classList.add('accent');

      // watchedBtn.disabled = true;
    }
    function cangeNameRemQueue() {
      // console.log('міняюQue');
      queueBtn.textContent = 'REMUVE QUEUE';
      // queueBtn.classList.add('disable');
      queueBtn.classList.add('accent');

      // queueBtn.disabled = true;
    }
    function cangeNameAddQueue() {
      // console.log('міняюADDQue');
      queueBtn.textContent = 'ADD TO QUEUE';
      queueBtn.classList.remove('accent');
      // queueBtn.disabled = true;
    }
    function cangeNameAddWatch() {
      // console.log('міняюADDQue');
      watchedBtn.textContent = 'ADD TO WATCHED';
      watchedBtn.classList.remove('accent');
      // watchedBtn.disabled = true;
    }
  }

  // ==========
  function addArrToLocalStor(key) {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : [];
  }
  function renderAfterAdd() {
    let currentList = sessionStorage.getItem('currentList')
      ? JSON.parse(sessionStorage.getItem('currentList'))
      : 'watched';
    if (!libList) {
      return;
    }
    if (currentList === 'watched') {
      watched = addArrToLocalStor('watched');
      libList.innerHTML = renderMovieCard(watched);
    } else {
      queue = addArrToLocalStor('queue');
      libList.innerHTML = renderMovieCard(queue);
    }
  }
  function toggleModal() {
    renderAfterAdd();
    refs.body.classList.remove('body-fixed');
    refs.modal.classList.add('is-hidden');
    refs.info.innerHTML = '';
  }
}

export { renderModal };
