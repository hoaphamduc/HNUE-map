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
  const homeContent = document.getElementById('main-content');

  btn.addEventListener('click', function () {
      sidebar.classList.toggle('show');
      homeContent.classList.toggle('show');
  });
});

// Lưu trữ cài đặt ngôn ngữ hiện tại
let isEnglish = false;
const languageToggle = document.getElementById('language-toggle');

// Lấy danh sách các phần tử contentVN và contentEnglish khi trang được tải
let contentVN = document.querySelectorAll('.contentVN');
let contentEnglish = document.querySelectorAll('.contentEnglish');

// Hàm để cập nhật ngôn ngữ cho danh sách các phần tử
function updateLanguage() {
  contentVN.forEach(item => {
    item.style.display = isEnglish ? 'none' : 'block';
  });

  contentEnglish.forEach(item => {
    item.style.display = isEnglish ? 'block' : 'none';
  });
}

// Hàm xử lý sự kiện khi toggle thay đổi
function handleToggleChange(isChecked) {
  isEnglish = isChecked;
  updateLanguage();
}

// Tạo một MutationObserver để theo dõi thay đổi trong DOM
const observer = new MutationObserver(() => {
  // Cập nhật danh sách phần tử khi có thay đổi trong DOM
  contentVN = document.querySelectorAll('.contentVN');
  contentEnglish = document.querySelectorAll('.contentEnglish');
  updateLanguage();
});

// Thêm lắng nghe cho sự kiện thay đổi trong DOM
observer.observe(document.body, { subtree: true, childList: true });

// Lắng nghe sự kiện thay đổi khi toggle được thay đổi
languageToggle.addEventListener('change', function () {
  const isChecked = this.checked;
  handleToggleChange(isChecked);
});


var mymap = L.map('map', {
    zoomControl: false
  }).fitWorld().setView([21.037138, 105.783182], 17);

const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; Nhóm nghiên cứu khoa học năm 2024'
}).addTo(mymap);

var maxBounds = L.latLngBounds(
  L.latLng(21.027863833645036, 105.7683849334717),   // Tọa độ góc trái dưới của giới hạn
  L.latLng(21.04615122410683, 105.79756736755371)    // Tọa độ góc phải trên của giới hạn
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


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    L.marker([lat, lon]).addTo(mymap)
      .bindPopup('Vị trí của bạn').openPopup();
  }, function (error) {
    console.log('Error getting geolocation:', error.message);
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

var HNUE = L.polygon([
  [21.03683472026718, 105.78238070011139],
  [21.036717058570588, 105.78593999147417],
  [21.041263238673896, 105.78608751296998],
  [21.041273252133305, 105.78533113002779],
  [21.041135567007366, 105.78532844781877],
  [21.04114307710843, 105.78477323055269],
  [21.04100539186213, 105.78476786613466],
  [21.04101790870796, 105.78408926725389],
  [21.040529750941104, 105.7840731739998],
  [21.040552281334804, 105.78333020210268],
  [21.03919043808257, 105.78331410884859],
  [21.039202955080917, 105.78286081552507],
  [21.03906777144307, 105.78285008668901],
  [21.039066708368225, 105.78264958239745],
  [21.038574600464806, 105.78263819217683],
  [21.038544559540274, 105.78373789787294],
  [21.037650839264398, 105.78371107578279],
  [21.03768088036915, 105.78224658966066],
  [21.0374863675158, 105.78223942477054],
  [21.0374863675158, 105.78236817080327],
  [21.03722775972886, 105.78235924243927],
  [21.03722525629609, 105.78239142894745]
], {
  opacity: 1,
  fillOpacity: 0.1
}).addTo(mymap);

var welcomeText = document.getElementById('welcome-text');

setTimeout(function () {
  mymap.removeLayer(HNUE);
  welcomeText.style.display = 'none';
}, 5000); 

var directionBoard = document.getElementById('direction-board');
var directionArrow = document.getElementById('directionArrow');

function toggleHide() {
  directionBoard.classList.toggle('hide');
  
  if (directionBoard.classList.contains('hide')) {
    directionArrow.src = 'source-img/Icon ionic-md-arrow-dropdown.svg';
  } else {
    directionArrow.src = 'source-img/close-direction-board.svg';
  }
}



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

// Hàm chuyển đổi tiếng Việt có dấu thành tiếng Việt không dấu
function removeVietnameseSigns(str) {
  str = str.toLowerCase();
  // Chuyển đổi các ký tự có dấu thành không dấu
  str = str.replace(/[áàảãạăắằẳẵặâấầẩẫậ]/g, 'a');
  str = str.replace(/[éèẻẽẹêếềểễệ]/g, 'e');
  str = str.replace(/[íìỉĩị]/g, 'i');
  str = str.replace(/[óòỏõọôốồổỗộơớờởỡợ]/g, 'o');
  str = str.replace(/[úùủũụưứừửữự]/g, 'u');
  str = str.replace(/[ýỳỷỹỵ]/g, 'y');
  // Loại bỏ các ký tự khác
  str = str.replace(/[^a-z0-9\s]/g, '');
  return str;
}

function filterItems() {
  // Lấy giá trị từ ô tìm kiếm và chuyển đổi thành tiếng Việt không dấu
  var searchText = removeVietnameseSigns(document.getElementById("search-input-1").value.toLowerCase() + document.getElementById("search-input-2").value.toLowerCase());
  console.log(searchText);
  // Lặp qua các phần tử li và ẩn/hiển thị phù hợp
  var listItems = document.querySelectorAll("#admin-area li, #lecture-hall-area li, #domestic-area li, #other-areas li, #shopping-area li");
  listItems.forEach(function (item) {
    var textContent = removeVietnameseSigns(item.textContent.toLowerCase().trim());
    if (textContent.indexOf(searchText) !== -1) {
          item.style.display = "block";
      } else {
          item.style.display = "none";
      }
  });
  checkInput();
}

// Hàm kiểm tra khi input có chữ và hiển thị nút clear-input
function checkInput() {
  var searchInput1 = document.getElementById("search-input-1");
  var searchInput2 = document.getElementById("search-input-2");
  var clearInput = document.getElementById("clear-input");

  if (searchInput1.value.trim() !== "" || searchInput2.value.trim() !== "") {
      clearInput.style.display = "block";
  } else {
      clearInput.style.display = "none";
  }
}

// Hàm xoá sạch nội dung input khi bấm vào nút clear-input
function clearInput() {
  var searchInput1 = document.getElementById("search-input-1");
  var searchInput2 = document.getElementById("search-input-2");
  var clearInput = document.getElementById("clear-input");

  searchInput1.value = "";
  searchInput2.value = "";
  clearInput.style.display = "none";
  filterItems();
}