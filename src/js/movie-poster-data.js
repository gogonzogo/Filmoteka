
export let movieModalPosterDimension;
export let movieGalleryPosterDimension;
export let MOVIE__POSTERS__URL;

export function updateMoviePosterUrl() {
  if (window.innerWidth < 1024) {
    MOVIE__POSTERS__URL = `https://image.tmdb.org/t/p/w300`;
  } else {
    MOVIE__POSTERS__URL = `https://image.tmdb.org/t/p/w342`;
  }
};

export function updateMovieModalPosterDimension() {
  if (window.innerWidth < 1024) {
    movieModalPosterDimension = `width="300" height="400"`;
  } else {
    movieModalPosterDimension = `width="396" height="477"`;
  };
};

export function updateMovieGalleryPosterDimension() {
  if (window.innerWidth < 768) {
    movieGalleryPosterDimension = `width="280" height="398"`;
  } else if (window.innerWidth < 1024) {
    movieGalleryPosterDimension = `width="294" height="398"`;
  } else {
    movieGalleryPosterDimension = `width="274" height="398"`;
  };
};