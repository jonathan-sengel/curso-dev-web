document.addEventListener('DOMContentLoaded', updatePosts);


function updatePosts() {
    fetch('http://192.168.2.11:3000/api/all')
        .then(resp => resp.json())
        .then(returnPosts => {

            let postElements = '';
            let posts = returnPosts;

            posts.forEach(post => {
                let postElement = `<div id=${post.id} class="card mb-4">
                                        <div class="card-header">
                                            <h5 class="card-title">${post.title}</h5>
                                        </div>
                                        <div class="card-body">
                                            <div class="card-text">${post.description}</div>
                                        </div>
                                    </div>`;
                postElements += postElement;
            });
            document.querySelector('#posts').innerHTML = postElements;
        });
}

function newPost() {
    let title = document.querySelector('#title').value;
    let description = document.querySelector('#desc').value;

    let post = { title, description };
    const options = {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(post)
    }

    fetch('http://192.168.2.11:3000/api/new', options)
        .then(resp => console.log(resp));

    updatePosts();
    document.querySelector('#title').value = '';
    document.querySelector('#desc').value = '';
}