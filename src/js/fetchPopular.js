const API_KEY = '74df5c4b3da0f8bb23d044877e91bb86';
const API_URL_TRENDING = 'https://api.themoviedb.org/3/trending/';
const MEDIA_TYPE = 'movie';
const TIME_WINDOW = 'day';
// let page = 1;

function fetchPopular(page = 1) {
  return fetch(
    `${API_URL_TRENDING}${MEDIA_TYPE}/${TIME_WINDOW}?api_key=${API_KEY}&page=${page}`
  ).then(response => {
    return response.json();
  });
}

// Функция добавляет популярные фильмы  в локальное хранилище

// function addPopularToLocalStorage(){
//   fetchPopular().then(data => {
//     localStorage.setItem('popular', JSON.stringify(data));
//   });
// }

export { fetchPopular };
