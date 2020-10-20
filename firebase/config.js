import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAL-b10EgKyaXzdUs2E-jPOFE0Q7mEBNIk',
  authDomain: 'kiwitrade-27278.firebaseapp.com',
  databaseURL: 'https://kiwitrade-27278.firebaseio.com',
  projectId: 'kiwitrade-27278',
  storageBucket: 'kiwitrade-27278.appspot.com',
  messagingSenderId: '100158070249',
  appId: '1:100158070249:ios:539c1a5d664886778fbf78',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };