import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDyJVaZ9__gHXPw-HICgDRV_A56FdzXWtU',
	authDomain: 'project-manager-6793d.firebaseapp.com',
	projectId: 'project-manager-6793d',
	storageBucket: 'project-manager-6793d.appspot.com',
	messagingSenderId: '509426705674',
	appId: '1:509426705674:web:4962e0aec96678b73c46f3',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
