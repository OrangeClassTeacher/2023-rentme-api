// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdcG7cENNtUgAy8xZMUWk6bdvE432Xo2g",
  authDomain: "rentme-98a44.firebaseapp.com",
  projectId: "rentme-98a44",
  storageBucket: "rentme-98a44.appspot.com",
  messagingSenderId: "224217777895",
  appId: "1:224217777895:web:e579d834f6524d14c60442",
  measurementId: "G-YE7R6DCXJY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
