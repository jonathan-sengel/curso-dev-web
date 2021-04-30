const express = require('express');
const router = express.Router();
const products = require('../model/products');

router.use(express.json());

router.get('/', (req, res) => res.render('index', { storeName: 'Loja do Jow', products: products }));

router.get('/all', (req, res) => {
    res.json(products.getAll());
});

router.post('/new', express.json(), (req, res) => {
    let name = req.body.name;
    let ref = req.body.ref;
    let price = req.body.price;
    let quantity = req.body.quantity;

    let tmpID = products.newProduct(name, ref, price, quantity);
    res.send(`Produto ${tmpID} adicionado com sucesso!!!`);
});

router.delete('/delete', (req, res) => {
    let id = req.body.id;
    products.deleteProduct(id);
    res.send(`Produto ${id} removido com sucesso!!!`);
});


module.exports = router;