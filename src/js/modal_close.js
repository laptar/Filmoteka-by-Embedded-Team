function renderModal(arr) {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModalOpen);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModalOpen(event) {
    if (event.target.nodeName === 'IMG') {
      console.log(event.target.id);
      console.log(arr);

      refs.modal.classList.remove('is-hidden');
    }
  }
  function toggleModal() {
    refs.modal.classList.add('is-hidden');
  }
}

export { renderModal };
