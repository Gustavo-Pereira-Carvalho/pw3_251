import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAmq1aiuD58UQXTQXNPmjiWxPZL8AK51Oc",
    authDomain: "etec-112.firebaseapp.com",
    projectId: "etec-112",
    storageBucket: "etec-112.firebasestorage.app",
    messagingSenderId: "343776207153",
    appId: "1:343776207153:web:7f78f736c9e57fd0af5010"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app);
