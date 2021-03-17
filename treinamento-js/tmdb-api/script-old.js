'use strict'

// const url = 'https://api.themoviedb.org/3/movie/popular?api_key=eda6d9a6a9d492a2c3205744b78a5d19&language=pt-BR&page=1';

const url  = 'https://api.themoviedb.org/3/movie/popular?api_key=eda6d9a6a9d492a2c3205744b78a5d19&language=en-US&page=1';
const urlImg = 'https://image.tmdb.org/t/p/w185/';


let filmes = getPopularMovies();
mostPopular(filmes);



function generateCatalog() {

    let grid = document.getElementById('movies-grid');

    console.log(filmes);
    filmes.forEach(film => {

        let divMovie = document.createElement('div');
        divMovie.id = film.id;
        divMovie.classList.add('movies-info');

        let divMedia = document.createElement('div');
        divMedia.classList.add('movie-media');
        divMedia.style.backgroundImage = `url('${generateImgLink(film)}')`;
        divMedia.style.backgroundSize = 'cover';
        let rating = document.createElement('span');
        rating.classList.add('rating');
        rating.innerHTML = film.vote_average.toFixed(1);
        divMedia.appendChild(rating);

        divMovie.appendChild(divMedia);

        let divDetails = document.createElement('div');
        divDetails.classList.add('movie-details');
        let title = document.createElement('span');
        let overview = document.createElement('span');
        let released = document.createElement('span');
        let button = document.createElement('span');

        title.classList.add('title');
        title.innerHTML = film.title;

        overview.classList.add('overview');
        overview.innerHTML = 'Sinopse...';

        released.classList.add('release-date');
        released.innerHTML = 'Lançamento: ' + film.release_date;

        button.classList.add('button');
        button.innerHTML = '+ Detalhes';

        divDetails.appendChild(title);
        divDetails.appendChild(overview);
        divDetails.appendChild(released);
        divDetails.appendChild(button);

        divMovie.appendChild(divDetails);


        grid.appendChild(divMovie);

    });
}

function getPopularMovies() {
    const popularMovies = [];
    fetch(url).then(resp => {
        return resp.json();
    }).then(movies => {

        movies.results.forEach(movie => popularMovies.push(movie));

    });
    mostPopular(popularMovies);
    return popularMovies;
}

function mostPopular(movies) {

    movies = movies.sort((a, b) => a.vote_average > b.vote_average ? -1 : 1);
}

function generateImgLink(movie) {
    return urlImg + movie.backdrop_path;
}
