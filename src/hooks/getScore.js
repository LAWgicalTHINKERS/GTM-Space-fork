import { firestore } from "../firebase/init.js";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

// Function to get top 10 user scores from Firestore
export async function getUserScores() {
  const scoresCollection = collection(firestore, 'userScores');
  const scoresQuery = query(scoresCollection, orderBy('gameScore', 'desc'), limit(10));
  const scoresSnapshot = await getDocs(scoresQuery);
  
  const userScores = [];
  scoresSnapshot.forEach((doc) => {
    userScores.push(doc.data());
  });
  
  return userScores;
}
