import firebase from 'firebase';

// add this into .ENV file
var config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
    appId: process.env.REACT_APP_ID
};

// Initialize Firebase
let firebaseApp = firebase.initializeApp(config);

let firebaseDB = firebaseApp.database().ref();

export {
    firebaseApp,
    firebaseDB,
}