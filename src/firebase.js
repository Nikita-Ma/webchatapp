import firebase from "firebase";
import "firebase/auth"
import "firebase/database"
import "firebase/storage"

const config = {
    apiKey: "AIzaSyCsssNh98UmTYx8w61p5_XPQ28LCYOHpdg",
    authDomain: "reactchat-1b5c1.firebaseapp.com",
    projectId: "reactchat-1b5c1",
    storageBucket: "reactchat-1b5c1.appspot.com",
    messagingSenderId: "629176323968",
    appId: "1:629176323968:web:4c2766fecb7c9ae1f1bb65",
    measurementId: "G-XBT27S9EGT"
};
firebase.initializeApp(config)
export default firebase