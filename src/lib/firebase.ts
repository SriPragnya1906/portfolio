import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCpYh1YjXrdYa-ETM_l7BJlyVG9Ca0cB9s",
  authDomain: "portfolio-c2676.firebaseapp.com",
  projectId: "portfolio-c2676",
  storageBucket: "portfolio-c2676.firebasestorage.app",
  messagingSenderId: "635652036390",
  appId: "1:635652036390:web:1f691400ba64177b9e53e7",
  measurementId: "G-DV2GQ85T13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics safely (only runs in browser environment)
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((yes) => yes && (analytics = getAnalytics(app)));
}

export { app, analytics };
