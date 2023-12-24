// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getStorage, ref } from "firebase/storage";
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// if (typeof document !== "undefined") {
//   self.FIREBASE_APPCHECK_DEBUG_TOKEN = "17996a1f-5a1a-4120-8af7-f496bc88dfca";
  
//   const appCheck = initializeAppCheck(app, {
//     provider: new ReCaptchaV3Provider('6Lf7CI0oAAAAABJpzYkrUlujGkg3NBA_bRA0oUlo'),
  
//     // Optional argument. If true, the SDK automatically refreshes App Check
//     // tokens as needed.
//     isTokenAutoRefreshEnabled: true
//   });
// }

export const db = getFirestore(app);
const analytics = getAnalytics(app)
export const storage = getStorage()
