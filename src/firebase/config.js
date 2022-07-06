import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCc79w9hLJXDBRCbnfo3SdTpu4H5UiCEcY',
	authDomain: 'jdeli-21773.firebaseapp.com',
	projectId: 'jdeli-21773',
	storageBucket: 'jdeli-21773.appspot.com',
	messagingSenderId: '490015585002',
	appId: '1:490015585002:web:e75db0f8f7d1f0253a1d93',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
