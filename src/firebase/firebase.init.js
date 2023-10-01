// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXLnedx8zJwn4wY7MjlB2ygfgg9ISlqF8",
  authDomain: "formregister-2cd4a.firebaseapp.com",
  projectId: "formregister-2cd4a",
  storageBucket: "formregister-2cd4a.appspot.com",
  messagingSenderId: "79550233004",
  appId: "1:79550233004:web:392f00b8f591f512c8a209"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
