// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlJp-khdy-C0In_DGS0JAdu68rDosf9I0",
  authDomain: "task-manager-459fc.firebaseapp.com",
  projectId: "task-manager-459fc",
  storageBucket: "task-manager-459fc.firebasestorage.app",
  messagingSenderId: "1001977324541",
  appId: "1:1001977324541:web:3d5c4203734f5ba09aaf94",
  measurementId: "G-CFG4QEV0PP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);