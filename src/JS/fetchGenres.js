

export default function  fetchGenres() {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=74df5c4b3da0f8bb23d044877e91bb86&language=en-US`).then(response => {
        return response.json();
    });
}
