var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var a=o[e];delete o[e];var s={id:e,exports:{}};return t[e]=s,a.call(s.exports,s,s.exports),s.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=a);var s=a("5q1tW"),l=a("ioFHx");class i{constructor(e,t,o,a,s){this.id=e,this.title=t,this.genres=o,this.release_date=a,this.poster_path=s}}const n=document.querySelector(".card-gallery"),d=document.querySelector(".mylibrary-gallery");let c,r="",u="",g="",p="",m="",h=-1;n.addEventListener("click",(e=>{const t=e.target.closest("div").getAttribute("data");r=t,E(t).then((()=>f.classList.toggle("is-hidden")))})),d.addEventListener("click",(e=>{console.log("image clicked");const t=e.target.closest("div").getAttribute("data");r=t,E(t).then((()=>f.classList.toggle("is-hidden")))}));const f=document.querySelector(".movie-modal__overlay");let v=[],S=[];const q=document.querySelector("#watchedButton"),w=document.querySelector("#queuedButton");async function E(e){document.querySelector(".close-button").addEventListener("click",(()=>f.classList.add("is-hidden")));const t=document.querySelector(".movie-name"),o=document.querySelector(".movie-info-block"),a=document.querySelector(".modal-movie-poster"),i=document.querySelector(".movie-about-description");a.style.display="block";const n=await(0,s.getMovieInfo)(e);var d;(0,l.updateMovieModalPosterDimension)(),(0,l.updateMoviePosterUrl)(),t.textContent=n.title,a.src="",a.src=`${l.MOVIE__POSTERS__URL}${n.poster_path}`,a.alt=`${n.title}`,a.width=`${l.movieModalPosterWidth}`,a.height=`${l.movieModalPosterHeight}`,o.innerHTML=`\n  <p class='movie-info'>Vote / Votes</p> <p><span class='modal-movie-rate'>${d=n.vote_average,d.toString().length>3?d.toFixed(2):d}</span> /  ${n.vote_count}</p>\n  <p  class='movie-info'>Popularity</p> <p>${n.popularity}</p>\n  <p  class='movie-info'>Original Title</p> <p>${n.original_title.toUpperCase()}</p>\n  <p  class='movie-info'>Genre</p> <p>${n.genres.map((e=>" "+e.name))}</p>\n  `,i.textContent=n.overview,u=n.title,g=n.genres.map((e=>" "+e.name)),p=n.release_date,m=n.poster_path;if(null!==localStorage.getItem("watch")){const e=localStorage.getItem("watch");v=JSON.parse(e)}else v=[];if(null!==localStorage.getItem("queue")){const e=localStorage.getItem("queue");S=JSON.parse(e)}else S=[];-1!==v.findIndex((e=>e.id===r))?(q.innerText="REMOVE FROM WATCHED",c=q.matches(".add-to-queue"),c&&(q.classList.toggle("add-to-queue"),q.classList.toggle("add-to-watched"))):(q.innerText="ADD TO WATCHED",c=q.matches(".add-to-watched"),c&&(q.classList.toggle("add-to-watched"),q.classList.toggle("add-to-queue")));-1!==S.findIndex((e=>e.id===r))?(w.innerText="REMOVE FROM QUEUE",c=w.matches(".add-to-queue"),c&&(w.classList.toggle("add-to-queue"),w.classList.toggle("add-to-watched"))):(w.innerText="ADD TO QUEUE",c=w.matches(".add-to-watched"),c&&(w.classList.toggle("add-to-queue"),w.classList.toggle("add-to-watched")))}q.addEventListener("click",(function(){if(null!==localStorage.getItem("watch")){const e=localStorage.getItem("watch");v=JSON.parse(e)}else v=[];if(console.log(v),h=v.findIndex((e=>e.id===r)),console.log(h),-1===h){const e=new i(r,u,g,p,m);console.log,v.push(e),localStorage.setItem("watch",JSON.stringify(v)),q.innerText="REMOVE FROM WATCHED",c=q.matches(".add-to-queue"),c&&(q.classList.toggle("add-to-queue"),q.classList.toggle("add-to-watched"))}else v.splice(h,1),localStorage.setItem("watch",JSON.stringify(v)),q.innerText="ADD TO WATCHED",c=q.matches(".add-to-watched"),c&&(q.classList.toggle("add-to-queue"),q.classList.toggle("add-to-watched"))})),w.addEventListener("click",(function(){if(null!==localStorage.getItem("queue")){const e=localStorage.getItem("queue");S=JSON.parse(e)}else S=[];if(h=S.findIndex((e=>e.id===r)),-1===h){const e=new i(r,u,g,p,m);S.push(e),localStorage.setItem("queue",JSON.stringify(S)),w.innerText="REMOVE FROM QUEUE",c=w.matches(".add-to-queue"),c&&(w.classList.toggle("add-to-queue"),w.classList.toggle("add-to-watched"))}else S.splice(h,1),localStorage.setItem("queue",JSON.stringify(S)),w.innerText="ADD TO QUEUE",c=w.matches(".add-to-watched"),c&&(w.classList.toggle("add-to-queue"),w.classList.toggle("add-to-watched"))}));
//# sourceMappingURL=index.723bd941.js.map