import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
const _0x34a23d=_0x5abd;function _0x5abd(_0x19d45f,_0x189364){const _0x2fae36=_0x2fae();return _0x5abd=function(_0x5abd36,_0x2c8a1e){_0x5abd36=_0x5abd36-0x172;let _0x5dac42=_0x2fae36[_0x5abd36];return _0x5dac42;},_0x5abd(_0x19d45f,_0x189364);}(function(_0x5a1125,_0x5eb62a){const _0x181d7b=_0x5abd,_0x426777=_0x5a1125();while(!![]){try{const _0x250367=parseInt(_0x181d7b(0x176))/0x1*(-parseInt(_0x181d7b(0x182))/0x2)+parseInt(_0x181d7b(0x17c))/0x3+-parseInt(_0x181d7b(0x178))/0x4*(parseInt(_0x181d7b(0x17d))/0x5)+-parseInt(_0x181d7b(0x179))/0x6*(-parseInt(_0x181d7b(0x180))/0x7)+parseInt(_0x181d7b(0x174))/0x8+-parseInt(_0x181d7b(0x17b))/0x9*(parseInt(_0x181d7b(0x175))/0xa)+-parseInt(_0x181d7b(0x172))/0xb*(-parseInt(_0x181d7b(0x17f))/0xc);if(_0x250367===_0x5eb62a)break;else _0x426777['push'](_0x426777['shift']());}catch(_0x44df3d){_0x426777['push'](_0x426777['shift']());}}}(_0x2fae,0x930d7));const firebaseConfig={'apiKey':_0x34a23d(0x17e),'authDomain':_0x34a23d(0x181),'projectId':_0x34a23d(0x177),'storageBucket':_0x34a23d(0x17a),'messagingSenderId':'18471638048','appId':_0x34a23d(0x173),'measurementId':'G-Q43VE2X9Z1'};function _0x2fae(){const _0x3893ee=['252672UeAZmY','71650rLeKHM','4349FECztj','hnue-map-42e10','13640xQtrHN','98898SnPTcT','hnue-map-42e10.appspot.com','1233xKFzZF','1011468MeVWHS','805ofwKwv','AIzaSyCRD_Jsz7rBhGf2B-oZ4wniLAp8QrglFTQ','1188MvUCcc','224oqBjpT','hnue-map-42e10.firebaseapp.com','124frlfFo','167376ImQsiP','1:18471638048:web:8f538cd825d504c5e49845'];_0x2fae=function(){return _0x3893ee;};return _0x2fae();}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();
const googleLogin =  document.getElementById("google-login-btn");
const loginWithGoogle =  document.getElementById("login-with-google");

googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
        window.location.href = "index.html";
    }).catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
    });
})

loginWithGoogle.addEventListener("click", function(){
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
        window.location.href = "index.html";
    }).catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
    });
})

function checkAuthAndRedirect() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            window.location.href = "index.html";
        } else {
        }
    });
}

document.addEventListener("DOMContentLoaded", checkAuthAndRedirect);