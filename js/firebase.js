import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { get, ref, set, onValue, push, getDatabase } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js';

const _0x34a23d=_0x5abd;function _0x5abd(_0x19d45f,_0x189364){const _0x2fae36=_0x2fae();return _0x5abd=function(_0x5abd36,_0x2c8a1e){_0x5abd36=_0x5abd36-0x172;let _0x5dac42=_0x2fae36[_0x5abd36];return _0x5dac42;},_0x5abd(_0x19d45f,_0x189364);}(function(_0x5a1125,_0x5eb62a){const _0x181d7b=_0x5abd,_0x426777=_0x5a1125();while(!![]){try{const _0x250367=parseInt(_0x181d7b(0x176))/0x1*(-parseInt(_0x181d7b(0x182))/0x2)+parseInt(_0x181d7b(0x17c))/0x3+-parseInt(_0x181d7b(0x178))/0x4*(parseInt(_0x181d7b(0x17d))/0x5)+-parseInt(_0x181d7b(0x179))/0x6*(-parseInt(_0x181d7b(0x180))/0x7)+parseInt(_0x181d7b(0x174))/0x8+-parseInt(_0x181d7b(0x17b))/0x9*(parseInt(_0x181d7b(0x175))/0xa)+-parseInt(_0x181d7b(0x172))/0xb*(-parseInt(_0x181d7b(0x17f))/0xc);if(_0x250367===_0x5eb62a)break;else _0x426777['push'](_0x426777['shift']());}catch(_0x44df3d){_0x426777['push'](_0x426777['shift']());}}}(_0x2fae,0x930d7));const firebaseConfig={'apiKey':_0x34a23d(0x17e),'authDomain':_0x34a23d(0x181),'projectId':_0x34a23d(0x177),'storageBucket':_0x34a23d(0x17a),'messagingSenderId':'18471638048','appId':_0x34a23d(0x173),'measurementId':'G-Q43VE2X9Z1'};function _0x2fae(){const _0x3893ee=['252672UeAZmY','71650rLeKHM','4349FECztj','hnue-map-42e10','13640xQtrHN','98898SnPTcT','hnue-map-42e10.appspot.com','1233xKFzZF','1011468MeVWHS','805ofwKwv','AIzaSyCRD_Jsz7rBhGf2B-oZ4wniLAp8QrglFTQ','1188MvUCcc','224oqBjpT','hnue-map-42e10.firebaseapp.com','124frlfFo','167376ImQsiP','1:18471638048:web:8f538cd825d504c5e49845'];_0x2fae=function(){return _0x3893ee;};return _0x2fae();}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const firebase = getDatabase(app);

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
  document.getElementById("user-avt").src = userProfilePicture;
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

      // Check for inappropriate words in the status
      const inappropriateWords = ['địt', 'lồn', 'mẹ mày', 'vãi', 'vcl', 'đm', 'đmm' , 
                                  'dm', 'duma', 'Đuma', 'dmm', 'lon', 'dit', 'me may', 
                                  'đéo', 'deo', 'vch', 'Đitme', 'ditme', 'đĩ', 'tình dục', 
                                  'xuất tinh', 'đụ', 'chơi gái', 'choi gai', 'bulon', 
                                  'cac', 'cặc', 'nwngs', 'loz', 'buoi',
                                  'fuck', 'bitch', 'như l', 'lz', "đụ", "địt", "lồn", "cặc", "buồi", "đĩ", "địt mẹ", "địt con mẹ", "địt mẹ mày", "đụ má", "đụ má mày", "đụ con mẹ mày", "lỗ l", "cặc bò", "lồn buồi", "lồn cặc", "buồi lồn", "buồi địt", "buồi má", "đĩ mẹ", "đĩ con", "đĩ mẹ mày", "đĩ con mẹ mày", "đĩ mẹ má", "đĩ con mẹ má", "địt mẹ má", "địt con mẹ má", "đụ mẹ má", "đụ con mẹ má", "địt má", "địt con", "địt mẹ con", "địt má con", "địt mẹ má con", "đụ má con", "đụ mẹ con", "đụ má mày", "địt mày", "địt con mày", "địt mẹ mày", "địt mẹ mày", "đụ mẹ mày", "đụ mày", "đụ con mày", "lỗ l", "đụ má", "đụ má mày", "đụ con mẹ mày", "lỗ l", "cặc bò", "lồn buồi", "lồn cặc", "buồi lồn", "buồi địt", "buồi má", "đĩ mẹ", "đĩ con", "đĩ mẹ mày", "đĩ con mẹ mày", "đĩ mẹ má", "đĩ con mẹ má", "địt mẹ má", "địt con mẹ má", "đụ mẹ má", "đụ con mẹ má", "địt má", "địt con", "địt mẹ con", "địt má con", "địt mẹ má con", "đụ má con", "đụ mẹ con", "đụ má mày", "địt mày", "địt con mày", "địt mẹ mày", "địt mẹ mày", "đụ mẹ mày", "đụ mày", "đụ con mày", "đụ má", "đụ má mày", "đụ con mẹ mày", "lỗ l", "cặc bò", "lồn buồi", "lồn cặc", "buồi lồn", "buồi địt", "buồi má", "đĩ mẹ", "đĩ con", "đĩ mẹ mày", "đĩ con mẹ mày", "đĩ mẹ má", "đĩ con mẹ má", "địt mẹ má", "địt con mẹ má", "đụ mẹ má", "đụ con mẹ má", "địt má", "địt con", "địt mẹ con", "địt má con", "địt mẹ má con", "đụ má con", "đụ mẹ con", "đụ má mày", "địt mày", "địt con mày", "địt mẹ mày", "địt mẹ mày", "đụ mẹ mày", "đụ mày", "đụ con mày", "lỗ l", "đụ má", "đụ má mày", "đụ con mẹ mày", "lỗ l", "cặc bò", "lồn buồi", "lồn cặc", "buồi lồn", "buồi địt", "buồi má", "đĩ mẹ", "đĩ con", "đĩ mẹ mày", "đĩ con mẹ mày", "đĩ mẹ má", "đĩ con mẹ má", "địt mẹ má", "địt con mẹ má", "đụ mẹ má", "đụ con mẹ má", "địt má", "địt con", "địt mẹ con", "địt má con", "địt mẹ má con", "đụ má con", "đụ mẹ con", "đụ má mày", "địt mày", "địt con mày", "địt mẹ mày", "địt mẹ mày", "đụ mẹ mày", "đụ mày", "đụ con mày", "lỗ l",
                                  "fuck", "shit", "asshole", "bitch", "motherfucker", "cunt", "dick", "cock", "pussy", "bastard",
                                  "ass", "wanker", "twat", "bollocks", "crap", "damn", "hell", "arsehole", "bloody", "bugger", 
                                  "arse", "bellend", "prick", "shithead", "slut", "wank", "whore", "sod off", "screw you", 
                                  "son of a bitch", "douchebag", "crap", "goddamn", "asswipe", "dipshit", "jackass", "piss off", 
                                  "bastard", "piss", "suck", "motherfucking", "bollox", "tosser", "fanny", "knobhead", "motherfucker",
                                  "motherfucking", "motherfuck", "motherfuckers", "motherfucked", "motherfucker's", "motherfuckings" ];

      if (containsInappropriateWords(status, inappropriateWords)) {
          alert('Nội dung chứa từ ngữ không phù hợp. Vui lòng kiểm tra lại!');
          return;
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

// Function to check if a string contains inappropriate words
function containsInappropriateWords(text, inappropriateWords) {
  const lowercasedText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  for (const word of inappropriateWords) {
    var newWord = word.toLowerCase();
      if (lowercasedText.includes(newWord)) {
          return true;
      }
  }
  return false;
}

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
      // Trả về object với giá trị mặc định (ví dụ: 0)
      return { latitude: 0, longitude: 0 };
    }
  } else {
    // Ghi log lỗi nếu location không xác định hoặc không phải chuỗi
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
        const postId = post.postId;

        // Tạo div cho mỗi bài đăng
        const postDiv = document.createElement('div');
        postDiv.classList.add('show-post');
        updateCommentCount(postId);

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
            <img class="imageOfPost" src="${post.imageURL}" onclick="openFullscreen(this)">
          </div>
          
          <div class="number-like">
            <img class="liked-img" src="source-img/heart-solid.svg">
            <span id="number-like">0</span>
          </div>

          <div class="number-comment">
            <span class="numberComment" id="number-comment-${post.postId}">0</span>
            <img class="commented-img" src="source-img/cloud.png">
          </div>

          <div id="line"></div>

          <div class="like-post" onclick="underDevelopment()">
            <img src="source-img/heart-regular.svg" class="action-img">
            <span class="contentVN action-text">Thích</span>
            <span class="contentEnglish action-text">Like</span>
          </div>

          <div class="comment-post" onclick="openCommentAction('${encodeURIComponent(postId)}')" data-postid='${post.postId}'>
            <img src="source-img/cloud.png" class="action-img">
            <span class="contentVN action-text">Bình luận</span>
            <span class="contentEnglish action-text">Comment</span>
          </div>

          <div class="direct-post" onclick="redirectToGoogleMap(${coordinates.latitude}, ${coordinates.longitude})">
            <img src="source-img/direct.svg" class="action-img">
            <span class="contentVN action-text">Chỉ đường</span>
            <span class="contentEnglish action-text">Direct</span>
          </div>

          <div class="comment-action" id="comment-action-${post.postId}" style="display: none;">
            <center><span class="creat-post-span">Bình luận</span></center>
            <button class="close-div" onclick="hideCommentAction('${encodeURIComponent(postId)}')"></button>
            <div style="position: absolute; width: 100%; height: 1px; background-color: #e5e5e5; top: 50px;"></div>
            <div class="comment-container" id="comment-container-${post.postId}">
            </div>
            <div style="position: absolute; width: 100%; height: 1px; background-color: #e5e5e5; bottom: 50px;"></div>
            <input type="text" placeholder="Add a comment..." class="comment-input" id="comment-input-${post.postId}">
            <button class="comment-button addComment" data='${post.postId}'"></button>
          </div>
        `;
        const commentBox = postDiv.querySelector('.comment-post');

        // Bind the click event directly to the specific comment box
        commentBox.addEventListener('click', () => getCommentsForPost(postId));
        postsContainer.appendChild(postDiv);
        const boxes = Array.from(postsContainer.getElementsByClassName('addComment'));
        boxes.forEach(box => {
          box.addEventListener('click', addComment);
        });
        // const boxes2 = Array.from(document.getElementsByClassName('comment-post'));
        // boxes2.forEach(box => {
        //   const postId = box.getAttribute('data-postid');
        //   box.addEventListener('click', () => getCommentsForPost(postId));
        // });
      }
    }
  } catch (error) {
    console.error('Error loading posts:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadPosts(true);
});

function updateCommentCount(postId) {
  const commentsRef = ref(firebase, `comments/${postId}`);

  onValue(commentsRef, (snapshot) => {
    const commentCount = snapshot.exists() ? Object.keys(snapshot.val()).length : 0;
    const commentCountSpan = document.getElementById('number-comment-'+ postId);
    if (commentCountSpan) {
      commentCountSpan.textContent = commentCount.toString();
    }
  });
}

function addComment(e) {
  var postId = e.target.getAttribute('data');
  // Get the input element based on the postId
  const inputElement = document.getElementById(`comment-input-${postId}`);
  const user = auth.currentUser; 

  
  // Get the new comment text from the input element
  const newCommentText = inputElement.value;

  // Check if the comment is not empty
  if (newCommentText.trim() !== '') {
    // Prepare the comment object
    const commentData = {
      username: user.displayName || '',
      avatarURL: user.photoURL || '',
      text: newCommentText,
      timestamp: new Date().getTime()
    };

    // Save the comment data to the database
    saveCommentToDatabase(postId, commentData);

    // Clear the input field after saving the comment
    inputElement.value = '';
  } else {
    // Handle the case where the comment is empty
    console.log('Comment cannot be empty');
  }
}

function saveCommentToDatabase(postId, commentData) {
  const commentsRef = ref(getDatabase(app), `comments/${postId}`);

  push(commentsRef, commentData)
    .then(() => {
      console.log('Comment added successfully');
    })
    .catch((error) => {
      console.error('Error adding comment:', error);
    });
}


function getCommentsForPost(postId) {
  console.log('getCommentsForPost called for postId:', postId);

  const commentsRef = ref(firebase, `comments/${postId}`);
  const commentContainer = document.getElementById('comment-container-' + postId);

  if (!commentContainer) {
    console.error("Container not found");
    return;
  }

  // Lắng nghe sự thay đổi trong dữ liệu bình luận
  onValue(commentsRef, (snapshot) => {
    const commentsData = snapshot.val();

    // Hiển thị bình luận
    commentContainer.innerHTML = '';
    // Gọi hàm để đếm số lượng bình luận và cập nhật vào span
    updateCommentCount(postId);

    if (!commentsData) {
      console.error("No comments found for postId:", postId);
      return;
    }

    Object.keys(commentsData).forEach((commentId) => {
      const comment = commentsData[commentId];
      const commentElement = createCommentElement(comment);
      commentContainer.appendChild(commentElement);
    });
  }, (error) => {
    console.error("Error fetching comments:", error);
  });
}


function createCommentElement(comment) {
  const avatarUrl = comment.avatarURL || 'Logo Đại học Sư phạm Hà Nội - HNUE.png';

  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');

  // Thêm ảnh đại diện
  const commentAvt = document.createElement('img');
  commentAvt.classList.add('comment-avt');
  commentAvt.src = avatarUrl;
  commentElement.appendChild(commentAvt);

  // Thêm tên người dùng
  const commentUsername = document.createElement('span');
  commentUsername.classList.add('comment-username');
  commentUsername.textContent = comment.username;
  commentElement.appendChild(commentUsername);

  // Thêm thời gian bình luận
  const commentTime = document.createElement('span');
  commentTime.classList.add('comment-time');
  commentTime.textContent = formatTime(comment.timestamp);
  commentElement.appendChild(commentTime);

  // Thêm nội dung bình luận
  const commentText = document.createElement('span');
  commentText.classList.add('comment-text');
  commentText.textContent = comment.text; 
  commentElement.appendChild(commentText);

  return commentElement;
}


// Hàm định dạng thời gian
function formatTime(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}, ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

