// // Chặn việc mở DevTools bằng phím tắt
// window.addEventListener('keydown', function (event) {
//   if (event.keyCode == 123) { // 123 là mã phím tắt cho DevTools trên nhiều trình duyệt
//     event.preventDefault();
//   }
// });
// // Chặn việc mở DevTools bằng phím tắt và tổ hợp phím
// window.addEventListener('keydown', function (event) {
//   // Kiểm tra xem người dùng có nhấn tổ hợp phím tắt DevTools không
//   if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || // Ctrl+Shift+I
//       (event.ctrlKey && event.shiftKey && event.keyCode == 74) || // Ctrl+Shift+J
//       (event.ctrlKey && event.keyCode == 85) || // Ctrl+U
//       (event.ctrlKey && event.shiftKey && event.keyCode == 67) || // Ctrl+Shift+C
//       (event.ctrlKey && event.keyCode == 83)) { // Ctrl+S
//     event.preventDefault();
//   }
// });


// // Chặn việc mở DevTools bằng chuột phải
// window.addEventListener('contextmenu', function (event) { 
//   event.preventDefault();
//   console.log('DevTools đã bị chặn.');
// });

function openCommentAction(postId) {

  // Check if the comment-action div already exists
  const existingCommentAction = document.getElementById(`comment-action-${postId}`);

  if (!existingCommentAction) {
    // Create a new comment-action div
    const commentActionDiv = document.createElement('div');
    commentActionDiv.classList.add('comment-action');
    commentActionDiv.id = `comment-action-${postId}`;
    commentActionDiv.style.display = 'none';
    console.log(commentActionDiv.id);

    // Set the content of the comment-action div
    commentActionDiv.innerHTML = `
      <center><span class="creat-post-span">Bình luận</span></center>
      <button class="close-div" onclick="hideCommentAction(${postId})"></button>
      <div style="position: absolute; width: 100%; height: 1px; background-color: #e5e5e5; top: 50px;"></div>
      <div class="comment-container" id="comment-container-${postId}"></div>
      <div style="position: absolute; width: 100%; height: 1px; background-color: #e5e5e5; bottom: 50px;"></div>
      <input type="text" placeholder="Add a comment..." class="comment-input" id="comment-input-${postId}">
      <button class="comment-button" onclick="addComment('${postId}')"></button>
    `;
    
    // Append the comment-action div to the document body or another container element
    document.body.appendChild(commentActionDiv);
  }

  // Toggle the display of the comment-action div
  const commentActionDiv = document.getElementById(`comment-action-${postId}`);
  commentActionDiv.style.display = commentActionDiv.style.display === 'none' ? 'block' : 'none';
}

function hideCommentAction(postId) {
  // Get the comment-action div based on the containerId
  const commentActionDiv = document.getElementById(`comment-action-${postId}`);

  // Check if the comment-action div exists before attempting to hide it
  if (commentActionDiv) {
    commentActionDiv.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const btn = document.getElementById('menu-btn');
    const homeContent = document.querySelector('.main_content');
  
    btn.addEventListener('click', function () {
        sidebar.classList.toggle('show');
        homeContent.classList.toggle('show');
    });
});

const languageToggle = document.getElementById('language-toggle');
const contentVN = document.querySelectorAll('.contentVN');
const contentEnglish = document.querySelectorAll('.contentEnglish');

languageToggle.addEventListener('change', function() {
  const isChecked = this.checked;

  contentVN.forEach(item => {
    item.style.display = isChecked ? 'none' : 'block';
  });

  contentEnglish.forEach(item => {
    item.style.display = isChecked ? 'block' : 'none';
  });
});

var mymap = L.map('map', {
    zoomControl: false
  }).fitWorld().setView([21.037138, 105.783182], 13);

const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

