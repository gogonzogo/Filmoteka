import { fetchTrendingMovies, getMovieInfo } from './API-requests.js';
import { showMovieModal } from './movie-modal.js';
import genreList from './genre-list.js';



// DOM elements
const movieList = document.querySelector(".card-gallery");



// fuction that returns trending movies 
const showTrendingMovies = async () => {
  const list = await fetchTrendingMovies(1);
  // console.log(list.data.results)
  const movie = list.data.results;
  renderInfo(movie)
}


showTrendingMovies();

//Function to get genre names
function getGenres(genreList, genreIds) {
  const arrOfGenresName = genreIds.map(currentId => {
    const genre = genreList.find(elem => elem.id === currentId);

    return genre.name;
  });

  const str = arrOfGenresName.reduce((acc, genre, index, arr) => {
    if (arr.length > 2) {
      acc = `${arr[0]}, ${arr[1]}`;
    } else {
      acc = arr.join(', ');
    }

    return acc;
  });
  return str;
}



// function that renders movie info to the dom
async function renderInfo(movies) {
  // const genre = await getMovieInfo();
  return movies.map((movie) => {
    const card = document.createElement("div.movie-card")
    card.classList.add('movie-card');
    card.innerHTML =
      `<img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" class="movie-poster"/>
                <ul class="movie_info">
                    <li class="movie_title">
                        ${movie.title}
                    </li>
                    <li class="movie_genre">
                        ${getGenres(genreList, movie.genre_ids)};
                    </li>
                    <li class="movie_release-date">
                        ${new Date(movie.release_date).getFullYear()}
                    </li>
                </ul>`;
    movieList.appendChild(card);
    card.addEventListener('click', () => showMovieModal(movie));
  });
}


// const showMovieCard = (movies) => {
//     const 
// }