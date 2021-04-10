
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

let TURMA = 'turmaA';
let db = firebase.firestore();

db.collection(TURMA).add({
  nome: 'Josieldo',
  sobrenome: 'Arantes',
  notas: { nota1: 7.7, nota2: 4.5 },
  advertencias: [
    {data: new Date(2021,2,12), desc:'Vacilou feio e matou aula!'},
    {data: new Date(2020,11,25), desc:'Apertando a bunda das meninas'}
  ],
  cidades: ['Nova Iorque', 'Kansas City']
}).then(doc => {
  console.log('Documento inserido com sucesso:', doc);
}).catch(err => {
  console.log(err);
});

db.collection(TURMA).doc('AlunoNovo').update(
  {
    // cidades: firebase.firestore.FieldValue.arrayUnion('São Paulo', 'Rio de Janeiro') add valores a um array já existente.
    faltas: firebase.firestore.FieldValue.increment(1)
  }
).then(doc =>{
  console.log('Documento inserido com sucesso:');
}).catch(err =>{
  console.log(err);
});