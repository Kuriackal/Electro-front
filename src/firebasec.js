// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCJ9JMV9Kn8gsQ-1D7uWcsjRK7ZbvFoX2E",
    authDomain: "ecommerce-6f952.firebaseapp.com",
    projectId: "ecommerce-6f952",
    storageBucket: "ecommerce-6f952.appspot.com",
    messagingSenderId: "332375442921",
    appId: "1:332375442921:web:f86f5f2942b9f639b93778"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


 export const auth=firebase.auth()


  export const googleAuthProvider= new firebase.auth.GoogleAuthProvider();

  // export {auth,googleAuthProvider}
 