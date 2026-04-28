// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYWWnSgJcYDHNsex6ozWBEvoTGU1Z5urE",
    authDomain: "portfolio-c7ab1.firebaseapp.com",
    projectId: "portfolio-c7ab1",
    storageBucket: "portfolio-c7ab1.firebasestorage.app",
    messagingSenderId: "545600045744",
    appId: "1:545600045744:web:a575418e43ffb7f2a87175",
    measurementId: "G-2YBBEGY9D4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);