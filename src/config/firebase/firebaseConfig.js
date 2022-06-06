// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";






// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ6CvFGGIQiTVGZqbr-DZlnsbkSEmS0ZA",
  authDomain: "login-sign-up-56613.firebaseapp.com",
  projectId: "login-sign-up-56613",
  storageBucket: "login-sign-up-56613.appspot.com",
  messagingSenderId: "703511539174",
  appId: "1:703511539174:web:ff63e0bfc60d7550bb3a27",
  measurementId: "G-W52B729GRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;