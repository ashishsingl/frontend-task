import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8U-JKbj8rwD44vtKmTxSpVH2yz4UWUdc",
  authDomain: "frontend-assignment-8920c.firebaseapp.com",
  projectId: "frontend-assignment-8920c",
  storageBucket: "frontend-assignment-8920c.appspot.com",
  messagingSenderId: "801461859840",
  appId: "1:801461859840:web:36568299b5aad6720ccae5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
