function addToLocalStorage(fetch, fetchGenres, movie = '') {
  fetch(movie).then(cards => {
    // console.log(card.results);
    fetchGenres().then(data => {
      const cardGanr = cards.results;
      cards.results.forEach((card, ind) => {
        card.genre_ids.forEach((id, indx) => {
          data.genres.forEach(el => {
            if (el.id === id) {
              cardGanr[ind].genre_ids[indx] = el.name;
            }
          });
        });
      });
      console.log(cardGanr);

      localStorage.setItem('currentPage', JSON.stringify(cardGanr));
    });
  });
}

export { addToLocalStorage };
