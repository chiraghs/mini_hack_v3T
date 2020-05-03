import firebase from 'firebase/app'
import'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAKZUwP_iC066mQNn_HAQIf5hGswbGUHuw",
    authDomain: "fitness-b79f7.firebaseapp.com",
    databaseURL: "https://fitness-b79f7.firebaseio.com",
    projectId: "fitness-b79f7",
    storageBucket: "fitness-b79f7.appspot.com",
    messagingSenderId: "260866102872",
    appId: "1:260866102872:web:bacff9e7ea8e8f9d095c2d",
    measurementId: "G-JYRV7BMV62"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export default db;