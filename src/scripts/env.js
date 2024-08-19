
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCHTs83Ua_a4IFZVXFRN56VDbvj-2g6et4",
  authDomain: "cestasorganicasfloralize.firebaseapp.com",
  projectId: "cestasorganicasfloralize",
  storageBucket: "cestasorganicasfloralize.appspot.com",
  messagingSenderId: "1044085814207",
  appId: "1:1044085814207:web:4f8f5fcfcdd84270dd670a",
  measurementId: "G-ETRPC8HNB3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

