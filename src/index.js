// module imports
import './js/API-params';
import './js/API-requests';
import './js/pagination';
import './js/movie-gallery';


export const refs = {
  userMovieSearch: document.querySelector('.header__form'),
  userMovieSearchContainer: document.querySelector('.header__form-container'),
  homeLink: document.querySelector('.home-link'),
  libraryLink: document.querySelector('.library-link'),
  headerBtnContainer: document.querySelector('.header__buttons-container'),
  queueBtn: document.querySelector('.library__button-queue'),
  watchedBtn: document.querySelector('.library__button-watched'),
  logoLink: document.querySelector('.logo-link'),
  goitLink: document.querySelector('.footer-link'),
}

function onHomeLinkClick(e) {
  if (e.target !== refs.homeLink) {
    return;
  }
    // refs.moviePosterGallery.innerHTML = '';  //CLEAR GALLERY
  refs.userMovieSearch.value = '';
  refs.homeLink.classList.add('active');
  refs.libraryLink.classList.remove('active');
  document.body.classList.remove('my-library');
  refs.headerBtnContainer.style.display = 'none';
  refs.userMovieSearchContainer.style.display = 'flex';
  // fetchMovies(); //FETCH AND RENDER TRENDING MOVIES
}

function onLibraryLinkClick(e) {
  if (e.target !== refs.libraryLink) {
    return;
  }
  // refs.moviePosterGallery.innerHTML = '';  //CLEAR GALLERY
  refs.userMovieSearch.value = '';
  refs.libraryLink.classList.add('active');
  refs.homeLink.classList.remove('active');
  refs.userMovieSearchContainer.style.display = 'none';
  refs.headerBtnContainer.style.display = 'flex';
  document.body.classList.add('my-library');

};

function onQueueBtnClick(e) {
  if (e.target !== refs.queueBtn) {
    return;
  }
  refs.watchedBtn.classList.remove('active-btn');
  refs.queueBtn.classList.add('active-btn');
  // refs.moviePosterGallery.innerHTML = '';  //CLEAR GALLERY
  refs.userMovieSearch.value = '';
};

function onWatchedBtnClick(e) {
  if (e.target !== refs.watchedBtn) {
    return;
  }
  refs.queueBtn.classList.remove('active-btn');
  refs.watchedBtn.classList.add('active-btn');
   // refs.moviePosterGallery.innerHTML = '';  //CLEAR GALLERY
  refs.userMovieSearch.value = '';
};

refs.libraryLink.addEventListener('click', onLibraryLinkClick);
refs.homeLink.addEventListener('click', onHomeLinkClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);
refs.watchedBtn.addEventListener('click', onWatchedBtnClick);