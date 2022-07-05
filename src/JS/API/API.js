const API_KEY = '74df5c4b3da0f8bb23d044877e91bb86';
const API_URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';
// const API_URL_TRENDING = 'https://api.themoviedb.org/3/trending/movie/week';
// const API_URL_GENRES = 'https://api.themoviedb.org/3/genre/movie/list';

export default class filmsApi {
  constructor() {
    this.searchRequest = '';
    this.page = 1;
  }

  fetchFindMovies() {
    const url = `${API_URL_SEARCH}?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchRequest}`;
    return fetch(url)
      .then(res => res.json())
      .then(({ results }) => {
        return results;
      });
  }

  fetchFindPages() {
    const url = `${API_URL_SEARCH}?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchRequest}`;
    return fetch(url).then(res => res.json());
  }

  get search() {
    return this.searchRequest;
  }
  set search(newRequest) {
    this.searchRequest = newRequest;
  }
  get pageNumber() {
    return this.page;
  }
  set pageNumber(newPage) {
    this.page = newPage;
  }
}
