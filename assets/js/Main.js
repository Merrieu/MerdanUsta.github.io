// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNEG4KRDToScUZ1PhGunGYkh14j4mbqnI",
  authDomain: "werkman-9dc4e.firebaseapp.com",
  projectId: "werkman-9dc4e",
  storageBucket: "werkman-9dc4e.appspot.com",
  messagingSenderId: "723333509041",
  appId: "1:723333509041:web:153f727a2afef3d11a9790",
  measurementId: "G-J59N29W5GJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
