document.addEventListener('DOMContentLoaded', loadStudends);

const $table = document.querySelector('tbody');

const addTableRow = (student) => {
    let row = document.createElement('tr');
    let name = document.createElement('td');
    let nota1 = document.createElement('td');
    let nota2 = document.createElement('td');
    let media = document.createElement('td');

    name.innerHTML = student.nome + ' ' + student.sobrenome;
    nota1.innerHTML = student.notas.nota1.toFixed(1);
    nota2.innerHTML = student.notas.nota2.toFixed(1);
    media.innerText = mediaCalculate(student);

    row.appendChild(name);
    row.appendChild(nota1);
    row.appendChild(nota2);
    row.appendChild(media);

    $table.appendChild(row);

}

function loadStudends(e) {
    db.collection(BASE).get().then(snapshot => {
        snapshot.forEach(doc => {
            const student = doc.data();
            addTableRow(student);
            console.log(student);
        });
    });
}

function mediaCalculate(student){
    return ((student.notas.nota1 + student.notas.nota2) /2).toFixed(1);
}