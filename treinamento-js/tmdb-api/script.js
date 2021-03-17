'use strict';

const baseImgUrl = 'https://image.tmdb.org/t/p/w300/';
const urlUpcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=eda6d9a6a9d492a2c3205744b78a5d19&language=pt-BR&page=2'
const urlPopular = 'https://api.themoviedb.org/3/movie/popular?api_key=eda6d9a6a9d492a2c3205744b78a5d19&language=pt-BR&page=2';
const urlTopRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=eda6d9a6a9d492a2c3205744b78a5d19&language=pt-BR&page=1';
const urlNowPlaying = 'https://api.themoviedb.org/3/movie/now_playing?api_key=eda6d9a6a9d492a2c3205744b78a5d19&language=pt-BR&page='


function generateListCatalog(container, moviesList) {

    const moviesContainer = document.querySelector(container).querySelector('.movies__container');

    moviesList.forEach(movie => {

        let divMedia = createMovieMedia(movie);
        let divDetails = createMovieDetails(movie);
        let divInfo = createMovieInfo(movie);

        let divMovie = createMovie(movie, divMedia, divDetails, divInfo);

        moviesContainer.appendChild(divMovie);
        moviesContainer.id = container.substring(13) + 'C';

    });
    adjustCarousel(moviesContainer.id);
}

function createMovie(movie, media, details, info) {
    let divMovie = document.createElement('div');
    divMovie.classList.add('movies-list__movie');
    divMovie.id = movie.id;

    divMovie.appendChild(media);
    divMovie.appendChild(details);
    divMovie.appendChild(info);
    return divMovie;
}

function createMovieMedia(movie) {

    let divRating = document.createElement('div');
    divRating.classList.add('movie__media__rating');
    let span = document.createElement('span');
    span.textContent = movie.vote_average.toFixed(1);
    divRating.appendChild(span);

    let img = document.createElement('img');
    img.classList.add('movie__media__poster');
    img.src = baseImgUrl + movie.poster_path;
    img.alt = movie.title;

    let divMedia = document.createElement('div');
    divMedia.classList.add('movie__media');
    divMedia.appendChild(divRating);
    divMedia.appendChild(img);

    return divMedia;
}

function createMovieDetails(movie) {

    let divTitle = document.createElement('div');
    divTitle.classList.add('movie__details__title');
    divTitle.textContent = movie.title;

    let divOverview = document.createElement('div');
    divOverview.classList.add('movie__details__more-info');
    divOverview.textContent = movie.overview.substring(0, 130) + '...';

    let divRelease = document.createElement('div');
    divRelease.classList.add('movie__details__release');
    divRelease.innerHTML = 'Lançamento: ' + movie.release_date;

    let divDetails = document.createElement('div');
    divDetails.classList.add('movie__details', 'movie__details--disabled');
    divDetails.appendChild(divTitle);
    divDetails.appendChild(divOverview);
    divDetails.appendChild(divRelease);

    return divDetails;

}

function createMovieInfo(movie) {

    let divInfo = document.createElement('div');
    divInfo.classList.add('movie__more__info');
    divInfo.innerHTML = '&#x1F6C8;';
    divInfo.addEventListener('mouseover', showInfo);
    divInfo.addEventListener('mouseout', hideInfo);

    // divInfo.parentElement
    return divInfo;
}

function showInfo(event) {
    let details = event.target.parentElement.querySelector('.movie__details');
    details.classList.remove('movie__details--disabled');
}
function hideInfo(event) {
    let details = event.target.parentElement.querySelector('.movie__details');
    details.classList.add('movie__details--disabled');
}



function charge() {

    setTimeout(() => {
        generatePlayingListCatalog(moviesPlayingList);
        generateListCatalog('.movies-list.movies-list__latest', moviesLatestList);
        generateListCatalog('.movies-list.movies-list__popular', moviesUpcomingList);
        generateListCatalog('.movies-list.movies-list__top-rated', moviesTopRatedList);

    }, 500);


}