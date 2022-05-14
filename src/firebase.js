// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzCm825EAyr3PhhbzccZnSLD2g9y4ga74",
  authDomain: "movie-booking-auth.firebaseapp.com",
  projectId: "movie-booking-auth",
  storageBucket: "movie-booking-auth.appspot.com",
  messagingSenderId: "292926312496",
  appId: "1:292926312496:web:04fed38ea9f6d63af49df5",
  measurementId: "G-NJZLKH504R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
