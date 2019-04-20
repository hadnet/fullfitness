import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

firebase.initializeApp({
  apiKey: 'AIzaSyBMVOYAEKCD990jje19-LjiZeNvkJpchqo',
  authDomain: 'fullfitness-proj.firebaseapp.com',
  databaseURL: 'https://fullfitness-proj.firebaseio.com',
  projectId: 'fullfitness-proj',
  storageBucket: 'fullfitness-proj.appspot.com',
  messagingSenderId: '783007608775'
});

export default firebase;
