import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPUfn1FVBNRqTFwmFBH0AAWJ1Y36SPW80",
  authDomain: "clone-6c643.firebaseapp.com",
  projectId: "clone-6c643",
  storageBucket: "clone-6c643.appspot.com",
  messagingSenderId: "134477057412",
  appId: "1:134477057412:web:2f7509f4984b3e5b3ce1d1",
  measurementId: "G-ZPB0JJZRYZ"
};

//intializing firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
