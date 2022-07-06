function addToLocalStorage(fetch, fetchGenres, movie = '') {
  fetch(movie).then(cards => {
    // console.log(card.results);
    fetchGenres().then(data => {
      console.log(data.genres);
      console.log(cards.results);
      const cardGanr = cards.results;
      cards.results.forEach(card => {
        // console.log(card.genre_ids);
        card.genre_ids.forEach(id => {
          console.log(id);
        });
      });
      console.log(cardGanr);

      //   localStorage.setItem('genres', JSON.stringify(data.genres));
    });
    // localStorage.setItem('popular', JSON.stringify(data.results));
  });

  fetchGenres().then(data => {
    localStorage.setItem('genres', JSON.stringify(data.genres));
  });
}

export { addToLocalStorage };
