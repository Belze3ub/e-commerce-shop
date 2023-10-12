import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore';

interface User {
  displayName: string | null,
  email: string | null,
  uid: string;
}

const firebaseConfig = {
  apiKey: 'AIzaSyACoexqDiQO48o-CSaeY7f1j2vSram0AnQ',
  authDomain: 'e-commerce-shop-8b17b.firebaseapp.com',
  projectId: 'e-commerce-shop-8b17b',
  storageBucket: 'e-commerce-shop-8b17b.appspot.com',
  messagingSenderId: '780330209417',
  appId: '1:780330209417:web:5624794b96a3651ae47658',
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocument = async (userAuth: User) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  return userDocRef;
}