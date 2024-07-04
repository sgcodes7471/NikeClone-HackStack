import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyArly7PKDXE2NzWJdzDwjogviNc4wENnZc",  
    authDomain: "nikeclone-reacthackstack.firebaseapp.com",  
    projectId: "nikeclone-reacthackstack", 
    storageBucket: "nikeclone-reacthackstack.appspot.com", 
    messagingSenderId: "891722777934",
    appId: "1:891722777934:web:2de76cf3d7c0aeb1010a1f",
    measurementId: "G-S1VT6W5ECC"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)

export {auth,db}

  
