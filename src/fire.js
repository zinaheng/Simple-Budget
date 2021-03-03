import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCwkOlN5LS4-Uwt3kdB4QSYVLQUGIFckdI",
    authDomain: "simplebudget-a6709.firebaseapp.com",
    projectId: "simplebudget-a6709",
    storageBucket: "simplebudget-a6709.appspot.com",
    messagingSenderId: "1061475614468",
    appId: "1:1061475614468:web:129c312d64af64d11c5a51"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;