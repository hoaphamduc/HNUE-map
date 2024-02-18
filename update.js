import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCRD_Jsz7rBhGf2B-oZ4wniLAp8QrglFTQ",
    authDomain: "hnue-map-42e10.firebaseapp.com",
    projectId: "hnue-map-42e10",
    storageBucket: "hnue-map-42e10.appspot.com",
    messagingSenderId: "18471638048",
    appId: "1:18471638048:web:8f538cd825d504c5e49845",
    measurementId: "G-Q43VE2X9Z1"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

const user = auth.currentUser;

function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;

    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").src = userProfilePicture;
  }

// Observer for authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
      updateUserProfile(user);
    } else {
      clearUserProfile();
      window.location.href = "/index.html";
    }
});

// Function to logout
function logout() {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        clearUserProfile();
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  }

  // Function to clear user profile information
  function clearUserProfile() {
    document.getElementById("userName").textContent = "";
    document.getElementById("userEmail").textContent = "";
    document.getElementById("userProfilePicture").src = "";
  }

  document.getElementById("logout-btn").addEventListener("click", logout);
  document.getElementById("logout-btn-1").addEventListener("click", logout);

