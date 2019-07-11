import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: 'AIzaSyDtciQXj-Cw9CftMd6jcE0NXrtlNVOtk-8',
    authDomain: 'react30-9ebe0.firebaseapp.com',
    databaseURL: 'https://react30-9ebe0.firebaseio.com',
    projectId: 'react30-9ebe0',
    storageBucket: '',
    messagingSenderId: '146597253385',
    appId: '1:146597253385:web:645ece10fd246b02',
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({promt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