var maxBounds = L.latLngBounds(
    L.latLng(21.036000, 105.780455),   // Tọa độ góc trái dưới của giới hạn
    L.latLng(21.042185, 105.786226)    // Tọa độ góc phải trên của giới hạn
  );
  
mymap.setMaxBounds(maxBounds);
mymap.on('drag', function() {
    mymap.panInsideBounds(maxBounds, { animate: false });
});

// Fit bounds to the maximum bounds
mymap.fitBounds(maxBounds);

var zoomControl = L.control.zoom({
  position: 'bottomright' 
});
zoomControl.addTo(mymap);

if (navigator.permissions) {
    navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
      if (result.state === 'granted') {
        // Đã có quyền truy cập vị trí, thực hiện các hành động cần thiết ở đây
  
        var marker;
  
        // Hàm để cập nhật vị trí trên bản đồ
        function updateMap(position) {
          var lat = position.coords.latitude;
          var lon = position.coords.longitude;
  
          // Kiểm tra xem marker đã được tạo hay chưa
          if (marker) {
            marker.setLatLng([lat, lon]).update();
          } else {
            marker = L.marker([lat, lon]).addTo(mymap).openPopup();
          }
        }
  
        // Sử dụng hàm watchPosition để liên tục theo dõi vị trí
        var watchId = navigator.geolocation.watchPosition(
          function (position) {
            updateMap(position);
          },
          function (error) {
            console.log('Error getting geolocation:', error.message);
          }
        );
  
      } else if (result.state === 'prompt') {
        // Chưa có quyền truy cập vị trí, hiển thị cửa sổ yêu cầu quyền
        navigator.geolocation.getCurrentPosition(
          function (position) {
            // Lưu trạng thái đã được cấp quyền
            navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
              if (result.state === 'granted') {
                // Thực hiện các hành động cần thiết khi đã được cấp quyền
                updateMap(position);
              }
            });
          },
          function (error) {
            console.log('Error getting geolocation:', error.message);
          }
        );
      }
    });
  } else {
    console.log('Geolocation is not supported by this browser.');
}

// Lấy tọa độ khi click
mymap.on('click', function (e) {
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
    console.log('Latitude: ' + lat + ', Longitude: ' + lng);
});

var isMusicPlaying = false;
var backgroundMusic = document.getElementById("backgroundMusic");
var intervalId;

function toggleImageBorderAndMusic() {
  var musicImage = document.getElementById("music");
  if (musicImage.src.endsWith("muted.png")) {
    musicImage.src = "source-img/music.png";
    playBackgroundMusic();
    musicImage.classList.add("scale-animation");
    isMusicPlaying = true;
    intervalId = setInterval(changeBorderColor, 500);
  } else {
    musicImage.src = "source-img/muted.png";
    pauseBackgroundMusic();
    musicImage.classList.remove("scale-animation");
    isMusicPlaying = false;
    clearInterval(intervalId);
    musicImage.style.border = "3px solid red";
  }
}

function changeBorderColor() {
  var musicImage = document.getElementById("music");
  musicImage.style.border = "3px solid " + generateRandomColor();
}

function generateRandomColor() {
  // Tạo giá trị ngẫu nhiên cho từng thành phần màu
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  // Chuyển đổi thành phần màu thành chuỗi hex và đảm bảo đủ 2 ký tự
  var redHex = red.toString(16).padStart(2, '0');
  var greenHex = green.toString(16).padStart(2, '0');
  var blueHex = blue.toString(16).padStart(2, '0');

  // Ghép các thành phần màu thành mã màu hex hoàn chỉnh
  var hexColor = '#' + redHex + greenHex + blueHex;

  return hexColor;
}

function playBackgroundMusic() {
  backgroundMusic.play();
  isMusicPlaying = true;
  backgroundMusic.volume = 1;
}

function pauseBackgroundMusic() {
  backgroundMusic.pause();
  isMusicPlaying = false;
}

