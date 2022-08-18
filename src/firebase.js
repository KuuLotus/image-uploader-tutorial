// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYni_50mtgPNovwlaVrajQzLmdCN3eswI",
  authDomain: "image-uploader-53a2b.firebaseapp.com",
  projectId: "image-uploader-53a2b",
  storageBucket: "image-uploader-53a2b.appspot.com",
  messagingSenderId: "35846622785",
  appId: "1:35846622785:web:60e67ce6df6779dbad40c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
