var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){l[e]=n},e.parcelRequired7c6=t);var o=t("5q1tW");const i=document.querySelector(".card-gallery");(async()=>{const e=await(0,o.fetchTrendingMovies)(1);console.log(e.data.results);const n=e.data.results;n.map((e=>{console.log(e)})),n.map((e=>{const n=document.createElement("div.movie-card");n.classList.add("movie-card"),n.innerHTML=`<img src="https://image.tmdb.org/t/p/original/${e.poster_path}" class="movie-poster"/>\n                <ul class="movie_info">\n                    <li class="movie_title">\n                        ${e.title}\n                    </li>\n                    <li class="movie_genre">\n                        ${Object.values(e.genre_ids)};\n                    </li>\n                    <li class="movie_release-date">\n                        ${new Date(e.release_date).getFullYear()}\n                    </li>\n                </ul>`,i.appendChild(n)}))})();
//# sourceMappingURL=index.8f38547a.js.map
