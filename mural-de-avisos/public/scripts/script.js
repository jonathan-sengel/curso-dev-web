document.addEventListener('DOMContentLoaded', updatePosts);


function updatePosts() {
    fetch('http://localhost:3000/api/all')
        .then(resp => resp.json())
        .then(console.log);
}

function newPost() {

}