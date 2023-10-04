// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvg1zy9EdgTlWc-UhiWD4H1__-x0ptV6I",
  authDomain: "my-project-584ac.firebaseapp.com",
  projectId: "my-project-584ac",
  storageBucket: "my-project-584ac.appspot.com",
  messagingSenderId: "620146331430",
  appId: "1:620146331430:web:da62355094929976ecbbe7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);