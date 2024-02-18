import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {

  apiKey: "AIzaSyDITzzyr78xqNwV4f9jnsFJvXYdYoU-Tno",
  authDomain: "gtmspace-998a6.firebaseapp.com",
  projectId: "gtmspace-998a6",
  storageBucket: "gtmspace-998a6.appspot.com",
  messagingSenderId:"1088679035978",
  appId: "1:1088679035978:web:5231d2116a06a1eb1d52b3",
  databaseURL: `https://gtmspace-998a6.firebaseio.com`,
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
