import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyDgWkGzGsaSZfRAepMMfcYAz2peLxmMONI",
        authDomain: "clone-58ea9.firebaseapp.com",
        projectId: "clone-58ea9",
        storageBucket: "clone-58ea9.appspot.com",
        messagingSenderId: "708520484042",
        appId: "1:708520484042:web:af14326dd1c3546387a833",
        measurementId: "G-9TNYN2WGBV"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};