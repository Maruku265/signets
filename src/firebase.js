import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Config
const firebaseConfig = {
  apiKey: "AIzaSyCSRTbHzkt3npbWoSBfI0cfC2jnCkYdq7k",
  authDomain: "cdem-react.firebaseapp.com",
  projectId: "cdem-react",
  storageBucket: "cdem-react.appspot.com",
  messagingSenderId: "344031190712",
  appId: "1:344031190712:web:7b7744b6272f5225305e4d"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser Firestore
export const firestore = firebase.firestore();

// Initialiser le widget FirebaseUI
export const widgetFirebaseui = new firebaseui.auth.AuthUI(firebase.auth());