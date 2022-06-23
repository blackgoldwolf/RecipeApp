import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCkaoxdFL-1Q8hDuaCAdvGxjvOheuDBicg",
  authDomain: "react-recipe-app-6ad2e.firebaseapp.com",
  projectId: "react-recipe-app-6ad2e",
  storageBucket: "react-recipe-app-6ad2e.appspot.com",
  messagingSenderId: "613459567201",
  appId: "1:613459567201:web:0ccfa3dac690d1b9fe4020",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }