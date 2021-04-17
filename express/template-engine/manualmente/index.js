const express = require('express');
const fs = require('fs');
const app = express();

let user = {
    id: 0,
    name: 'Jonathan Engel',
    phone: '(43)99191-1313'
}

function render(data, obj) {
    for (let key in obj) {
        data = data.replace(`{{{${key}}}}`, obj[key])
    }
    return data;
}

app.get('/', (req, res) => {
    fs.readFile('./template/user.html', 'UTF-8', (err, data) => {
        if (!err) {
            res.send(render(data, user));
        }
    });
});

app.listen(3000, () => console.log('Server listening on 3000'));