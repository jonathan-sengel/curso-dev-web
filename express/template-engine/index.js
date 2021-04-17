const express = require('express');
const fs = require('fs');
const app = express();

let user = {
    id: 0,
    name: 'Igor',
    phone: '(43)99918-1213'
}

app.get('/', (req, res) => {

});

app.listen(3000, () => console.log('Server listening on 3000'));