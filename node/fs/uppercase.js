let fs = require('fs'); //chama o modulo FileSystem do Node;

let args = process.argv.slice(2);
let fileName = args[0];

fs.readFile(fileName, 'UTF8', (error, data) => {

    if (error) {
        throw error;
    }
    fs.writeFile(fileName + '_Uppercase', data.toUpperCase(), error =>{

        if(error){
            throw error;
        }
        console.log('Arquivo gerado com sucesso!');

    });

});














// fs.appendFile('teste.txt', ' \n- Hello World!', function (error) {

//     if (error) { throw error ;}

//     console.log('Arquivo criado com sucesso!!!');

// });


// fs.unlink('teste.txt', function (error) {

//     if (error) { throw error ;}

//     console.log('Arquivo apagado com sucesso!!!');

// });

// fs.rename('teste.txt', 'novo-teste.txt', function (error) {

//     if (error) { throw error; }

//     console.log('Arquivo renomeado com sucesso!!!');

// });


// fs.readFile('novo-teste.txt','UTF8', function (error, data) {

//     if (error) { throw error ;}

//     console.log(data);

// });