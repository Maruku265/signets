import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Config
const firebaseConfig = {
  apiKey: "AIzaSyBVNZayndvVPJI-c0dOF-KA6BuGYjd2s98",
  authDomain: "pvt-h21-pilon-marc.firebaseapp.com",
  databaseURL: "https://pvt-h21-pilon-marc-default-rtdb.firebaseio.com",
  projectId: "pvt-h21-pilon-marc",
  storageBucket: "pvt-h21-pilon-marc.appspot.com",
  messagingSenderId: "218748352260",
  appId: "1:218748352260:web:68c0919b23be78067f0251"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser Firestore
export const firestore = firebase.firestore();

// Initialiser le widget FirebaseUI
export const widgetFirebaseui = new firebaseui.auth.AuthUI(firebase.auth());