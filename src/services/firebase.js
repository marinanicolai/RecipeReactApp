import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyC8AkALtu14DDS-zFr_Qc9qfK9HvroDIsc",
  authDomain: "webapp-5c0f9.firebaseapp.com",
  databaseURL: "https://webapp-5c0f9.firebaseio.com",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
