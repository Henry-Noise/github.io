import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {

  apiKey: "AIzaSyDh_vZP_lS5VspuMo2F3qRVfaT0tGBrTEo",
  authDomain: "myproject-793b7.firebaseapp.com",
  projectId: "myproject-793b7",
  storageBucket: "myproject-793b7.appspot.com",
  messagingSenderId: "328085701313",
  appId: "1:328085701313:web:4070c0c4d2ec1805f30a40",
  measurementId: "G-FP65PP5VPS"

  // apiKey: "AIzaSyA8ZyVOHrJiWdDuZp7g1IS9TmSfyYaD_XY",
  // authDomain: "social-network-68ab1.firebaseapp.com",
  // projectId: "myproject-793b7",
  // storageBucket: "social-network-68ab1.appspot.com",
  // messagingSenderId: "690156407214",
  // appId: "1:690156407214:web:b6bcec2aa8d653a339e03f",
  // measurementId: "G-P8RD7SV68D",

  // apiKey: "AIzaSyC8yWcLoFfOWK4hBDDnGLTIoAjhy4a_qxw",
  // authDomain: "social-network-826a9.firebaseapp.com",
  // databaseURL: "https://social-network-826a9-default-rtdb.firebaseio.com",
  // projectId: "social-network-826a9",
  // storageBucket: "social-network-826a9.appspot.com",
  // messagingSenderId: "795485769634",
  // appId: "1:795485769634:web:10fcfc3870e39037842cfb",
  // measurementId: "G-MDVM9Q2D5H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase(app);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDh_vZP_lS5VspuMo2F3qRVfaT0tGBrTEo",
//   authDomain: "myproject-793b7.firebaseapp.com",
//   projectId: "myproject-793b7",
//   storageBucket: "myproject-793b7.appspot.com",
//   messagingSenderId: "328085701313",
//   appId: "1:328085701313:web:4070c0c4d2ec1805f30a40",
//   measurementId: "G-FP65PP5VPS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
