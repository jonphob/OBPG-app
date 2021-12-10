import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyGjhXm_Hie8Zv5_XOA82hU7AuksN9l0c",
  authDomain: "obpg-app.firebaseapp.com",
  projectId: "obpg-app",
  storageBucket: "obpg-app.appspot.com",
  messagingSenderId: "130951808681",
  appId: "1:130951808681:web:2d6894969c853bbfca4bb8",
  measurementId: "G-YQRVNEED1N"
};

// initilise firebase
firebase.initializeApp(firebaseConfig)

// initilise services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }