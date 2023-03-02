import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuJJY62gonPzphHI0kfMRM4eGqR4_yCmc",
  authDomain: "chkout-c3709.firebaseapp.com",
  projectId: "chkout-c3709",
  storageBucket: "chkout-c3709.appspot.com",
  messagingSenderId: "544321998108",
  appId: "1:544321998108:web:b37f1acf427433fef97ed9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
