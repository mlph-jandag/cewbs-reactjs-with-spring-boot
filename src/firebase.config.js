import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// add this into .ENV file
const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
    appId: process.env.REACT_APP_ID
});

export const firebaseAuth = firebaseApp.auth();

// export const firebaseDatabase = firebaseApp.database();

export const firestore = firebaseApp.firestore();

export default firebaseApp;