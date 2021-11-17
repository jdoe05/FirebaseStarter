// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYb24Fyvl9-CbyfUf-ggLZfn0pl7r6wU4",
  authDomain: "gettingstartedwithfireba-ce891.firebaseapp.com",
  projectId: "gettingstartedwithfireba-ce891",
  storageBucket: "gettingstartedwithfireba-ce891.appspot.com",
  messagingSenderId: "934014757956",
  appId: "1:934014757956:web:cf4b96f440aba277226011",
  measurementId: "G-T62740WEZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)