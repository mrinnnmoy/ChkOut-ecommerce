import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBQKGPAgey5-YdhCoDMWF9wrjx8KieYbc",
  authDomain: "chkout-5a2e1.firebaseapp.com",
  projectId: "chkout-5a2e1",
  storageBucket: "chkout-5a2e1.appspot.com",
  messagingSenderId: "120634958773",
  appId: "1:120634958773:web:c832e150352808b3a1effc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
