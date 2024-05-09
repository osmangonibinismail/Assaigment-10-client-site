// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQYaCr24jNyn9nTtYbWedNcFO2jafaTnI",
  authDomain: "assaigment-10-client-site.firebaseapp.com",
  projectId: "assaigment-10-client-site",
  storageBucket: "assaigment-10-client-site.appspot.com",
  messagingSenderId: "658584527251",
  appId: "1:658584527251:web:85d2f29efc92d2cf6e8866"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;