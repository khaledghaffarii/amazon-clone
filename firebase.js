import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyC5uKNO9PUtTYkgAv4dnSipcVSXfJ9CxDc",
//   authDomain: "amzn-2.firebaseapp.com",
//   projectId: "amzn-2",
//   storageBucket: "amzn-2.appspot.com",
//   messagingSenderId: "110974081826",
//   appId: "1:110974081826:web:a8ced9ca8f01ac7d77637b",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCbDvCUPvE245Es-sOd0QN9P6cPKNJ-BWQ",
  authDomain: "amzn-2-741c9.firebaseapp.com",
  projectId: "amzn-2-741c9",
  storageBucket: "amzn-2-741c9.appspot.com",
  messagingSenderId: "1049431287652",
  appId: "1:1049431287652:web:b077acb121b71d6fb53c71",
  measurementId: "G-2X834N61FP",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
