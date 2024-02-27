// Import and initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRD_Jsz7rBhGf2B-oZ4wniLAp8QrglFTQ",
    authDomain: "hnue-map-42e10.firebaseapp.com",
    projectId: "hnue-map-42e10",
    storageBucket: "hnue-map-42e10.appspot.com",
    messagingSenderId: "18471638048",
    appId: "1:18471638048:web:8f538cd825d504c5e49845",
    measurementId: "G-Q43VE2X9Z1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

const googleLogin =  document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
        window.location.href = "../index.html";
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
})

