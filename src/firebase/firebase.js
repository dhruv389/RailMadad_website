import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAvPL0E9y5OQD5xsun212IqPO38PoDFNs0",
    authDomain: "complaint-management-sys-87685.firebaseapp.com",
    projectId: "complaint-management-sys-87685",
    storageBucket: "complaint-management-sys-87685.appspot.com",
    messagingSenderId: "524004505175",
    appId: "1:524004505175:web:32be91e3b5e768891dd512",
    measurementId: "G-K0W7P2VWNW"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
// const firebaseConfig = {
//   apiKey:process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId:process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID
// };