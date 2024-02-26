import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { get, ref, set, push, getDatabase } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js';

const _0x34a23d=_0x5abd;function _0x5abd(_0x19d45f,_0x189364){const _0x2fae36=_0x2fae();return _0x5abd=function(_0x5abd36,_0x2c8a1e){_0x5abd36=_0x5abd36-0x172;let _0x5dac42=_0x2fae36[_0x5abd36];return _0x5dac42;},_0x5abd(_0x19d45f,_0x189364);}(function(_0x5a1125,_0x5eb62a){const _0x181d7b=_0x5abd,_0x426777=_0x5a1125();while(!![]){try{const _0x250367=parseInt(_0x181d7b(0x176))/0x1*(-parseInt(_0x181d7b(0x182))/0x2)+parseInt(_0x181d7b(0x17c))/0x3+-parseInt(_0x181d7b(0x178))/0x4*(parseInt(_0x181d7b(0x17d))/0x5)+-parseInt(_0x181d7b(0x179))/0x6*(-parseInt(_0x181d7b(0x180))/0x7)+parseInt(_0x181d7b(0x174))/0x8+-parseInt(_0x181d7b(0x17b))/0x9*(parseInt(_0x181d7b(0x175))/0xa)+-parseInt(_0x181d7b(0x172))/0xb*(-parseInt(_0x181d7b(0x17f))/0xc);if(_0x250367===_0x5eb62a)break;else _0x426777['push'](_0x426777['shift']());}catch(_0x44df3d){_0x426777['push'](_0x426777['shift']());}}}(_0x2fae,0x930d7));const firebaseConfig={'apiKey':_0x34a23d(0x17e),'authDomain':_0x34a23d(0x181),'projectId':_0x34a23d(0x177),'storageBucket':_0x34a23d(0x17a),'messagingSenderId':'18471638048','appId':_0x34a23d(0x173),'measurementId':'G-Q43VE2X9Z1'};function _0x2fae(){const _0x3893ee=['252672UeAZmY','71650rLeKHM','4349FECztj','hnue-map-42e10','13640xQtrHN','98898SnPTcT','hnue-map-42e10.appspot.com','1233xKFzZF','1011468MeVWHS','805ofwKwv','AIzaSyCRD_Jsz7rBhGf2B-oZ4wniLAp8QrglFTQ','1188MvUCcc','224oqBjpT','hnue-map-42e10.firebaseapp.com','124frlfFo','167376ImQsiP','1:18471638048:web:8f538cd825d504c5e49845'];_0x2fae=function(){return _0x3893ee;};return _0x2fae();}

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
    window.location.href = "../login.html";
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

document.getElementById('post-status').addEventListener('click', async function() {
  try {
      // Get current user
      const user = auth.currentUser;
      const uid = user.uid;

      // Fetch user data
      const userRef = ref(getDatabase(app), `users/${uid}`);
      const userSnapshot = await get(userRef);
      const userData = userSnapshot.exists() ? userSnapshot.val() : {};

      // Check if the user can post (last post timestamp is more than a day ago)
      const canPost = await canUserPost(uid);

      if (!canPost) {
          alert('Bạn chỉ có thể đăng bài 1 lần mỗi 24h.');
          return;
      }

      // Create a new status reference
      const statusRef = ref(getDatabase(app), 'statuses');
      const newStatusRef = push(statusRef);

      // Initialize variables to save
      let status, address, location, imageURL;

      // Collect status content
      const statusVN = document.getElementById('statusVN').value;
      const statusEng = document.getElementById('statusEng').value;
      status = statusVN;
      if (isDisplayedBlock(document.getElementById('statusEng'))) {
          status = statusEng;
      }

      // Collect address and location (optional)
      const addressVN = document.getElementById('text-address-vn').value;
      const addressEng = document.getElementById('text-address-eng').value;
      const locationVN = document.getElementById('text-location-vn').value;
      const locationEng = document.getElementById('text-location-eng').value;

      address = addressVN;

      if (isDisplayedBlock(document.getElementById('text-address-eng'))) {
          address = addressEng;
      }

      location = locationEng;
      location = locationVN;

      // Check if image is selected
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
      } else {
          // Handle the case when no image is selected
          alert('Vui lòng chọn một ảnh để đăng bài.');
          return; // Stop execution if no image is selected
      }

      // Save status data to the database
      const timestamp = new Date().getTime();
      const dataToSave = {
          uid,
          postId: newStatusRef.key, // Include post ID
          timestamp,
          username: user.displayName || '', // Include username
          avatarURL: user.photoURL || '', // Include avatarURL
      };

      if (status) dataToSave.status = status;
      if (address) dataToSave.address = address;
      if (location) dataToSave.location = location;
      if (imageURL) dataToSave.imageURL = imageURL;

      await set(newStatusRef, dataToSave);

      // Display success message if status is updated successfully
      alert('Bạn đã đăng bài thành công!');
      loadPosts();
      document.getElementById('statusVN').value = '';
      document.getElementById('statusEng').value = '';
      document.getElementById('text-location-vn').value = '';
      document.getElementById('text-location-eng').value = '';
      document.getElementById('text-address-vn').value = '';
      document.getElementById('text-address-eng').value = '';
      resetImageInput();
      var enterPost = document.getElementById("enter-post");
      enterPost.style.display = "none";

      await updateLastPostTimestamp(uid);
  } catch (error) {
      console.error('Error saving status:', error);
      alert('Đã có lỗi khi đăng bài.');
  }
});