// Bắt sự kiện nhấn phím #music lần đầu tiên
document.getElementById("music").addEventListener("click", function() {
  if (!isMusicPlaying) {
    pauseBackgroundMusic();
  } else {
    playBackgroundMusic();
  }
});


function toggleSupportDiv() {
  var supportDiv = document.getElementById("support-div");
  var computedStyle = window.getComputedStyle(supportDiv);

  if (computedStyle.display === "none") {
    supportDiv.style.display = "block";
  } else {
    supportDiv.style.display = "none";
  }
}


function hideSupportDiv() {
  var supportDiv = document.getElementById("support-div");
  supportDiv.style.display = "none";
}

function toggleSocialNetworkDiv() {
  var socialDiv = document.getElementById("social-network-div");
  var computedStyle = window.getComputedStyle(socialDiv);

  if (computedStyle.display === "none") {
    socialDiv.style.display = "block";
  } else {
    socialDiv.style.display = "none";
  }
}

function toggleHNUEIntroductionDiv() {
  var HNUEIntrductionDiv = document.getElementById("HNUE-introduction");
  var computedStyle = window.getComputedStyle(HNUEIntrductionDiv);

  if (computedStyle.display === "none") {
    HNUEIntrductionDiv.style.display = "block";
  } else {
    HNUEIntrductionDiv.style.display = "none";
  }
}

function toggleProductIntroductionDiv() {
  var ProductIntrductionDiv = document.getElementById("product-introduction");
  var computedStyle = window.getComputedStyle(ProductIntrductionDiv);

  if (computedStyle.display === "none") {
    ProductIntrductionDiv.style.display = "block";
  } else {
    ProductIntrductionDiv.style.display = "none";
  }
}

function toggleInfomationPagesDiv() {
  var InfomationPagesDiv = document.getElementById("infomation-pages");
  var computedStyle = window.getComputedStyle(InfomationPagesDiv);

  if (computedStyle.display === "none") {
    InfomationPagesDiv.style.display = "block";
  } else {
    InfomationPagesDiv.style.display = "none";
  }
}

function hideInfomationPagesDiv() {
  var InfomationPagesDiv = document.getElementById("infomation-pages");
  InfomationPagesDiv.style.display = "none";
}

function hideProductIntroductionDiv() {
  var ProductIntrductionDiv = document.getElementById("product-introduction");
  ProductIntrductionDiv.style.display = "none";
}

function hideHNUEIntroductionDiv() {
  var HNUEIntrductionDiv = document.getElementById("HNUE-introduction");
  HNUEIntrductionDiv.style.display = "none";
}

function hideSocialNetworkDiv() {
  var socialDiv = document.getElementById("social-network-div");
  socialDiv.style.display = "none";
}

function hideEnterPostDiv() {
  var enterPost = document.getElementById("enter-post");
  enterPost.style.display = "none";
}

function openEnterPostDiv() {
  var enterPost = document.getElementById("enter-post");
  enterPost.style.display = "block";
}


function toggleDonateDiv() {
  var donateDiv = document.getElementById("donate-div");
  var computedStyle = window.getComputedStyle(donateDiv);

  if (computedStyle.display === "none") {
    donateDiv.style.display = "block";
  } else {
    donateDiv.style.display = "none";
  }
}

function hideDonateDiv() {
  var donateDiv = document.getElementById("donate-div");
  donateDiv.style.display = "none";
}

function composeEmail() {
  var emailAddress = "hoaphamduc2399@gmail.com";
  var subject = "Hỗ trợ về HNUE map"; 
  var body = ""; 

  var mailtoLink = "mailto:" + encodeURIComponent(emailAddress) +
                   "?subject=" + encodeURIComponent(subject) +
                   "&body=" + encodeURIComponent(body);

  window.location.href = mailtoLink;
}

function uploadImage() {
    document.getElementById('imageInput').click();
}

