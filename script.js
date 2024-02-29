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

// Lấy thẻ hình ảnh bằng cách sử dụng ID
var imageElement = document.getElementById("hnue-img");
var image2Element = document.getElementById("hnue-img-2");

// Lấy URL của hình ảnh
// if(imageElement != null)
//   var imageUrl = imageElement.src;

// var imageUrl2 = image2Element.src;

// Đặt giá trị cho thuộc tính content của thẻ og:image
var ogImageElement = document.getElementById("ogImage");
var ogImage2Element = document.getElementById("ogImage2");

// ogImageElement.content = imageUrl;

// if(imageUrl2 != null && ogImage2Element != null)
//   ogImage2Element.content = imageUrl2;


// document.addEventListener("DOMContentLoaded", function () {
//   // Lấy đối tượng img và input
//   var locationImage = document.querySelector("#add-location-button");

//   // Thêm sự kiện click vào hình ảnh
//   locationImage.addEventListener("click", getLocationAndFillInput);
// });


// behavior toolbar
var toolBar = document.getElementById('tool-bar');

var lifePosition;
var firstPosition;
var movingToolBar = false;
var positionToolBar = 0;
var defaultPositionToolBar = 389;
var limitTop = 390;
var limitBottom = 10;

// setup

toolBar.addEventListener('touchstart', handleStart);
document.addEventListener('touchmove', handleMove);
toolBar.addEventListener('touchend', handleEnd);

moveToolBarY(defaultPositionToolBar);
positionToolBar = defaultPositionToolBar;

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

