
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

const auth = firebase.auth();

const criarUsu = () => {
  let newUserEmail = 'novoteste@gmail.com'
  let newUserPass = '123ccc';

  auth.createUserWithEmailAndPassword(newUserEmail, newUserPass)
    .then(user => {
      console.log(user);
    }).catch(error => {
      console.log(error);
    });
}

function login() {
  let userEmail = 'novoteste@gmail.com'
  let userPass = '123ccc';

  auth.signInWithEmailAndPassword(userEmail, userPass)
    .then(loggedUser => {
      console.log(auth.currentUser);
    }).catch(error => {
      console.log(error);
    })
}



auth.onAuthStateChanged(user => {
  if (user) {
    console.log(user);
  } else {
    console.log('ngm logado');
  }
});

function logout() {
  auth.signOut().then(() => console.log('usuário deslogado'))
      .catch(error => {
    console.log(error);
  });
}

setTimeout(login,2000);