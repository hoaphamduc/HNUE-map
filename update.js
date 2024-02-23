import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase, ref, onValue, set, push } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js';

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
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

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

document.getElementById('post-status').addEventListener('click', async function() {
  try {
    // Get current user
    const user = auth.currentUser;
    const uid = user.uid;

    // Create a new status reference
    const statusRef = ref(getDatabase(app), 'statuses');
    const newStatusRef = push(statusRef);

    // Initialize variables to save
    let status, address, location, imageURL;

    // Collect status content
    const statusVN = document.getElementById('statusVN').value;
    const statusEng = document.getElementById('statusEng').value;
    status = isDisplayedBlock(document.getElementById('statusVN')) ? statusVN : statusEng;

    // Collect address and location (optional)
    const addressVN = document.getElementById('text-address-vn').value;
    const addressEng = document.getElementById('text-address-eng').value;
    const locationVN = document.getElementById('text-location-vn').value;
    const locationEng = document.getElementById('text-location-eng').value;

    if (isDisplayedBlock(document.getElementById('text-address-vn'))) {
      address = addressVN;
    } else {
      address = addressEng;
    }
    console.log('addvn', addressVN);
    console.log('adden', addressEng);

    console.log('add', address);

    if (isDisplayedBlock(document.getElementById('text-location-vn'))) {
      location = locationVN;
    } else {
      location = locationEng;
    }
    
    // Handle image upload (if any)
    const imageInput = document.getElementById('imageInput');
    if (imageInput.files.length > 0) {
      const imageFile = imageInput.files[0];

      // Create a unique timestamp for the image file name
      const timestamp = new Date().getTime();

      // Create a unique path for the image
      const imagePath = `images/${newStatusRef.key}/${timestamp}_${imageFile.name}`;

      // Create storage reference with the new path
      const storageReference = storageRef(storage, imagePath);

      // Upload the file to storage
      const uploadTask = uploadBytes(storageReference, imageFile);

      // Get the download URL directly from the storage reference
      imageURL = await uploadTask.then(() => getDownloadURL(storageReference));
    }
    
    // Save status data to the database
    const timestamp = new Date().getTime();
    const dataToSave = {
      uid,
      timestamp,
    };

    if (status) dataToSave.status = status;
    if (address) dataToSave.address = address;
    if (location) dataToSave.location = location;
    if (imageURL) dataToSave.imageURL = imageURL;

    if (Object.keys(dataToSave).length > 2) { // At least uid and timestamp are required
      await set(newStatusRef, dataToSave);

      // Display success message if status is updated successfully
      alert('Status posted successfully!');
    }
  } catch (error) {
    // Handle errors
    console.error('Error saving status:', error);
    alert('An error occurred while saving your status. Please try again later.');
  }
});

    
// Function to check if an element is displayed as block
function isDisplayedBlock(element) {
  return element.style.display === 'block';
}