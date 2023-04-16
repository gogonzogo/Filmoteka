import { fetchTrendingMovies, getMovieInfo} from './API-requests.js';



// DOM elements
const movieList = document.querySelector(".card-gallery");
const LOCALSTORAGE_KEY = {};



// fuction that returns trending movies 
const showTrendingMovies = async () => {
    const list = await fetchTrendingMovies(1);
    console.log(list.data.results)
    const movie = list.data.results;
    movie.map((element) => {
        console.log(element)
        
    })
    renderInfo(movie)
}


// showTrendingMovies();

// function that renders movie info to the dom
function renderInfo(movies) {
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
                        ${Object.values(movie.genre_ids)};
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