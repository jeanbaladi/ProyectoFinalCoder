import firebase from "firebase/app";
import "firebase/firestore";


let firebaseConfig = {
  apiKey: "QUl6YVN5Q1JCTVA0Y2RVbE1fNWlsdmdSNUcxZGJlckVLMEZaTjln",
  authDomain: "cmVhY3QtY29kZXJob3VzZS01M2E2My5maXJlYmFzZWFwcC5jb20=",
  projectId: "cmVhY3QtY29kZXJob3VzZS01M2E2Mw==",
  storageBucket: "cmVhY3QtY29kZXJob3VzZS01M2E2My5hcHBzcG90LmNvbQ==",
  messagingSenderId: "NTU3MDcxNDAyNzIy",
  appId: "MTo1NTcwNzE0MDI3MjI6d2ViOmFmM2MzZmEyYzVmNDY3MDM4MjgwYmI="
};
const decodedString = atob(firebaseConfig.apiKey); 
const decodedString1 = atob(firebaseConfig.authDomain); 
const decodedString2 = atob(firebaseConfig.projectId); 
const decodedString3 = atob(firebaseConfig.storageBucket); 
const decodedString4 = atob(firebaseConfig.messagingSenderId); 
const decodedString5 = atob(firebaseConfig.appId); 

const newFirebaseConfig = {
  apiKey: decodedString,
  authDomain: decodedString1,
  projectId: decodedString2,
  storageBucket: decodedString3,
  messagingSenderId: decodedString4,
  appId: decodedString5
};


  const app = firebase.initializeApp(newFirebaseConfig)

  export const firestore = firebase.firestore(app)

