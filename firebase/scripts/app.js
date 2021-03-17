
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
// db.collection('turmaA').get().then((snapshot)=>{

//   snapshot.forEach((doc)=>{
//     let aluno = doc.data();
//     console.log(aluno.nome);
//   });

// });


let docRef = db.collection('turmaA').doc('MkHkxbVkBqhoXR3tortg');

docRef.get().then((doc) => {
  let aluno = doc.data();
  console.log(aluno);
});