// import { seedDatabase } from '../seed'

const config = {
  apiKey: "AIzaSyDJvIzRuhiX2QZJfv5PnP0xGPWrPMV3_b0",
  authDomain: "instagram-clone-ca49c.firebaseapp.com",
  projectId: "instagram-clone-ca49c",
  storageBucket: "instagram-clone-ca49c.appspot.com",
  messagingSenderId: "101092388798",
  appId: "1:101092388798:web:0a295fba62407aeedd13ef",
  measurementId: "G-ZW6768LDYL"
}

const firebase = window.firebase.initializeApp(config)
const { FieldValue } = window.firebase.firestore

// seedDatabase(firebase)

export { firebase, FieldValue }