!function(){var e={userMovieSearch:document.querySelector(".header__form"),userMovieSearchContainer:document.querySelector(".header__form-container"),homeLink:document.querySelector(".home-link"),libraryLink:document.querySelector(".library-link"),headerBtnContainer:document.querySelector(".header__buttons-container"),queueBtn:document.querySelector(".library__button-queue"),watchedBtn:document.querySelector(".library__button-watched"),logoLink:document.querySelector(".logo-link"),goitLink:document.querySelector(".footer-link")};e.libraryLink.addEventListener("click",(function(t){t.target===e.libraryLink&&(e.userMovieSearch.value="",e.libraryLink.classList.add("active"),e.homeLink.classList.remove("active"),e.userMovieSearchContainer.style.display="none",e.headerBtnContainer.style.display="flex",document.body.classList.add("my-library"))})),e.homeLink.addEventListener("click",(function(t){t.target===e.homeLink&&(e.userMovieSearch.value="",e.homeLink.classList.add("active"),e.libraryLink.classList.remove("active"),document.body.classList.remove("my-library"),e.headerBtnContainer.style.display="none",e.userMovieSearchContainer.style.display="flex")})),e.queueBtn.addEventListener("click",(function(t){t.target===e.queueBtn&&(e.watchedBtn.classList.remove("active-btn"),e.queueBtn.classList.add("active-btn"),e.userMovieSearch.value="")})),e.watchedBtn.addEventListener("click",(function(t){t.target===e.watchedBtn&&(e.queueBtn.classList.remove("active-btn"),e.watchedBtn.classList.add("active-btn"),e.userMovieSearch.value="")}))}();
//# sourceMappingURL=index.2c868617.js.map
