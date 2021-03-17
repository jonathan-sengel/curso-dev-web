const moviesLatestList = getLatestList();

function getLatestList() {

    const latestListMovies = [];
    fetch(urlPopular).then(resp => {
        return resp.json();
    }).then(movies => {
        movies.results.forEach(movie => latestListMovies.push(movie));
    });
    return latestListMovies;
}