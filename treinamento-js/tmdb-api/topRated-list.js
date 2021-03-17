const moviesTopRatedList = getTopRatedList();

function getTopRatedList() {

    const topRatedListMovies = [];
    fetch(urlTopRated).then(resp => {
        return resp.json();
    }).then(movies => {
        movies.results.forEach(movie => topRatedListMovies.push(movie));
    });
    return topRatedListMovies;
}