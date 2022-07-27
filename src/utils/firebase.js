// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Updated firebaseConfig code

const firebaseConfig = {
  apiKey: "AIzaSyBXYP3_-5w7DrZ_fzVLoQ6ftgjd6uNCUeE",
  authDomain: "phi-sigma-pi-attendance.firebaseapp.com",
  databaseURL: "https://phi-sigma-pi-attendance-default-rtdb.firebaseio.com",
  projectId: "phi-sigma-pi-attendance",
  storageBucket: "phi-sigma-pi-attendance.appspot.com",
  messagingSenderId: "355174515625",
  appId: "1:355174515625:web:cc3e4ecdb351c58c21fab8",
  measurementId: "G-2ZYQ4RTP48"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);