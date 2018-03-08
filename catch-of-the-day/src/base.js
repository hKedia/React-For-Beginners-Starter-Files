import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBHPHEULKIAbnxHuyBQZScEBszdpKbw0v4",
  authDomain: "catch-of-the-day-harsh-kedia.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-harsh-kedia.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;