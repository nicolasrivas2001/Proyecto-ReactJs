// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGE4Voyxi3PzMbvLyMQ1jqrWJZmo9o464",
  authDomain: "proyecto-react-4bba3.firebaseapp.com",
  projectId: "proyecto-react-4bba3",
  storageBucket: "proyecto-react-4bba3.appspot.com",
  messagingSenderId: "61359617345",
  appId: "1:61359617345:web:e58429e22d78830b141dc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;