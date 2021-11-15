import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth";
import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC1HAc6kkNUaNyhkbaaV8xGnQlaYi1MYRE",
    authDomain: "rwitter-1c95a.firebaseapp.com",
    projectId: "rwitter-1c95a",
    storageBucket: "rwitter-1c95a.appspot.com",
    messagingSenderId: "34985897094",
    appId: "1:34985897094:web:d8dbdda0fcbcfddd483507",
  };

  const app = initializeApp(firebaseConfig);
  
  export const firebaseInstance = firebase;
  export const authService = getAuth();
  export const dbService = getFirestore();