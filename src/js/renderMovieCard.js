function renderMovieCard(array) {
    const markup = array.map(movie => {
        const releaseDate = movie.release_date.split('-')[0];
        return `<li class="gallery__item">
                                <img class="gallery__image" src="${movie.poster_path
                ? 'https://image.tmdb.org/t/p/w500/' +
                movie.poster_path
                : 'https://c.tenor.com/MaKLmuQyh0UAAAAC/vincent-vega-pulp-fiction.gif'
            }" alt="${movie.title}" id="${movie.id}">
                                <h3 class="gallery__film-title">${movie.title
            }</h3>
                                <p class="gallery__film-genres"><span class="gallery__film-year">${releaseDate}</span></p>
                        </li>`;
    });
    return markup.join('');
}

export { renderMovieCard };
