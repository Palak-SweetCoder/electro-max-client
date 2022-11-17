// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCCpuC7yhf9lWbHJsIKExyzEAtCXyz0s5s',
    authDomain: 'electro-max.firebaseapp.com',
    projectId: 'electro-max',
    storageBucket: 'electro-max.appspot.com',
    messagingSenderId: '421630770490',
    appId: '1:421630770490:web:5d841f70a70ea5c0c8e403',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
