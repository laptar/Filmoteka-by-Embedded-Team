import throttle from 'lodash.throttle';
const scrollUp = document.querySelector('[scroll-up-button]');

window.addEventListener('scroll', throttle(hideOnScroll(scrollUp), 250));
scrollUp.addEventListener('click', toTopOnClick);

function hideOnScroll(element) {
  return function onScroll(event) {
    if (scrollY < document.documentElement.clientHeight) {
      element.classList.add('visually-hidden');
    } else {
      element.classList.remove('visually-hidden');
    }
  };
}

function toTopOnClick(event) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
