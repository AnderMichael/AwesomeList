// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg2HgsApzqOpaRKUFl1VfiOIGoH5vIpQs",
  authDomain: "awesomelist-be8fa.firebaseapp.com",
  projectId: "awesomelist-be8fa",
  storageBucket: "awesomelist-be8fa.appspot.com",
  messagingSenderId: "47709857401",
  appId: "1:47709857401:web:ab5564ded53c7aa6e7d6a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);