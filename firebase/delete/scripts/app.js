
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
let db2 = firebase.firestore();

// db.collection(TURMA).add({
//   nome: 'Marcos',
//   sobrenome: 'Silva',
//   notas: { nota1: 9.6, nota2: 7.5 }
// }).then(doc => {
//   console.log('Documento inserido com sucesso:', doc);
// }).catch(err => {
//   console.log(err);
// });

// db.collection(TURMA).doc('AlunoNovo').update(
//   {
//     // cidades: firebase.firestore.FieldValue.arrayUnion('São Paulo', 'Rio de Janeiro') add valores a um array já existente.
//     cidades: firebase.firestore.FieldValue.delete()
//   }
// ).then(doc => {
//   console.log('Documento apagado com sucesso:');
// }).catch(err => {
//   console.log(err);
// });


coletarIds();
function coletarIds() {
  let abc = [];
  db.collection('turmaA').get().then((snapshot) => {

    snapshot.forEach((doc) => {
      db.collection('turmaA').doc(doc.id).delete().then(() => console.log('apagado'));
    });
  });
}


// console.log(abc[0]);