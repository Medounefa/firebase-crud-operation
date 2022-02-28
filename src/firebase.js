/* eslint-disable no-undef */
import firebase from 'firebase/compat';
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDOOtxn8-PETqPO_Mgxr0UhkNclZ9nLDm4",
    authDomain: "reacjs-contact.firebaseapp.com",
    projectId: "reacjs-contact",
    storageBucket: "reacjs-contact.appspot.com",
    messagingSenderId: "141665908730",
    appId: "1:141665908730:web:420a033f8f9117d70b5643"
  };

// eslint-disable-next-line no-undef

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();