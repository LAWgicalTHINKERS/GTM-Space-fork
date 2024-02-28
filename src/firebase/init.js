import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDNT6boX6SzM60b4hrigplhDiwL8gpVNvc",
  authDomain: "gtm-space.firebaseapp.com",
  projectId: "gtm-space",
  storageBucket: "gtm-space.appspot.com",
  messagingSenderId:"543339488272",
  appId: "1:543339488272:web:556ea799a767c742f51695",
  measurementId: "G-NYV9H41HB1",
  databaseURL: `https://gtm-space.firebaseio.com`,
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
