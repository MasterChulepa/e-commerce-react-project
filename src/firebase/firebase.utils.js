import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBI4yW900YLpSbOEnqhT_0EQvZzsO94GEw",
    authDomain: "e-commerce-db-1b404.firebaseapp.com",
    projectId: "e-commerce-db-1b404",
    storageBucket: "e-commerce-db-1b404.appspot.com",
    messagingSenderId: "82777356947",
    appId: "1:82777356947:web:8030b2b8a4c40e0fe16b66",
    measurementId: "G-XNQKK8WVBR"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export const createUserProfileDocument = async (userAuth, additionalInfo) => {
    if (!userAuth) return;
    const docRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await docRef.get();
    console.log(snapShot);
    if (!snapShot.exists){
        const {displayName, email} = userAuth;
        const createAt = new Date();
        try{
            await docRef.set({displayName, email, createAt, ...additionalInfo})
        }catch(err){
            console.log('errroe creating user', err.message);
        }
    }
    return docRef;
}
export default firebase;