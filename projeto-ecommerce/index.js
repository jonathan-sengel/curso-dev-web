const express = require('express');
const path = require('path');
const apiRoute = require('./routes/api');
const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use('/', apiRoute);
app.use('/public', express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});
