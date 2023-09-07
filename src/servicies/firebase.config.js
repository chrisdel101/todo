// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Eq3fgMiKSveZ9SKvZZ4aBGhr_18_OYA",
  authDomain: "cs476-15ce9.firebaseapp.com",
  projectId: "cs476-15ce9",
  storageBucket: "cs476-15ce9.appspot.com",
  messagingSenderId: "118591044885",
  appId: "1:118591044885:web:b12e031a0acaef719cfd1c",
  measurementId: "G-KPNRW6TEYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)