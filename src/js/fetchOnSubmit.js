const API_KEY = '74df5c4b3da0f8bb23d044877e91bb86';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
const form = document.querySelector('.search');
const LANG = 'en-US';
const PAGE = 1;
const searchInput = document.querySelector('.search-input');
document.addEventListener('submit', onInputSubmit);
function onInputSubmit(e) {
  e.preventDefault();
  searchMovie(searchInput.value);
}
function searchMovie(query) {
  fetch(
    `${BASE_URL}query=${query}&api_key=${API_KEY}&language=${LANG}&page=${PAGE}`
  ).then(response => {
    return response.json().then(data => {
      console.log(data);
    });
  });
}
