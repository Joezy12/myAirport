import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw1c-uhksRjPuqb4SYOjyXh4R_a_7dMlc",
  authDomain: "realairport.firebaseapp.com",
  projectId: "realairport",
  storageBucket: "realairport.firebasestorage.app",
  messagingSenderId: "1081224399324",
  appId: "1:1081224399324:web:a241408e156fd8f387e719",
  measurementId: "G-W45SE0BL70"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const storage = getStorage(app)