import debounce from 'lodash.debounce';
import { getSearchMovies } from './API-requests.js';
import { renderInfo } from './movie-gallery';

const searchInput = document.querySelector('.header__input');
const failedSearchText = document.querySelector('.header__no-match');

//prevent reload after pressing 'return' button
document
  .querySelector('.header__form')
  .addEventListener('submit', e => e.preventDefault());

//search fn
searchInput.addEventListener(
  'input',
  debounce(async e => {
    const searchResults = await getSearchMovies(e.target.value, 1); // default page 1

    if (searchResults.results.length !== 0) {
      failedSearchText.style.display = 'none';
      renderInfo(searchResults.results);
    } else if (!e.target.value) {
      failedSearchText.style.display = 'none';
    } else failedSearchText.style.display = 'block';
  }, 500)
);
