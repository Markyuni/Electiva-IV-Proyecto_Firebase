import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getFirestore, collection, getDocs, doc, deleteDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyALGgHtMVtVpaEdUKATDmZZL9IB8tYir78",
    authDomain: "e4-proyecto.firebaseapp.com",
    projectId: "e4-proyecto",
    storageBucket: "e4-proyecto.appspot.com",
    messagingSenderId: "596067738180",
    appId: "1:596067738180:web:81ad107ca1e1d765a29211",
    measurementId: "G-NR3M1MR5DE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db, doc, setDoc, getDocs, collection, deleteDoc, updateDoc };
