import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDKRGBp_yXuo4emwTZgsX-mda4bh0EFdaQ",
    authDomain: "crud-d3aad.firebaseapp.com",
    projectId: "crud-d3aad",
    storageBucket: "crud-d3aad.appspot.com",
    messagingSenderId: "863726952452",
    appId: "1:863726952452:web:9b11e00c060a1874711551"
}

export const firebaseapp = firebase.initializeApp(firebaseConfig)