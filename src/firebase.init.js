// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClSGznIrroP2QgdtKTp1UdDAyrquNphwk",
    authDomain: "home-page-57db8.firebaseapp.com",
    projectId: "home-page-57db8",
    storageBucket: "home-page-57db8.appspot.com",
    messagingSenderId: "151114186306",
    appId: "1:151114186306:web:5b101c063e13e4a29eb7db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;