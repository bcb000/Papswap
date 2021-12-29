import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDf9zHddcS_FCMsyzIYaZSA8Lb5T9eJfSY",
  authDomain: "papswap-83c5b.firebaseapp.com",
  projectId: "papswap-83c5b",
  storageBucket: "papswap-83c5b.appspot.com",
  messagingSenderId: "273457455853",
  appId: "1:273457455853:web:c440c99d139ad5232022e4",
  measurementId: "G-PD1TYJM1FY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);