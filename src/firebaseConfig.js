// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNPgm6N_FP0y8wh_1a84iwt1M81RZW26U",
  authDomain: "react-f0f5b.firebaseapp.com",
  projectId: "react-f0f5b",
  storageBucket: "react-f0f5b.appspot.com",
  messagingSenderId: "788563947366",
  appId: "1:788563947366:web:1132f3352172c1427622a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db