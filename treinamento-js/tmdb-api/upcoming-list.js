const moviesUpcomingList = getUpcomingList();

function getUpcomingList() {

    const upcomingListMovies = [];
    fetch(urlUpcoming).then(resp => {
        return resp.json();
    }).then(movies => {
        movies.results.forEach(movie => upcomingListMovies.push(movie));
    });
    return upcomingListMovies;
}