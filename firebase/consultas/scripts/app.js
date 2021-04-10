
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

let db = firebase.firestore();

//let todos os dados da coleção;
db.collection('turmaA').get().then((snapshot)=>{

  snapshot.forEach((doc)=>{
    let aluno = doc;
    console.log(aluno.id);
  });

});


// let docRef = db.collection('turmaA').doc('dAuB2NsmtMSQzAquHlQt');

// docRef.get().then((doc) => {
//   let aluno = doc.data();
//   console.log(doc.data().nome);
// });


// db.collection('turmaA').where('notas.nota1', '>', 7.8).get().then(snapshot => {
//   snapshot.forEach(doc => {
//     let aluno = doc.data();
//     console.log(aluno.nome, aluno.sobrenome, aluno.notas);
//   });
// })


db.collection('turmaA').where('notas.nota1','>',8).onSnapshot(snapshot => {

  snapshot.forEach(doc => {
    let aluno = doc.data();
    console.log(aluno.notas);
  });
});

// let docRef = db.collection('turmaA').doc('G82iGAGPePy0jF2mL2Tq');
// docRef.onSnapshot(snapshot => {
//   console.log(snapshot.data());
// });