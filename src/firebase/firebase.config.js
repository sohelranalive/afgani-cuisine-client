// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_Hr-BNDt6n1qE0oX0cS8i7vYwRk8h1g0",
    authDomain: "b7a10-chef-recipe-hunter-49b6e.firebaseapp.com",
    projectId: "b7a10-chef-recipe-hunter-49b6e",
    storageBucket: "b7a10-chef-recipe-hunter-49b6e.appspot.com",
    messagingSenderId: "127737718510",
    appId: "1:127737718510:web:11de36f5eb2953aadef5ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;