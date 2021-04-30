const express = require('express');
const app = express();

require('dotenv').config();

let port = process.env.PORT;
app.listen(port, function () {
    console.log('Server listening on port %s', port);
});