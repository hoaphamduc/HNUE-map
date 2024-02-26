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
}).setView([21.037138, 105.783182], 13);

var maxBounds = L.latLngBounds(
  L.latLng(21.036000, 105.780455),   // Tọa độ góc trái dưới của giới hạn
  L.latLng(21.042185, 105.786226)    // Tọa độ góc phải trên của giới hạn
);

mymap.setMaxBounds(maxBounds);
mymap.on('drag', function() {
  mymap.panInsideBounds(maxBounds, { animate: false });
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
            }).addTo(mymap);

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

function toggleImageBorderAndMusic() {
  var musicImage = document.getElementById("music");

  // Kiểm tra src của hình ảnh và thay đổi nó
  if (musicImage.src.endsWith("muted.png")) {
    musicImage.src = "source-img/music.png";
    playBackgroundMusic();
    musicImage.classList.add("scale-animation");
  } else {
    musicImage.src = "source-img/muted.png";
    pauseBackgroundMusic();
    musicImage.classList.remove("scale-animation");
  }

  // Kiểm tra border và thay đổi nó
  // if (musicImage.style.border === "3px solid red") {
  //   musicImage.style.border = "3px solid #000";
  // } else {
  //   musicImage.style.border = "3px solid red";
  // }
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

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// Menu burger
// Lấy đối tượng burger và menu bằng ID
const burger = document.getElementById('menu-btn__burger');
const menu = document.getElementById('menu');

// Thêm sự kiện "click" cho burger
burger.addEventListener('click', function() {
  // Toggle giá trị của thuộc tính display
  menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
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

// Lấy thẻ hình ảnh bằng cách sử dụng ID
var imageElement = document.getElementById("hnue-img");
var image2Element = document.getElementById("hnue-img-2");

// Lấy URL của hình ảnh
var imageUrl = imageElement.src;
var imageUrl2 = image2Element.src;

// Đặt giá trị cho thuộc tính content của thẻ og:image
var ogImageElement = document.getElementById("ogImage");
var ogImage2Element = document.getElementById("ogImage2");

ogImageElement.content = imageUrl;
ogImage2Element.content = imageUrl2;

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

// document.addEventListener("DOMContentLoaded", function () {
//   // Lấy đối tượng img và input
//   var locationImage = document.querySelector("#add-location-button");

//   // Thêm sự kiện click vào hình ảnh
//   locationImage.addEventListener("click", getLocationAndFillInput);
// });

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

// behavior toolbar
var toolBar = document.getElementById('tool-bar');

var lifePosition;
var firstPosition;
var movingToolBar = false;
var positionToolBar = 0;
var defaultPositionToolBar = 215;
var limitTop = 220;
var limitBottom = 10;

// setup
moveToolBarY(defaultPositionToolBar);

toolBar.addEventListener('touchstart', handleStart);
document.addEventListener('touchmove', handleMove);
toolBar.addEventListener('touchend', handleEnd);

function handleStart(event) {

    var mouseX, mouseY;
    mouseX = event.touches[0].clientX; 
    mouseY = event.touches[0].clientY; 
    firstPosition = event.touches[0].clientY;
    movingToolBar = true;
  }
  
  function handleEnd(event){
    movingToolBar = false;

    // save position tool bar
    positionToolBar = positionToolBar - (firstPosition - lifePosition);

    if(positionToolBar > limitTop)
      positionToolBar = limitTop;
    else if(positionToolBar < limitBottom)
      positionToolBar = limitBottom;

  }
  
  function handleMove(event) {
    lifePosition = event.clientY || event.touches[0].clientY;
    if(movingToolBar)
    {
      moveToolBarY(positionToolBar -( firstPosition - lifePosition));
    }
  }
  
  function moveToolBarY(yOffset) {
    if(yOffset <= limitBottom || yOffset >= limitTop) return;
    toolBar.style.transform = 'translateY(' + yOffset + 'px)';
}
  

