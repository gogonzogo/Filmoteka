!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var a,i=o("bpxeT"),l=o("2TvXO"),s=o("5kFwL"),c=document.querySelector(".card-gallery"),d=(a=e(i)(e(l).mark((function n(){var t,r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.fetchTrendingMovies)(1);case 2:t=e.sent,console.log(t.data.results),(r=t.data.results).map((function(e){console.log(e)})),r.map((function(e){var n=document.createElement("div.movie-card");n.classList.add("movie-card"),n.innerHTML='<img src="https://image.tmdb.org/t/p/original/'.concat(e.poster_path,'" class="movie-poster"/>\n                <ul class="movie_info">\n                    <li class="movie_title">\n                        ').concat(e.title,'\n                    </li>\n                    <li class="movie_genre">\n                        ').concat(Object.values(e.genre_ids),';\n                    </li>\n                    <li class="movie_release-date">\n                        ').concat(new Date(e.release_date).getFullYear(),"\n                    </li>\n                </ul>"),c.appendChild(n)}));case 7:case"end":return e.stop()}}),n)}))),function(){return a.apply(this,arguments)});d()}();
//# sourceMappingURL=index.924b5a80.js.map
