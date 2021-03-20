var firebaseConfig = {
    apiKey: "AIzaSyBMg4rzWWPV6vyiqtYaqEPPylnDOTrbTlc",
    authDomain: "colegio-f74a0.firebaseapp.com",
    projectId: "colegio-f74a0",
    storageBucket: "colegio-f74a0.appspot.com",
    messagingSenderId: "881636530968",
    appId: "1:881636530968:web:52539d6f6331797ec21c6d",
    measurementId: "G-KTQ8HPDCLR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const BASE = 'fixacaoFirestore';
const db = firebase.firestore();

const $btnAdd = document.querySelector('.input-btn');
$btnAdd.addEventListener('click', execute);

const $fields = document.querySelectorAll('.form__input:not(.input-btn)');
const $spanMessage = document.querySelector('.empty-message');


const colectData = () => {
    const student = {
        firstName: document.querySelector('.input-fname').value,
        lastName: document.querySelector('.input-lname').value,
        nota1: parseFloat(document.querySelector('#nota1').value),
        nota2: parseFloat(document.querySelector('#nota2').value)
    }
    return student;
}

function addStudent(student) {
    db.collection(BASE).add({
        nome: student.firstName,
        sobrenome: student.lastName,
        notas: { nota1: student.nota1, nota2: student.nota2 }
    }).then(doc => {
        console.log('> Cadastrado com sucesso!');
        clearFields();
    }).catch(err => {
        console.log(err);
    });
}

function clearFields() {
    $fields.forEach(field => field.value = '');
    $fields[0].focus();
    $spanMessage.innerHTML ='';
}

function isFilledFields() {
    const fieldsValidate = Array.from($fields);
    return fieldsValidate.every(field => field.value !== '');
}


function execute(e) {
    e.preventDefault();
    if (isFilledFields()) {
        addStudent(colectData());
    }else{
        fieldEmptyMessage();
    }
}

function fieldEmptyMessage (){
    $spanMessage.innerHTML = 'Preencha todos os campos acima!!';
}