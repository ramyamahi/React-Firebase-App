import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCgOVAq81CjF5b8lZNslQIKE-KZ82zf3Ag",
    authDomain: "react-app-9d079.firebaseapp.com",
    projectId: "react-app-9d079",
    storageBucket: "react-app-9d079.appspot.com",
    messagingSenderId: "110772119690",
    appId: "1:110772119690:web:9a58d046ff5ec5bb506573",
    measurementId: "G-L55GHMZ9BH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };