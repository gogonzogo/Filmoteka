import axios from 'axios';
import { API_KEY, BASE_URL, TRENDING_PATH, MOVIE_SEARCHES, MOVIE_INFO } from './API-params.js';


// HTTP Request for trending films - per day
export async function fetchTrendingMovies(page) {
  try {
    const response = await axios.get(`${BASE_URL}${TRENDING_PATH}?api_key=${API_KEY}&page=${page}`);
    // console.log(response.data.results)
    return response;

  } catch (error) {
    console.log("Trending Movies API error", error.message);
  }
}


// HTTP Request for movies by keyword search
export async function getSearchMovies() {
  try {
    const response = await axios.get(`${BASE_URL}${MOVIE_SEARCHES}?api_key=${API_KEY}`);
    // console.log(response.data.results);
    return response
  } catch (error) {
    console.log("Search Movies API error", error.message);
  }
}

// HTTP Request for movie information by movie Id 
export async function getMovieInfo(movie_id) {
  try {
    const response = await axios.get(
      `${BASE_URL}${MOVIE_INFO}${movie_id}?api_key=${API_KEY}&language=en-US`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log('Movie Info API error', error.message);
  }
}

// UPDATED FUNCTION TO RETURN ONLY GENRES EFFECTING MOVIE MODAL/ COLLABORATION NEEDED
/* export async function getMovieInfo(movie_id) {
    try {
        const response = await axios.get(`${BASE_URL}${MOVIE_INFO}${movie_id}?api_key=${API_KEY}&language=en-US`);
        // console.log(response);
        const genres = response.data.genres;
        const allGenres = genres.map((genre) => genre.name);
        // console.log(allGenres);
        return allGenres;
    } catch (error) {
        console.log("Movie Info API error", error.message);
    }
} */

// fetchTrendingMovies();
// getMovieInfo(700391);


