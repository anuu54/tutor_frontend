import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAHtw8vECcPfPbjYEhBfaxwG4VGiyFtAPE",
  authDomain: "tutor-ai-7e78f.firebaseapp.com",
  projectId: "tutor-ai-7e78f",
  storageBucket: "tutor-ai-7e78f.firebasestorage.app",
  messagingSenderId: "848175455985",
  appId: "1:848175455985:web:61e8dce8554dcb1a7e9350"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign up function
export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Sign in function
export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Sign out function
export const logOut = () => {
  return signOut(auth);
};

export default auth;