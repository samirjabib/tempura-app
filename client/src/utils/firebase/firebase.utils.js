
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";




const firebaseConfig = {

  apiKey: "AIzaSyBm8Xi27qCSLedHH-gadbDgNOAYoSqkECE",

  authDomain: "tempura-30c2d.firebaseapp.com",

  projectId: "tempura-30c2d",

  storageBucket: "tempura-30c2d.appspot.com",

  messagingSenderId: "695831529633",

  appId: "1:695831529633:web:ab23336d3e3745657cc8e0"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app);

console.log(firebaseAuth)