function resetImageInput() {
  document.getElementById('add-photo').style.backgroundImage = 'url(source-img/add-a-photo.png)';
  document.getElementById('imageInput').value = '';
}
    
// Function to check if an element is displayed as block
function isDisplayedBlock(element) {
  return element.style.display === 'block';
}

async function canUserPost(uid) {
  try {
    // Retrieve the last post timestamp from the user's data
    const lastPostSnapshot = await getDatabaseData(`/users/${uid}/lastPostTimestamp`);
    const lastPostTimestamp = lastPostSnapshot.val();

    if (!lastPostTimestamp) {
      // If no previous timestamp, the user can post
      return true;
    }

    // Check if the last post was more than a day ago
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const currentTime = new Date().getTime();

    return currentTime - lastPostTimestamp > oneDayInMilliseconds;

  } catch (error) {
    console.error('Error checking if user can post:', error);
    return false;
  }
}

async function updateLastPostTimestamp(uid) {
  try {
    // Update the last post timestamp for the user
    const timestamp = new Date().getTime();
    await setDatabaseData(`/users/${uid}/lastPostTimestamp`, timestamp);

  } catch (error) {
    console.error('Error updating last post timestamp:', error);
  }
}

// Helper functions for interacting with Firebase Realtime Database
async function getDatabaseData(path) {
  const snapshot = await get(ref(getDatabase(app), path));
  return snapshot;
}

async function setDatabaseData(path, data) {
  await set(ref(getDatabase(app), path), data);
}

function checkTextArea(textarea) {
  var statusVN = document.getElementById('statusVN').value;
  var statusEng = document.getElementById('statusEng').value;
  var postButton = document.getElementById('post-status');

  // Enable the button if either textarea has at least 1 character
  if (statusVN.length > 0 || statusEng.length > 0) {
      postButton.disabled = false;
  } else {
      postButton.disabled = true;
  }
}

function postStatus() {
  // Add your post status logic here
  console.log('Posting status...');
}

// Add event listeners to continuously monitor changes in the textareas
document.getElementById('statusVN').addEventListener('input', function() {
  checkTextArea(this);
});

document.getElementById('statusEng').addEventListener('input', function() {
  checkTextArea(this);
});





function extractCoordinates(location) {
  // Kiểm tra location có xác định và là chuỗi hay không
  if (location && typeof location === 'string') {
    // Sử dụng regular expression để trích xuất tọa độ
    const matches = location.match(/Latitude:\s*(-?\d+\.\d+),\s*Longitude:\s*(-?\d+\.\d+)/);
    
    // Kiểm tra kết quả match và length
    if (matches && matches.length === 3) {
      // Trích xuất tọa độ và chuyển thành số thực
      const latitude = parseFloat(matches[1]);
      const longitude = parseFloat(matches[2]);
      
      // Trả về object chứa tọa độ
      return { latitude, longitude };
    } else {
      // Ghi log lỗi nếu format không chính xác
      console.error('Invalid location format:', location);
      // Trả về object với giá trị mặc định (ví dụ: 0)
      return { latitude: 0, longitude: 0 };
    }
  } else {
    // Ghi log lỗi nếu location không xác định hoặc không phải chuỗi
    console.error('Location is undefined or not a string:', location);
    // Trả về object với giá trị mặc định (ví dụ: 0)
    return { latitude: 0, longitude: 0 };
  }
}



