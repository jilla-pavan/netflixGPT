// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOsia2j8oX7HL-xxBVVo1LEoVZq6qkUJA",
  authDomain: "netflix-gpt-685e7.firebaseapp.com",
  projectId: "netflix-gpt-685e7",
  storageBucket: "netflix-gpt-685e7.appspot.com",
  messagingSenderId: "648568187667",
  appId: "1:648568187667:web:f89f25423dec66875448e6",
  measurementId: "G-KVGBPNKEFE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
