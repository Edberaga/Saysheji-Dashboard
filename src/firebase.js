// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "crm-by-ssj.firebaseapp.com",
  projectId: "crm-by-ssj",
  storageBucket: "crm-by-ssj.appspot.com",
  messagingSenderId: "244913005471",
  appId: "1:244913005471:web:63e0badba005f7a27d13aa",
  measurementId: "G-6Y8V9HSVMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);