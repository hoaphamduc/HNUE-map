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

    // Set the content of the comment-action div
    commentActionDiv.innerHTML = `
      <center><span class="creat-post-span">Bình luận</span></center>
      <button class="close-div" onclick="hideCommentAction(${postId})"></button>
      <div style="position: absolute; width: 100%; height: 1px; background-color: #e5e5e5; top: 50px;"></div>
      <div class="comment-container" id="comment-container-${postId}"></div>
      <div style="position: absolute; width: 100%; height: 1px; background-color: #e5e5e5; bottom: 50px;"></div>
      <input type="text" placeholder="Để lại bình luận của bạn..." class="comment-input" id="comment-input-${postId}">
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
    const homeContent = document.getElementById('main-content');
  
    btn.addEventListener('click', function () {
        sidebar.classList.toggle('show');
        homeContent.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.querySelector('.sidebar');
  const btn = document.getElementById('open-menu');
  const mobileToolbar = document.getElementById('mobile-toolbar');
  const homeContent = document.getElementById('main-content');
  const appName = document.getElementById('app-name');
  // Hàm xử lý khi click ra ngoài sidebar
  function handleClickOutside(event) {
      if (!sidebar.contains(event.target) && event.target !== btn && event.target !== mobileToolbar && event.target !== appName) {
          sidebar.classList.remove('show');
          homeContent.classList.remove('show');
          removeDarken();
      }
  }

  // Sự kiện click ngoài sidebar
  document.addEventListener('click', handleClickOutside);

  // Sự kiện khi click vào button mở sidebar
  btn.addEventListener('click', function () {
      sidebar.classList.toggle('show');
      homeContent.classList.toggle('show');
      homeContent.classList.toggle('darkFilter');
  });
});

function removeDarken() {
  const homeContent = document.getElementById('main-content');
  homeContent.classList.remove('darkFilter');
}

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
}).fitWorld().setView([21.03749740008041, 105.783335342976], 18);

const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '<span id="groupInfo" onclick="toggleGroupInfo()" data-bs-toggle="tooltip" title="Xem thông tin nhóm">&copy; Nhóm nghiên cứu khoa học năm 2024</span>'
}).addTo(mymap);

// var maxBounds = L.latLngBounds(
//   L.latLng(21.027863833645036, 105.7683849334717),   // Tọa độ góc trái dưới của giới hạn
//   L.latLng(21.04615122410683, 105.79756736755371)    // Tọa độ góc phải trên của giới hạn
// );

// mymap.setMaxBounds(maxBounds);
// mymap.on('drag', function() {
//     mymap.panInsideBounds(maxBounds, { animate: false });
// });

// // Fit bounds to the maximum bounds
// mymap.fitBounds(maxBounds);

var zoomControl = L.control.zoom({
  position: 'bottomright' 
});
zoomControl.addTo(mymap);

// if (navigator.geolocation) {
//   // Hỏi quyền truy cập vị trí
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       var lat = position.coords.latitude;
//       var lon = position.coords.longitude;
      
//       // Tạo marker và thêm vào bản đồ
//       var marker = L.marker([lat, lon]).addTo(mymap).bindPopup('Vị trí của bạn').openPopup();
      
//       // Sử dụng watchPosition để theo dõi vị trí và cập nhật marker
//       var watchId = navigator.geolocation.watchPosition(
//         function (position) {
//           var lat = position.coords.latitude;
//           var lon = position.coords.longitude;

//           // Cập nhật vị trí của marker
//           marker.setLatLng([lat, lon]);
//         },
//         function (error) {
//           console.log('Error getting geolocation:', error.message);
//         }
//       );
//     },
//     function (error) {
//       console.log('Error getting geolocation:', error.message);
//     }
//   );
// } else {
//   console.log('Geolocation is not supported by this browser.');
// }

var HNUE = L.polygon([
  [21.03683472026718, 105.78238070011139],
  [21.03675711362668, 105.78519701957704],
  [21.03684223058507, 105.78519701957704],
  [21.036849740902603, 105.78517824411395],
  [21.038880016186976, 105.78526675701143],
  [21.038882519591947, 105.78540086746217],
  [21.038985159159534, 105.7854062318802],
  [21.03897264214289, 105.78589439392091],
  [21.041265742038803, 105.78597217798234],
  [21.041273252133305, 105.78533113002779],
  [21.041128056905922, 105.78532844781877],
  [21.04114307710843, 105.78477323055269],
  [21.04100539186213, 105.78476786613466],
  [21.04101790870796, 105.78408926725389],
  [21.040529750941104, 105.7840731739998],
  [21.040552281334804, 105.78333020210268],
  [21.03920066258902, 105.78328250555528],
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

// Lấy tọa độ khi click
mymap.on('click', function (e) {
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
    console.log('Latitude: ' + lat + ', Longitude: ' + lng);
});

var directionBoard = document.getElementById('direction-board');
var directionArrow = document.getElementById('directionArrow');
var openSearchMenu = document.getElementById('open-search-menu');

function toggleHide() {
  directionBoard.classList.toggle('hide');
  hideSocialNetworkDiv();
  if (directionBoard.classList.contains('hide')) {
    openSearchMenu.src = 'source-img/magnifying-glass-solid.svg';
    directionArrow.src = 'source-img/Icon ionic-md-arrow-dropdown.svg';
  } else {
    openSearchMenu.src = 'source-img/xmark-solid.svg';
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

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const homeContent = document.getElementById('main-content');

  sidebar.classList.remove('show');
  homeContent.classList.remove('show');
}

function toggleNotificationDiv() {
  var notificationDiv = document.getElementById("notification-div");
  var computedStyle = window.getComputedStyle(notificationDiv);
  var socialNetworkDiv = document.getElementById("social-network-div");
  if (computedStyle.display === "none") {
    notificationDiv.style.display = "block";
    socialNetworkDiv.classList.add('darkFilter');
  } else {
    notificationDiv.style.display = "none";
    socialNetworkDiv.classList.remove('darkFilter');
  }
}


function toggleSupportDiv() {
  var supportDiv = document.getElementById("support-div");
  var computedStyle = window.getComputedStyle(supportDiv);

  if (computedStyle.display === "none") {
    supportDiv.style.display = "block";
  } else {
    supportDiv.style.display = "none";
  }
  removeDarken();
  hideSidebar();
  
  hideInfomationPagesDiv();
  hideProductIntroductionDiv();
  hideHNUEIntroductionDiv();
  hideSocialNetworkDiv();
  hideDonateDiv();
}

function toggleSocialNetworkDiv() {
  var socialDiv = document.getElementById("social-network-div");
  var socialToolbar = document.getElementById("social-network-toolbar");
  var computedStyle = window.getComputedStyle(socialDiv);

  if (computedStyle.display === "none") {
    socialDiv.style.display = "block";
    socialToolbar.style.display = "block";
  } else {
    socialDiv.style.display = "none";
    socialToolbar.style.display = "none";
  }
  removeDarken();
  hideSidebar();
  hideInfomationPagesDiv();
  hideProductIntroductionDiv();
  hideHNUEIntroductionDiv();
  hideSupportDiv();
  hideDonateDiv();
}

function toggleHNUEIntroductionDiv() {
  var HNUEIntrductionDiv = document.getElementById("HNUE-introduction");
  var computedStyle = window.getComputedStyle(HNUEIntrductionDiv);

  if (computedStyle.display === "none") {
    HNUEIntrductionDiv.style.display = "block";
  } else {
    HNUEIntrductionDiv.style.display = "none";
  }
  removeDarken();
  hideSidebar();
  
  hideInfomationPagesDiv();
  hideProductIntroductionDiv();
  hideSocialNetworkDiv();
  hideSupportDiv();
  hideDonateDiv();
}

function toggleProductIntroductionDiv() {
  var ProductIntrductionDiv = document.getElementById("product-introduction");
  var computedStyle = window.getComputedStyle(ProductIntrductionDiv);

  if (computedStyle.display === "none") {
    ProductIntrductionDiv.style.display = "block";
  } else {
    ProductIntrductionDiv.style.display = "none";
  }
  removeDarken();
  hideSidebar();
  
  hideInfomationPagesDiv();
  hideHNUEIntroductionDiv();
  hideSocialNetworkDiv();
  hideSupportDiv();
  hideDonateDiv();
}

function toggleInfomationPagesDiv() {
  var InfomationPagesDiv = document.getElementById("infomation-pages");
  var computedStyle = window.getComputedStyle(InfomationPagesDiv);

  if (computedStyle.display === "none") {
    InfomationPagesDiv.style.display = "block";
  } else {
    InfomationPagesDiv.style.display = "none";
  }
  removeDarken();
  hideSidebar();
  
  hideProductIntroductionDiv();
  hideHNUEIntroductionDiv();
  hideSocialNetworkDiv();
  hideSupportDiv();
  hideDonateDiv();
}

function toggleDonateDiv() {
  var donateDiv = document.getElementById("donate-div");
  var computedStyle = window.getComputedStyle(donateDiv);

  if (computedStyle.display === "none") {
    donateDiv.style.display = "block";
  } else {
    donateDiv.style.display = "none";
  }
  removeDarken();
  hideSidebar();
  
  hideInfomationPagesDiv();
  hideProductIntroductionDiv();
  hideHNUEIntroductionDiv();
  hideSocialNetworkDiv();
  hideSupportDiv();
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
  var socialToolbar = document.getElementById("social-network-toolbar");
  socialDiv.style.display = "none";
  socialToolbar.style.display = "none";
}

function hideSupportDiv() {
  var supportDiv = document.getElementById("support-div");
  supportDiv.style.display = "none";
}

function hideDonateDiv() {
  var donateDiv = document.getElementById("donate-div");
  donateDiv.style.display = "none";
}

function hideEnterPostDiv() {
  var enterPost = document.getElementById("enter-post");
  enterPost.style.display = "none";
  var socialDiv = document.getElementById("social-network-div");
  socialDiv.classList.remove("darken");
}

document.addEventListener("click", function(event) {
  var enterPost = document.getElementById("enter-post");
  var socialDiv = document.getElementById("social-network-div");

  if (!enterPost.contains(event.target) && event.target.id !== "openEnterDiv" && event.target.id !== "textVN" && event.target.id !== "textEN") {
    enterPost.style.display = "none";
    socialDiv.classList.remove("darken");
  }
});

function openEnterPostDiv() {
  var enterPost = document.getElementById("enter-post");
  enterPost.style.display = "block";
  var socialDiv = document.getElementById("social-network-div");
  socialDiv.classList.add("darken");
}

function composeEmail() {
  var confirmation;
  var contentEnglish = document.querySelector('.contentEnglish');
  var contentVN = document.querySelector('.contentVN');

  if (contentEnglish && window.getComputedStyle(contentEnglish).display === 'block') {
    confirmation = confirm("Would you like to open the email application to send support email about HNUE map?");
  } else if (contentVN && window.getComputedStyle(contentVN).display === 'block') {
    confirmation = confirm("Bạn có muốn mở ứng dụng email để gửi email hỗ trợ về HNUE map không?");
  } else {
    console.error('Content element not found or not displayed!');
    return;
  }

  if (!confirmation) {
    return; 
  }

  var emailAddress = "hoaphamduc2399@gmail.com";
  var subject = "Hỗ trợ về HNUE map"; 
  var body = ""; 

  if (contentEnglish && window.getComputedStyle(contentEnglish).display === 'block') {
    subject = "Support regarding HNUE map";
  }

  var mailtoLink = "mailto:" + encodeURIComponent(emailAddress) +
                   "?subject=" + encodeURIComponent(subject) +
                   "&body=" + encodeURIComponent(body);

  window.location.href = mailtoLink;
}

function openGoogleForms(event) {
  var confirmation;
  var contentEnglish = document.querySelector('.contentEnglish');
  var contentVN = document.querySelector('.contentVN');

  if (contentEnglish && window.getComputedStyle(contentEnglish).display === 'block') {
    confirmation = confirm("Would you like to open the Google Forms page in a new tab?");
  } else if (contentVN && window.getComputedStyle(contentVN).display === 'block') {
    confirmation = confirm("Bạn có muốn mở trang Google Forms trong một tab mới không?");
  } else {
    console.error('Content element not found or not displayed!');
    return;
  }

  if (confirmation) {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScKPY1U0hpQpsgPCS5Trff4d1BUM9VXhhl3gvJiyull8k1X8g/viewform', '_blank');
  } else {
    event.preventDefault();
  }
}

function uploadImage() {
    document.getElementById('imageInput').click();
}

function setBackgroundImage() {
    var input = document.getElementById('imageInput');
  
    if (input.files && input.files[0]) {
          var file = input.files[0];
    
          // Kiểm tra kích thước tệp tin (20MB = 20 * 1024 * 1024 bytes)
          if (file.size > 20 * 1024 * 1024) {
            var contentEnglish = document.querySelector('.contentEnglish');
            var contentVN = document.querySelector('.contentVN');
            var alertMessage = '';
            if (contentEnglish && window.getComputedStyle(contentEnglish).display === 'block') {
                alertMessage = "File is too large. Please select a file under 20MB.";
            } else if (contentVN && window.getComputedStyle(contentVN).display === 'block') {
                alertMessage = "File quá lớn. Vui lòng chọn một tệp tin dưới 20MB.";
            } else {
                console.error('Không tìm thấy phần tử nội dung hoặc không hiển thị!');
                return; 
            }

            alert(alertMessage);
            return;
        }
  
        // Kiểm tra loại MIME của tệp tin chỉ cho phép ảnh
        if (!isValidImageFileType(file.type)) {
            var contentEnglish = document.querySelector('.contentEnglish');
            var contentVN = document.querySelector('.contentVN');
            var alertMessage = '';
        
            if (contentEnglish && window.getComputedStyle(contentEnglish).display === 'block') {
                alertMessage = "You are only allowed to select an image.";
            } else if (contentVN && window.getComputedStyle(contentVN).display === 'block') {
                alertMessage = "Bạn chỉ được phép chọn ảnh.";
            } else {
                console.error('Không tìm thấy phần tử nội dung hoặc không hiển thị!');
                return; 
            }
            alert(alertMessage);
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
  if (latitude === 0 && longitude === 0) {
      var contentEnglish = document.querySelector('.contentEnglish');
      var contentVN = document.querySelector('.contentVN');
      var alertMessage = '';
      if (contentEnglish && window.getComputedStyle(contentEnglish).display === 'block') {
        alertMessage = 'User has not shared their location!';
      } else if (contentVN && window.getComputedStyle(contentVN).display === 'block') {
        alertMessage = 'Người dùng chưa chia sẻ vị trí!';
      } else {
        console.error('Content element not found or not displayed!');
        return; 
      }
      alert(alertMessage);
      return; 
  }
  
  var confirmationMessage = '';
  var contentEnglish = document.querySelector('.contentEnglish');
  var contentVN = document.querySelector('.contentVN');

  if (contentEnglish && window.getComputedStyle(contentEnglish).display === 'block') {
      confirmationMessage = 'You will open Google Maps to see the location of the user who is sharing!';
  } else if (contentVN && window.getComputedStyle(contentVN).display === 'block') {
      confirmationMessage = 'Bạn sẽ mở Google Maps để xem vị trí của người dùng chia sẻ!';
  } else {
      console.error('Content element not found or not displayed!');
      return; 
  }

  var confirmation = confirm(confirmationMessage);
  if (confirmation) {
      const googleMapURL = `https://www.google.com/maps?q=${latitude},${longitude}`;
      window.open(googleMapURL, '_blank');
  }
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
  if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
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
}

