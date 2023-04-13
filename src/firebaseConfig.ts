import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPZ3YKtlMPuGVIoLDQbHzV4SRotlLwjTQ",

  authDomain: "codenames-c3e59.firebaseapp.com",

  projectId: "codenames-c3e59",

  storageBucket: "codenames-c3e59.appspot.com",

  messagingSenderId: "780036746915",

  appId: "1:780036746915:web:c8be5d21800d2f83189916",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
