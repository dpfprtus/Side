import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth";
import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC1HAc6kkNUaNyhkbaaV8xGnQlaYi1MYRE",
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID,
  };

  const app = initializeApp(firebaseConfig);
  
  export const firebaseInstance = firebase;
  export const authService = getAuth();