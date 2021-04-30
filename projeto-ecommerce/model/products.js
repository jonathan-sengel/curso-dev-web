module.exports = {
    baseProducts: [
        {
            id: 'aa44bb',
            name: 'Carrinho de rolemã',
            ref: 'rolema123',
            price: 155.85,
            quantity: 7,
            imageUrl: 'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/132766/7/132766737_1GG.jpg'
        },
        {
            id: 'cc55dd',
            name: 'Cortador de Grama',
            ref: 'cortador554',
            price: 199.89,
            quantity: 3,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51iOYkdVGfL._SX391_BO1,204,203,200_.jpg'
        },
        {
            id: 'ee66ff',
            name: 'Lampada de Led 9w',
            ref: 'lampada9w55',
            price: 8.99,
            quantity: 25,
            imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_823836-MLB44188707957_112020-O.webp'
        },
        {
            id: 'gg77hh',
            name: 'Xbox One S 1TB',
            ref: 'xbox1tbs',
            price: 1785.50,
            quantity: 3,
            imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_731204-MLB43825198867_102020-O.webp'
        },
        {
            id: 'ii88jj',
            name: 'Xbox Series S 1TB',
            ref: 'xboxss1tb',
            price: 2459.90,
            quantity: 5,
            imageUrl: 'https://novaplay.com.br/wp-content/uploads/2020/11/fcb5fbdf-009b-4a09-8850-e2825a84f89a.png'
        },
        {
            id: 'kk99ll',
            name: 'Ventilador 60cm',
            ref: 'vent60cm',
            price: 74.90,
            quantity: 8,
            imageUrl: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/v/e/ventilador-40cm-eros-turbo-vtr409-cadence_381018.jpg'
        }, {
            id: 'aa44bb',
            name: 'Carrinho de rolemã',
            ref: 'rolema123',
            price: 155.85,
            quantity: 7,
            imageUrl: 'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/132766/7/132766737_1GG.jpg'
        },
        {
            id: 'cc55dd',
            name: 'Cortador de Grama',
            ref: 'cortador554',
            price: 199.89,
            quantity: 3,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51iOYkdVGfL._SX391_BO1,204,203,200_.jpg'
        },
        {
            id: 'ee66ff',
            name: 'Lampada de Led 9w',
            ref: 'lampada9w55',
            price: 8.99,
            quantity: 25,
            imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_823836-MLB44188707957_112020-O.webp'
        },
        {
            id: 'gg77hh',
            name: 'Xbox One S 1TB',
            ref: 'xbox1tbs',
            price: 1785.50,
            quantity: 3,
            imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_731204-MLB43825198867_102020-O.webp'
        },
        {
            id: 'ii88jj',
            name: 'Xbox Series S 1TB',
            ref: 'xboxss1tb',
            price: 2459.90,
            quantity: 5,
            imageUrl: 'https://novaplay.com.br/wp-content/uploads/2020/11/fcb5fbdf-009b-4a09-8850-e2825a84f89a.png'
        },
        {
            id: 'kk99ll',
            name: 'Ventilador 60cm',
            ref: 'vent60cm',
            price: 74.90,
            quantity: 8,
            imageUrl: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/v/e/ventilador-40cm-eros-turbo-vtr409-cadence_381018.jpg'
        },
    ],

    getAll() {
        return this.baseProducts.sort();
    },

    newProduct(name, ref, price, quantity) {
        let id = generateID();
        this.baseProducts.push({ id, name, ref, price, quantity });
        return id;
    },

    deleteProduct(idToDelete) {
        let index = '';
        this.baseProducts.forEach((el, i) => {
            if (el.id == idToDelete) {
                index = i;
            }
        });
        this.baseProducts.splice(index, 1);
    }
}

function generateID() {
    return Math.random().toString(36).substr(2, 6);
}