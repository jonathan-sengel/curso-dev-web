
const $btnAdd = document.querySelector('.input-btn');
$btnAdd.addEventListener('click', execute);

const $fields = document.querySelectorAll('.form__input:not(.input-btn,.empty-message');
const $spanMessage = document.querySelector('.empty-message');
const $modal = document.querySelector('.l-modal');


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
        showSuccessModal();
    }).catch(err => {
        console.log(err);
    });
}

function clearFields() {
    $fields.forEach(field => field.value = '');
    $fields[0].focus();
    $spanMessage.innerHTML = '';
}

function isFilledFields() {
    const fieldsValidate = Array.from($fields);
    return fieldsValidate.every(field => field.value !== '');
}


function execute(e) {
    e.preventDefault();
    if (isFilledFields()) {
        addStudent(colectData());
    } else {
        fieldEmptyMessage();
    }
}

function fieldEmptyMessage() {
    $spanMessage.innerHTML = 'Preencha todos os campos acima!!';
}

function showSuccessModal() {
    $modal.classList.add('l-modal--active');
    const $button = $modal.querySelector('.box__button');
    $button.addEventListener('click', () => {
        $modal.classList.remove('l-modal--active');
        clearFields();
    });
}