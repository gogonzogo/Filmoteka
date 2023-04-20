import { getMovieInfo } from './API-requests.js';
const movieGallery = document.querySelector('.card-gallery');

movieGallery.addEventListener('click', e => {
  //get movie id
  const parent = e.target.closest('div');
  const movieId = parent.getAttribute('data');
  renderModal(movieId);
});

async function renderModal(movieID) {
  const modal = document.querySelector('.movie-modal__overlay');

  //show modal
  modal.classList.toggle('is-hidden');

  //close modal
  const closeBtn = document.querySelector('.close-button');
  closeBtn.addEventListener('click', () => modal.classList.add('is-hidden'));

  const movieName = document.querySelector('.movie-name');
  const movieInfo = document.querySelector('.movie-info-block');
  const moviePoster = document.querySelector('.modal-movie-poster');
  const movieAbout = document.querySelector('.movie-about-description');

  const movie = await getMovieInfo(movieID);

  // round average vote like 7.5975
  function roundVotes(vote) {
    if (vote.toString().length > 3) {
      return vote.toFixed(2);
    } else return vote;
  }

  //movie info
  movieName.textContent = movie.title;
  moviePoster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  //movie details
  movieInfo.innerHTML = `
  <p class='movie-info'>Vote / Votes</p> <p><span class='modal-movie-rate'>${roundVotes(
    movie.vote_average
  )}</span> /  ${movie.vote_count}</p>
  <p  class='movie-info'>Popularity</p> <p>${movie.popularity}</p>
  <p  class='movie-info'>Original Title</p> <p>${movie.original_title.toUpperCase()}</p>
  <p  class='movie-info'>Genre</p> <p>${movie.genres.map(
    gen => ' ' + gen.name
  )}</p>
  `;

  movieAbout.textContent = movie.overview;
}
