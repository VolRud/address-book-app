import firebase from 'firebase/app';
import 'firebase/firestore';


const config = {
  apiKey: "AIzaSyBLORoh4FkiuolrscEBbPN1y2dxfAG5pbk",
  authDomain: "address-book-b79c8.firebaseapp.com",
  databaseURL: "https://address-book-b79c8.firebaseio.com",
  projectId: "address-book-b79c8",
  storageBucket: "address-book-b79c8.appspot.com",
  messagingSenderId: "958910145696"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
