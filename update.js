import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase, ref, onValue, set, push } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js';



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
    document.getElementById("userName2").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").src = userProfilePicture;
    document.getElementById("userProfilePicture1").src = userProfilePicture;
    document.getElementById("userProfilePicture2").src = userProfilePicture;
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
  document.getElementById("userName2").textContent = "";
  document.getElementById("userEmail").textContent = "";
  document.getElementById("userProfilePicture").src = "";
  document.getElementById("userProfilePicture1").src = "";
  document.getElementById("userProfilePicture2").src = "";
}

document.getElementById("logout-btn").addEventListener("click", logout);
document.getElementById("logout-btn-1").addEventListener("click", logout);

document.getElementById('post-status').addEventListener('click', function() {
  var statusVN = document.getElementById('statusVN').value;
  var statusEng = document.getElementById('statusEng').value;
  var user = auth.currentUser;
  var uid = user.uid;

  console.log("uid: ", uid); 
  
  const statusRef = ref(getDatabase(app), 'statuses');
  const newStatusRef = push(statusRef);

  console.log("newStatusRef.key: ", newStatusRef.key);

  // Get current date and time
  const currentDate = new Date();
  const timestamp = currentDate.getTime();

  // Use set method on the new child reference
  set(newStatusRef, {
    uid: uid,
    statusVN: statusVN,
    statusEng: statusEng,
    timestamp: timestamp
  });

  document.getElementById('statusVN').value = '';
  document.getElementById('statusEng').value = '';
});
