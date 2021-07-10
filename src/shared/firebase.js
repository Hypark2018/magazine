import firebase from "firebase/app";

// 사용할 것들을 전부 불러옵니다 :)
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAIXun8l6yXemDR7WevDJYBRS9XfOEyoZY",
  authDomain: "magazine-a4032.firebaseapp.com",
  projectId: "magazine-a4032",
  storageBucket: "magazine-a4032.appspot.com",
  messagingSenderId: "152586362370",
  appId: "1:152586362370:web:d066f0d886c06e9f8ad11b",
  measurementId: "G-XPRN8LRKZW"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();

export { auth, apiKey, firestore, storage, realtime };