async function loadPosts() {
  try {
    // Tham chiếu đến nhánh "statuses" trong Firebase
    const statusRef = ref(getDatabase(app), 'statuses');

    // Lấy dữ liệu từ nhánh "statuses"
    const snapshot = await get(statusRef);

    // In dữ liệu Firebase ra console để kiểm tra
    console.log('Firebase Data:', snapshot.val());

    // Kiểm tra xem dữ liệu có tồn tại hay không
    if (snapshot.exists()) {
      // Chuyển đổi dữ liệu snapshot thành mảng
      const posts = Object.values(snapshot.val());

      // Sắp xếp bài đăng theo timestamp (mới nhất trước)
      posts.sort((a, b) => b.timestamp - a.timestamp);

      // Lấy 20 bài đăng mới nhất
      const latestPosts = posts.slice(0, 20);

      // Lấy container để hiển thị bài đăng
      const postsContainer = document.getElementById('posts-container');

      // Xóa nội dung hiện có trong container
      postsContainer.innerHTML = '';

      // Duyệt qua 20 bài đăng mới nhất và tạo các phần tử HTML
      for (const post of latestPosts) {
        // Tạo div cho mỗi bài đăng
        const postDiv = document.createElement('div');
        postDiv.classList.add('show-post');

        // Lấy tọa độ từ thuộc tính "location"
        const coordinates = extractCoordinates(post.location);

        // Điền dữ liệu bài đăng vào các phần tử HTML
        postDiv.innerHTML = `
          <img class="post-userProfilePicture" src="${post.avatarURL}" alt="Profile Picture">
          <span class="post-username">${post.username}</span>
          <span class="post-time">${new Date(post.timestamp).toLocaleString()}</span>
          <span class="post-text-status">${post.status}</span>
          <span class="contentVN post-address">Địa chỉ: ${post.address !== undefined ? post.address : 'Người dùng không chia sẻ địa chỉ'}</span>
          <span class="contentEnglish post-address">Address: ${post.address !== undefined ? post.address : 'The user did not shared the address'}</span>
          <div class="post-image">
            <img style="border-radius: 10px;" src="${post.imageURL}">
          </div>
          <div class="number-like">
            <img class="liked-img" src="source-img/heart-solid.svg">
            <span id="number-like">0</span>
          </div>
          <div class="number-comment">
            <span id="number-comment">0</span>
            <img class="commented-img" src="source-img/cloud.png">
          </div>
          <div id="line"></div>
          <div class="like-post" onclick="underDevelopment()">
            <img src="source-img/heart-regular.svg" class="action-img">
            <span class="contentVN action-text">Thích</span>
            <span class="contentEnglish action-text">Like</span>
          </div>
          <div class="comment-post" onclick="underDevelopment()">
            <img src="source-img/cloud.png" class="action-img">
            <span class="contentVN action-text">Bình luận</span>
            <span class="contentEnglish action-text">Comment</span>
          </div>
          <div class="direct-post" onclick="redirectToGoogleMap(${coordinates.latitude}, ${coordinates.longitude})">
            <img src="source-img/direct.svg" class="action-img">
            <span class="contentVN action-text">Chỉ đường</span>
            <span class="contentEnglish action-text">Direct</span>
          </div>
        `;

        // Thêm div bài đăng vào container
        postsContainer.appendChild(postDiv);
      }
    }
  } catch (error) {
    console.error('Error loading posts:', error);
  }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
  loadPosts(true);
});

// Event listener for "Show more" button
document.getElementById('show-more').addEventListener('click', () => {
  loadPosts(false);
});

// Call the function when the page loads or when needed
loadPosts();


