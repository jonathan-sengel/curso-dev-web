let isActived = {};
const moviesPlayingList = getNowPlaying();



function getNowPlaying() {
    const nowPlayingMovies = [];
    fetch(urlNowPlaying).then(resp => {
        return resp.json();
    }).then(movies => {
        movies.results.forEach(movie => nowPlayingMovies.push(movie));
    });
    return nowPlayingMovies;
}


function generatePlayingListCatalog(moviesList) {
    const swatch = document.querySelector('.featured-list__swatch-bar');
    moviesList.forEach((movie, index) => {

        let divMovie = document.createElement('div');
        divMovie.classList.add('swatch-bar__movie');
        divMovie.id = (movie.id);
        divMovie.addEventListener('click', setToActive);

        let spanTitle = document.createElement('span');
        spanTitle.classList.add('swatch-bar__movie__title');
        spanTitle.textContent = movie.title;

        let img = document.createElement('img');
        img.classList.add('swatch-bar__movie__poster');
        img.src = baseImgUrl + movie.backdrop_path;
        img.alt = movie.title;

        divMovie.appendChild(spanTitle);
        divMovie.appendChild(img);
        swatch.appendChild(divMovie);
        if (index === 0) {
            isActived = img;
            isActived.classList.add('swatch-bar__movie__poster--active');
            let contentBackGround = document.querySelector('.featured-list__content');
            contentBackGround.style.backgroundImage = `url("${img.src.replaceAll("w300", "original")}")`;
        }
        swatch.id = 'swatch-barC';
    });
    adjustCarousel(swatch.id);

}

function setToActive(event) {
    isActived.classList.remove('swatch-bar__movie__poster--active');
    event.target.classList.add('swatch-bar__movie__poster--active');
    isActived = event.target;
    let contentBackGround = document.querySelector('.featured-list__content');
    contentBackGround.style.backgroundImage = `url("${isActived.src.replaceAll("w300", "original")}")`;
}
