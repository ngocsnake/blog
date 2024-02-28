// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "next-blog-4943c.firebaseapp.com",
  projectId: "next-blog-4943c",
  storageBucket: "next-blog-4943c.appspot.com",
  messagingSenderId: "304827532695",
  appId: "1:304827532695:web:3be6031aee9cbea73e70d2",
  measurementId: "G-FBFVS3EGZJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);