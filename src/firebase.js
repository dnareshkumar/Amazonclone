import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBlWzzGN_Ybhu2dLaZUNzT0a7gbPHDsUm8",
	authDomain: "eclone-11807.firebaseapp.com",
	projectId: "eclone-11807",
	storageBucket: "eclone-11807.appspot.com",
	messagingSenderId: "417224859241",
	appId: "1:417224859241:web:917e0d554e47c412470cf8",
	measurementId: "G-KBB52GKF15"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
