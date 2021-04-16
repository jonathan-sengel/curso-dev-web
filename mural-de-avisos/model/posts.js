module.exports = {
    posts: [
        {
            id: '11m1otvo34',
            title: 'Teste do Mural',
            description: 'Descrição teste do mural 01'
        }
    ],
    getAll() {
        return this.posts;
    },
    newPost(title, description) {
        let id = generateID();
        this.posts.push({ id, title, description });
        return id;
    },
    deletePosts(idToDelete) {
        let index = "";

        this.posts.forEach((el, i) => {
            if (el.id == idToDelete) {
                index = i;
            }
        });
        this.posts.splice(index, 1);
    }
}

function generateID() {
    return Math.random().toString(36).substr(2, 9);
}