function closeFullscreen() {
  exitFullscreen();
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
  str = str.replace(/[đ]/g, 'd');
  str = str.replace(/[ ]/g, '');
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

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

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

function toggleGroupInfo() {
  var infoTeam = document.getElementById("teamInfo");
  var style = window.getComputedStyle(infoTeam);

  if (style.display === "none") {
    infoTeam.style.display = "block";
  } else {
    infoTeam.style.display = "none";
  }
}

function closeGroupInfo() {
  var infoTeam = document.getElementById("teamInfo");
  infoTeam.style.display = "none";
}

function hideOtherDivs(clickedElement) {
  // Lặp qua tất cả các li trong nav list
  const navList = document.getElementById('nav_list');
  const navListItems = navList.getElementsByTagName('li');
  
  for (let i = 0; i < navListItems.length; i++) {
    const listItem = navListItems[i];
    const anchor = listItem.querySelector('a');
    const divId = anchor.getAttribute('onclick').replace('toggle', '');

    // Ẩn các khối div có id không giống với khối div được gọi bởi li được click
    if (divId && divId !== clickedElement) {
      const divToHide = document.getElementById(divId + 'Div');
      if (divToHide) {
        divToHide.style.display = 'none';
      }
    }
  }
}

// Ngăn chặn sự kiện phóng to trên các trình duyệt di động
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

function confirmRedirect() {
  var contentEnglish = document.querySelector('.contentEnglish');
  var contentVN = document.querySelector('.contentVN');
  var confirmationMessage = '';

  if (contentEnglish && window.getComputedStyle(contentEnglish).display === 'block') {
    confirmationMessage = "You will open the admissions page in a new tab!";
  } else if (contentVN && window.getComputedStyle(contentVN).display === 'block') {
    confirmationMessage = "Bạn sẽ mở trang tuyển sinh ở trang mới!";
  } else {
    console.error('Content element not found or not displayed!');
    return;
  }

  var answer = confirm(confirmationMessage);
  if (answer) {
    hideSidebar();
    window.open("https://hnue.edu.vn/Tin-t%E1%BB%A9c-S%E1%BB%B1-ki%E1%BB%87n/Th%C3%B4ng-b%C3%A1o/p/10436", "_blank");
  }
}



function toggleEmojiMenu(postId) {
  const input = $(`#comment-input-${postId}`);

  if (input.length === 0) {
      console.error("Input element not found");
      return;
  }

  input.emojioneArea({
      pickerPosition: "top",
      tones: false,
      autocomplete: false,
      events: {
          keyup: function (editor, event) {
              if (event.which === 13 && !event.shiftKey) {
                  event.preventDefault();
              }
          },
          focus: function (editor) {
              input.css('width', '150px'); 
          }
      }
  });

  const emojioneArea = input.data("emojioneArea");
  if (emojioneArea) {
      emojioneArea.setFocus(); 
  } else {
      console.error("emojioneArea not initialized");
  }
}




function clearInput2(postId) {
  const input = $(`#comment-input-${postId}`);
  const emojioneArea = input.data("emojioneArea");
  if (emojioneArea) {
      emojioneArea.setText('');
  } else {
      console.error("emojioneArea not initialized");
  }
}