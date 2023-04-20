import { API_KEY, BASE_URL, TRENDING_PATH, MOVIE_SEARCHES, MOVIE_INFO } from './API-params';
import { fetchTrendingMovies } from './API-requests';
import { renderInfo} from './movie-gallery';

// dom elements
const paginationDiv = document.querySelector('.pagination-div')
const prev = document.querySelector('.previousPageButton');
const next = document.querySelector('.nextPageButton');
const currentPageButton = document.querySelector('.current');
const movieList = document.querySelector('.card-gallery');



// variables
let currentPage = 1; 
let nextPage = 2; 
let prevPage = currentPage - 1;
let totalPages = 100;


async function pagination(currentPage) {
    movieList.innerHTML = "";
    const trendingMoviesAPI = await fetchTrendingMovies(currentPage);
    const arrayLength = trendingMoviesAPI.data.results.length;
    const movieResults = trendingMoviesAPI.data.results;
    if (arrayLength !== 0) {
        renderInfo(movieResults);
        // console.log(currentPage)
        nextPage = currentPage + 1; 
        prevPage = currentPage - 1; 
        console.log(trendingMoviesAPI.data.results)
        // console.log(trendingMoviesAPI.data)
        totalPages = trendingMoviesAPI.data.total_pages;
        for(let i = 1; i < totalPages - 979; i++) {
            console.log(i)
            currentPageButton.innerHTML = currentPage;
        }
         
    } else {
        body.innerHTML = `<h1>No Results Found</h1>`;
    }
    
}




// next page event listener
next.addEventListener('click', (e) => {
    e.preventDefault();
    if(nextPage <= totalPages) {
        pagination(nextPage);
    }
    
});

// previous page event listener
prev.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("clicked")
    if(prevPage <= totalPages) {
        console.log(pagination(prevPage));

    }
})

// loops through total pages and displays pages 1 - 20 on the dom
for (let i = 1; i < totalPages - 979; i++) {
    // console.log(i)
    const nestedButtons = document.createElement('button')
    nestedButtons.classList.add('page-numbers')
    nestedButtons.innerHTML = `${i}`
    paginationDiv.append(nestedButtons, next)
    
}


