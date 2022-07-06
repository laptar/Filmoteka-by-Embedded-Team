const scrollUp = document.querySelector('[scroll-up-button]');

window.addEventListener('scroll', throttle(onScroll(scrollUp), 250));
scrollUp.addEventListener('click', toTopOnClick);

function onScroll(element) {
  return function onScroll(event) {
    if (page < document.documentElement.clientHeight) {
      element.classList.add('visuallyhidden');
    } else {
      element.classList.remove('visuallyhidden');
    }
  };
}

function toTopOnClick(event) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
