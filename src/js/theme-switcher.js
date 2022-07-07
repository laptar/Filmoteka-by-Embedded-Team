const page = document.querySelector('.page');
const switcher = document.querySelector('#theme-switch-toggle');
const changedTheme = document.querySelector('.footer');

switcher.addEventListener('change', event => {
  if (page.classList.contains('dark-theme')) {
    page.classList.remove('dark-theme');
    page.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
    changedTheme.classList.remove('dark-theme');
  } else {
    page.classList.remove('light-theme');
    page.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
    changedTheme.classList.add('dark-theme');
  }
});

const savedTheme = localStorage.getItem('theme');
// console.log(savedTheme);

updatedTheme();
checkboxChecked();
updatedFooter();

function updatedTheme() {
  if (savedTheme) {
    page.classList = savedTheme;
  }
}

function checkboxChecked() {
  // console.log(1);
  if (savedTheme === 'dark-theme') {
    switcher.setAttribute('checked', true);
  }
}

function updatedFooter() {
  if (savedTheme === 'dark-theme') {
    changedTheme.classList.add('dark-theme');
  }
}
