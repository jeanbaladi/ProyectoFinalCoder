import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCRBMP4cdUlM_5ilvgR5G1dberEK0FZN9g",
    authDomain: "react-coderhouse-53a63.firebaseapp.com",
    projectId: "react-coderhouse-53a63",
    storageBucket: "react-coderhouse-53a63.appspot.com",
    messagingSenderId: "557071402722",
    appId: "1:557071402722:web:af3c3fa2c5f467038280bb"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export const firestore = firebase.firestore(app)


