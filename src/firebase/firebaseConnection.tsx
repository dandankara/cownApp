import firebase from 'firebase/app'

import 'firebase/database '

const firebaseConfig = {
  apiKey: 'AIzaSyCcgAiujCZHhAHauvOVejUjgpDMOubItTs',
  authDomain: 'cow-app-auth.firebaseapp.com',
  databaseURL: 'https://cow-app-auth-default-rtdb.firebaseio.com',
  projectId: 'cow-app-auth',
  storageBucket: 'cow-app-auth.appspot.com',
  messagingSenderId: '737658723777',
  appId: '1:737658723777:web:c51c50b03fa7322815a340'
}

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase