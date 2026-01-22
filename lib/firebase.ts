// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZNjhf1SvDv_XauA8Q4HHAHQQqrOWLn7s",
  authDomain: "respire-lyf.firebaseapp.com",
  databaseURL: "https://respire-lyf-default-rtdb.firebaseio.com",
  projectId: "respire-lyf",
  storageBucket: "respire-lyf.firebasestorage.app",
  messagingSenderId: "994863023305",
  appId: "1:994863023305:web:156330eb62ed7fe255f918",
  measurementId: "G-8C50SFZF8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser environment)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };
