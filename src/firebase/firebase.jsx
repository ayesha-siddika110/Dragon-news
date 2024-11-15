// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm2LUZr9v4BjkhiL7ig2e8krubVQWHI8I",
  authDomain: "dragon-news-6ab4e.firebaseapp.com",
  projectId: "dragon-news-6ab4e",
  storageBucket: "dragon-news-6ab4e.firebasestorage.app",
  messagingSenderId: "567878124968",
  appId: "1:567878124968:web:50d12dfd8075638be6099d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default auth;