import crewMembers from './crew-members';
import teamCard from '../../Templates/teamCard.hbs';

const body = document.querySelector('body');
const teamContainer = document.querySelector('.team-members');
const openModalTeam = document.querySelector('.js-open-modal');
const closeModalTeam = document.querySelector('.team-close');
const backdropModalTeam = document.querySelector('.team-backdrop');
const modalTeam = document.querySelector('[data-team]');

openModalTeam.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();
  body.classList.add('body-fixed');
  modalTeam.classList.remove('is-hidden');

  renderTeamList(crewMembers);
  window.addEventListener('keydown', onEscPress);
  closeModalTeam.addEventListener('click', onClose);
  backdropModalTeam.addEventListener('click', onBackdrop);
}

function renderTeamList() {
  const markup = teamCard(crewMembers);
  teamContainer.innerHTML = markup;
}

function onClose() {
  modalTeam.classList.add('is-hidden');
  body.classList.remove('body-fixed');
  window.removeEventListener('keydown', onEscPress);
  closeModalTeam.removeEventListener('click', onClose);
  backdropModalTeam.removeEventListener('click', onBackdrop);
  teamContainer.innerHTML = '';
}

function onBackdrop(event) {
  if (event.currentTarget === event.target) {
    onClose();
  }
}

function onEscPress(event) {
  if (event.code === 'Escape') {
    onClose();
  }
}
