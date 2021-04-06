import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCwkOlN5LS4-Uwt3kdB4QSYVLQUGIFckdI",
    authDomain: "simplebudget-a6709.firebaseapp.com",
    projectId: "simplebudget-a6709",
    storageBucket: "simplebudget-a6709.appspot.com",
    messagingSenderId: "1061475614468",
    appId: "1:1061475614468:web:129c312d64af64d11c5a51"
  };
  // Initialize firebasebase
  // eslint-disable-next-line no-undef
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  // const provider = new firebase.auth.GoogleAuthProvider();
  // export const signInWithGoogle = () => {
  //   auth.signInWithPopup(provider);
  // };
  
  export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
  
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
  
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  
  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
  
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };
