import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2h59WkXw_fRsHwYpY8AqCOtgoNouj0To",
  authDomain: "react-native-signal-clon-7852c.firebaseapp.com",
  projectId: "react-native-signal-clon-7852c",
  storageBucket: "react-native-signal-clon-7852c.appspot.com",
  messagingSenderId: "315682105896",
  appId: "1:315682105896:web:4be675b4894068543f631d",
  measurementId: "G-3RVJYESJC6",
};

let app;

if (firebase.apps.length == 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
