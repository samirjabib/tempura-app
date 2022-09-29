import { initializeApp } from 'firebase/app'
import { 
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBm8Xi27qCSLedHH-gadbDgNOAYoSqkECE",
    authDomain: "tempura-30c2d.firebaseapp.com",
    projectId: "tempura-30c2d",
    storageBucket: "tempura-30c2d.appspot.com",
    messagingSenderId: "695831529633",
    appId: "1:695831529633:web:c192809d11726e1f7cc8e0"
  };
  
  // Initialize Firebase

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)



const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});


export const auth = getAuth();
console.log(auth)

export const signInWithGooglePopup = () => 
  signInWithPopup(auth, googleProvider)




export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return; 


  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => 
  onAuthStateChanged(auth, callback);


export const getCurrentUser = () => {
  return new Promise( (resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    )
  })
}