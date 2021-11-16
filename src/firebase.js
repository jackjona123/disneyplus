import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyD4Qu9G5nJ8dhwJqLw08nZR1rcpkvLtsV8",
    authDomain: "disney-plus101.firebaseapp.com",
    projectId: "disney-plus101",
    storageBucket: "disney-plus101.appspot.com",
    messagingSenderId: "898675208261",
    appId: "1:898675208261:web:64b5c9b949101cc585332c",
    measurementId: "G-J2BSQNFL6L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export  { auth, provider, storage };
  export default db;