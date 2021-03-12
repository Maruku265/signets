import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Config
const firebaseConfig = {
  
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser Firestore
export const firestore = firebase.firestore();

// Initialiser le widget FirebaseUI
export const widgetFirebaseui = new firebaseui.auth.AuthUI(firebase.auth());