// import FilmsApi from './API/API';

// const references = {
//   searchForm: document.querySelector('#search'),
//   cardContainer: document.querySelector('.card-js'),
//   warning: document.querySelector('.warning'),
//   searchResult: document.querySelector('search-results'),
// };

// const Api = new FilmsApi();
// const listElement = document.querySelector('card-js');

// references.searchForm.addEventListener('submit', keyWordSearch);

// function keyWordSearch(event) {
//   event.preventDefault();
//   Api.pageNumber = 1;
//   Api.search = event.currentTarget.elements.search.value;
//   if (Api.search === '') {
//     references.searchResult.textContent = '';
//     references.warning.textContent =
//       'Search result not successful. Enter the correct movie name and try again';
//     return;
//   }
// }
