const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

let users = [
    {
        id: 0,
        name: 'James Cameron',
        phone: '(87)9955-4455'
    },
    {
        id: 1,
        name: 'Romário',
        phone: '(87)77554-4455'
    },
    {
        id: 2,
        name: 'Joaquina',
        phone: '(54)6655-4455'
    },
];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('user', { users: users });
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3000, () => console.log('Server listening on 3000'));