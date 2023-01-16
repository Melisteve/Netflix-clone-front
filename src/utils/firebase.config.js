import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDSB8NIC6bEYrKj7VxKktcAmvmGdHuezc",
  authDomain: "react-netflix-clone-cc8bf.firebaseapp.com",
  projectId: "react-netflix-clone-cc8bf",
  storageBucket: "react-netflix-clone-cc8bf.appspot.com",
  messagingSenderId: "1049146123987",
  appId: "1:1049146123987:web:80199561ee895c698ed626",
  measurementId: "G-G7CKSXK7XT",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
