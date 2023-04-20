import { fetchTrendingMovies, getMovieInfo } from './API-requests.js';
import genreList from './genre-list.js';

// DOM elements
const movieList = document.querySelector('.card-gallery');

// fuction that returns trending movies
export const showTrendingMovies = async () => {
  const list = await fetchTrendingMovies(1);
  // console.log(list.data.results)
  const movie = list.data.results;
  renderInfo(movie);
};

showTrendingMovies();

//Function to get genre names
function getGenres(genreList, genreIds) {
  const arrOfGenresName = genreIds.map(currentId => {
    const genre = genreList.find(elem => elem.id === currentId);
    return genre.name;
  });

  // console.log(arrOfGenresName)
  const str = arrOfGenresName.reduce((acc, genre, index, arr) => {
    if (arr.length > 2) {
      acc = `${arr[0]}, ${arr[1]}, Other`;
    } else {
      acc = arr.join(', ') + ';';
    }

    return acc;
  }, '');
  return str;
}

// function that renders movie info to the dom
export async function renderInfo(movies) {
  // const genre = await getMovieInfo();
  movieList.innerHTML = '';

  movies.map(movie => {
    const card = document.createElement('div');
    card.setAttribute('data', movie.id);
    card.classList.add('movie-card');
    card.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${
      movie.poster_path
    }" class="movie-poster" width="500px"/>
                <ul class="movie_info">
                    <li class="movie_title">
                        ${movie.title}
                    </li>
                    <li class="movie_genre">
                        ${getGenres(genreList, movie.genre_ids)}
                    </li>
                    <li class="movie_release-date">
                        ${new Date(movie.release_date).getFullYear()}
                    </li>
                </ul>`;
    movieList.appendChild(card);
  });
}

// const showMovieCard = (movies) => {
//     const
// }
