import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDP1dP2ZbXpxo7Q3zMqOJnXcqnsxKi2Rk",
  authDomain: "codenames-59151.firebaseapp.com",
  projectId: "codenames-59151",
  storageBucket: "codenames-59151.appspot.com",
  messagingSenderId: "992655622163",
  appId: "1:992655622163:web:43c8f3cafa1d441f2dffe6",
  measurementId: "G-6P2TVEKQ1H",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
