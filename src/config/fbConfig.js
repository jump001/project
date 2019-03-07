import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAioVf83IMggQcADyk73RlmjSFyYPw2xak",
  authDomain: "tracking-ya.firebaseapp.com",
  databaseURL: "https://tracking-ya.firebaseio.com",
  projectId: "tracking-ya",
  storageBucket: "tracking-ya.appspot.com",
  messagingSenderId: "180273401549"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 