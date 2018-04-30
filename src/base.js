import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAhintolWGhcp2tOeYXLssce7GXYf8k0X4",
  authDomain: "catch-of-the-day-kristofer.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-kristofer.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
