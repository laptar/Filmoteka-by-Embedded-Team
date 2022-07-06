

async function fetchGenres() {
    return await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=74df5c4b3da0f8bb23d044877e91bb86&language=en-US`).then(response => {
        return response.json();
    });
}

// Функция добавляет жанры в локальное хранилище
// fetchGenres().then(data => {
//     localStorage.setItem('genres', JSON.stringify(data));
//   });

//Переменная хранит в себе жанры из локального хранилища
// const genresArray = JSON.parse(localStorage.getItem('genres'));


export { fetchGenres } 