function setBackgroundImage() {
    var input = document.getElementById('imageInput');
  
    if (input.files && input.files[0]) {
        var file = input.files[0];
  
        // Kiểm tra kích thước tệp tin (25MB = 25 * 1024 * 1024 bytes)
        if (file.size > 25 * 1024 * 1024) {
            alert("File quá lớn. Vui lòng chọn một tệp tin dưới 25MB.");
            return;
        }
  
        // Kiểm tra loại MIME của tệp tin chỉ cho phép ảnh
        if (!isValidImageFileType(file.type)) {
            alert("Bạn chỉ được phép chọn ảnh.");
            return;
        }
  
        var reader = new FileReader();
  
        reader.onload = function (e) {
            document.getElementById('add-photo').style.backgroundImage = 'url(' + e.target.result + ')';
        };
  
        reader.readAsDataURL(file);
    }
}
  
// Hàm kiểm tra loại MIME của tệp tin chỉ cho phép ảnh
function isValidImageFileType(fileType) {
    // Các loại MIME của ảnh
    var allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    return allowedImageTypes.includes(fileType);
}

function getLocationAndFillInput() {
    // Kiểm tra xem trình duyệt hỗ trợ Geolocation hay không
    if ("geolocation" in navigator) {
        // Sử dụng Geolocation API để lấy toạ độ
        navigator.geolocation.getCurrentPosition(
            function (position) {
                // Lấy toạ độ latitude và longitude
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                // Điền toạ độ vào input
                fillInputWithCoordinates(latitude, longitude);
            },
            function (error) {
                // Xử lý lỗi nếu có
                console.error("Không thể lấy toạ độ:", error.message);
            }
        );
    } else {
        // Trình duyệt không hỗ trợ Geolocation
        alert("Trình duyệt không hỗ trợ Geolocation.");
    }
}
  
function fillInputWithCoordinates(latitude, longitude) {
    // Điền toạ độ vào input
    var coordinatesText = "Latitude: " + latitude + ", Longitude: " + longitude;
    document.querySelector("#text-location-vn").value = coordinatesText;
    document.querySelector("#text-location-eng").value = coordinatesText;
}
  
function underDevelopment() {
    alert("Tính năng này đang được phát triển!");
}
  
function redirectToGoogleMap(latitude, longitude) {
    // Kiểm tra tọa độ
    if (latitude === 0 && longitude === 0) {
        // Hiện cảnh báo người dùng chưa chia sẻ vị trí
        alert('Người dùng chưa chia sẻ vị trí!');
        return; 
    }

    // Tạo URL Google Map với tọa độ
    const googleMapURL = `https://www.google.com/maps?q=${latitude},${longitude}`;

    // Mở Google Map với URL được tạo
    window.location.href = googleMapURL;
}
  
function openFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) { /* Firefox */
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) { /* IE/Edge */
    element.msRequestFullscreen();
  }

  // Thêm sự kiện để theo dõi thay đổi fullscreen
  document.addEventListener("fullscreenchange", exitFullscreenHandler);
  document.addEventListener("webkitfullscreenchange", exitFullscreenHandler);
  document.addEventListener("mozfullscreenchange", exitFullscreenHandler);
  document.addEventListener("MSFullscreenChange", exitFullscreenHandler);

  // Thêm sự kiện click để thoát fullscreen khi bấm vào bất kỳ nơi nào
  document.addEventListener("click", exitFullscreenOnClickHandler);
}

// Hàm để thoát fullscreen khi sự kiện xảy ra
function exitFullscreenHandler() {
  const fullscreenElement =
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement;

  if (!fullscreenElement) {
    exitFullscreen();
  }
}

// Hàm để thoát fullscreen khi click bất kỳ nơi nào
function exitFullscreenOnClickHandler() {
  exitFullscreen();
}

// Hàm để thoát fullscreen
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

// Gọi hàm thoát fullscreen khi cần
function closeFullscreen() {
  exitFullscreen();
}
