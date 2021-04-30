const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    url: { type: String, required: true },
    click: { type: Number, default: 0 }
});

const Link = mongoose.model('Link', linkSchema);

let link = new Link({
    title: 'Twitter',
    url: 'https://twitter.com/progrbr',
});

link.save()
    .then(console.log)
    .catch(console.log);

mongoose.connect('mongodb://localhost/newlinks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});


// mongoose.connect('mongodb://localhost/links', (err, db) => {
//     console.log(err);
//     console.log(db);
// })

// mongoose.connect('mongodb://localhost/links').
//     then(console.log)
//     .catch(console.log);

let db = mongoose.connection;

db.on('error', () => { console.log('houve um erro') });
db.once('open', () => { console.log('banco carregado!'); })



app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log('App listening on port', port));