import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBB8jVUBgOoG8aYlztRB6-5pgwif13FX5E",
  authDomain: "chkout-5cec9.firebaseapp.com",
  projectId: "chkout-5cec9",
  storageBucket: "chkout-5cec9.appspot.com",
  messagingSenderId: "875896140231",
  appId: "1:875896140231:web:6b36aeebd299f2114a29e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
