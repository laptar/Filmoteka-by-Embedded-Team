

function addToLocalStorage(fetch, fetchGenres, movie = "") {
    fetch(movie).then(data => {
        localStorage.setItem('popular', JSON.stringify(data.results));
    });

    fetchGenres().then(data => {
        localStorage.setItem('genres', JSON.stringify(data.genres));
    });
}

export { addToLocalStorage }