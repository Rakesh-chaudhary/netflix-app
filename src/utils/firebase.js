// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbCTxRlZFXjuhydD0u0qphVpg-TpgmMFU",
  authDomain: "netflixgpt-f45ee.firebaseapp.com",
  projectId: "netflixgpt-f45ee",
  storageBucket: "netflixgpt-f45ee.appspot.com",
  messagingSenderId: "860950683703",
  appId: "1:860950683703:web:33256d0648779acffadfb2",
  measurementId: "G-519WLYD95Y"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
