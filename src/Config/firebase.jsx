import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDldDLdmDPRJ9CS3NtgqbTI-8pjHugMW00",
  authDomain: "reactnativeapp-abaa3.firebaseapp.com",
  databaseURL: "https://reactnativeapp-abaa3-default-rtdb.firebaseio.com",
  projectId: "reactnativeapp-abaa3",
  storageBucket: "reactnativeapp-abaa3.appspot.com",
  messagingSenderId: "755278018066",
  appId: "1:755278018066:web:8c6c7fa23a258d1bbc0acb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { auth, db, storage, app };