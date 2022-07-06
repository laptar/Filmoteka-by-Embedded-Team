const API_KEY = "74df5c4b3da0f8bb23d044877e91bb86";
const BASE_URL = "https://api.themoviedb.org/3/search/movie?";
const LANG = "en-US";
const PAGE = 1;


async function searchMovie(query) {
    return await fetch(`${BASE_URL}query=${query}&api_key=${API_KEY}&language=${LANG}&page=${PAGE}`).then(response => {
        return response.json().catch(error => { console.log(error) })
    })
}

export { searchMovie }