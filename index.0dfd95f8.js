!function(){var e=document.querySelector(".mylibrary-gallery"),t=document.querySelector("#mylibWat"),a=document.querySelector("#mylibqueue"),c=document.querySelector(".library-link");t.addEventListener("click",(function(){if("watch"===l)return;l="watch",localStorage.setItem("libtype","watch"),"watch"===l&&(t.matches(".active-btn")||(t.classList.toggle("active-btn"),a.classList.toggle("active-btn")));s()})),a.addEventListener("click",(function(){if("queue"===l)return;l="queue",localStorage.setItem("libtype","queue"),"queue"===l&&(a.matches(".active-btn")||(t.classList.toggle("active-btn"),a.classList.toggle("active-btn")));s()}));var l="queue",n="";function i(){null!==localStorage.getItem("libtype")?"watch"===(l=localStorage.getItem("libtype"))?t.matches(".active-btn")||(t.classList.toggle("active-btn"),a.classList.toggle("active-btn")):a.matches(".active-btn")||(t.classList.toggle("active-btn"),a.classList.toggle("active-btn")):l="queue",s()}function s(){var t;if("queue"===l)if(localStorage.setItem("libtype","queue"),null!==localStorage.getItem("queue")){var a=localStorage.getItem("queue");t=JSON.parse(a)}else t=[];else if(localStorage.setItem("libtype","watch"),null!==localStorage.getItem("watch")){var c=localStorage.getItem("watch");t=JSON.parse(c)}else t=[];if(e.innerHTML="",t.length>0)t.map((function(t){n=1===t.genres.length?t.genres[0]:2===t.genres.length?"".concat(t.genres[0],", ").concat(t.genres[1]):"".concat(t.genres[0],", ").concat(t.genres[1],", Other");var a=document.createElement("div");a.setAttribute("data",t.id),a.classList.add("movie-card"),a.innerHTML='<img src="https://image.tmdb.org/t/p/w500/'.concat(t.poster_path,'" class="movie-poster" width="500px"/>\n                <ul class="movie_info">\n                    <li class="movie_title">\n                        ').concat(t.title,'\n                    </li>\n                    <li class="movie_genre">\n                        ').concat(n,'\n                    </li>\n                    <li class="movie_release-date">\n                        ').concat(new Date(t.release_date).getFullYear(),"\n                    </li>\n                </ul>"),e.appendChild(a)}));else{var i="";i="queue"===l?"Queue List":"Watched List";var s=document.createElement("div");s.classList.add("no-storage"),s.innerHTML="<h3>No movies saved in ".concat(i,"</h3>"),e.appendChild(s)}}document.querySelector(".close-button").addEventListener("click",i),c.addEventListener("click",i),s()}();
//# sourceMappingURL=index.0dfd95f8.js.map