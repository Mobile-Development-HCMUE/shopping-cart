import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBn2uNfYA1Sxegx2lYpzmjqkLaE_VfeZvE",
    authDomain: "test-b067a.firebaseapp.com",
    databaseURL: "https://your-database-name.firebaseio.com",
    projectId: "test-b067a",
    storageBucket: "gs://test-b067a.appspot.com",
    messagingSenderId: "684006131040",
    appId: "1:684006131040:android:839dc69b2fd76a8c574a05",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { firebase, db };
