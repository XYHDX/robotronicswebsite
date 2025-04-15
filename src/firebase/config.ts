import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAz00gGrASrv1_3Ky-iaV5AnAHqCspRkM",
  authDomain: "robotronics-eb7b7.firebaseapp.com",
  projectId: "robotronics-eb7b7",
  storageBucket: "robotronics-eb7b7.firebasestorage.app",
  messagingSenderId: "654799245324",
  appId: "1:654799245324:web:3f61ea702b4aa2ccfb5e29",
  measurementId: "G-RFJQZ9H978"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { auth, db, storage, analytics };
export default app;
