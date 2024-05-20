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

document.addEventListener("copy", function(e) {
    e.preventDefault();
    alert("Bạn không được phép copy.");
});

function openBuildingOption() {
    var classroom = document.getElementById('direction-content-2');
    var building = document.getElementById('direction-content');
    var classroomOption = document.getElementById('classroom-option');
    var buildingOption = document.getElementById('building-option');
    var searchInput1 = document.getElementById('search-input-container');
    var searchInput2 = document.getElementById('search-input-container-2');

    building.style.display = "block";
    classroom.style.display = "none";
    buildingOption.style.borderBottom = "2px solid #2185D0";
    classroomOption.style.borderBottom = "none";
    buildingOption.style.opacity = "1";
    classroomOption.style.opacity = "0.3";
    searchInput1.style.display = "block";
    searchInput2.style.display = "none";
  }
  
function openClassroomOption() {
    var classroom = document.getElementById('direction-content-2');
    var building = document.getElementById('direction-content');
    var classroomOption = document.getElementById('classroom-option');
    var buildingOption = document.getElementById('building-option');
    var searchInput1 = document.getElementById('search-input-container');
    var searchInput2 = document.getElementById('search-input-container-2');
  
    building.style.display = "none";
    classroom.style.display = "block";
    buildingOption.style.borderBottom = "none";
    classroomOption.style.borderBottom = "2px solid #2185D0";
    buildingOption.style.opacity = "0.3";
    classroomOption.style.opacity = "1";
    searchInput1.style.display = "none";
    searchInput2.style.display = "block";
}

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

// Ngăn chặn sự kiện phóng to trên các trình duyệt di động
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

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

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Hàm filterItems
function filterItems() {
    var searchText = removeVietnameseSigns((document.getElementById("search-input-1").value.trim() + document.getElementById("search-input-2").value.trim()).toLowerCase());
    
    var listItems = document.querySelectorAll("#admin-area li, #lecture-hall-area li, #domestic-area li, #other-areas li, #shopping-area li");
    var count = 0;
    
    listItems.forEach(function (item) {
      var textContent = removeVietnameseSigns(item.textContent.trim().toLowerCase());
      if (textContent.indexOf(searchText) !== -1) {
        item.style.display = "block";
        count++;
      } else {
        item.style.display = "none";
      }
    });
  
    var resultVNSpan = document.getElementById("resultVN");
    var resultENSpan = document.getElementById("resultEN");
    
    if (searchText !== "") {
      resultVNSpan.innerText = count === 0 ? "Không có kết quả" : count === 1 ? "1 kết quả" : count + " kết quả";
      resultVNSpan.style.display = "block";
      resultENSpan.innerText = count === 0 ? "No result" : count === 1 ? "1 result" : count + " results";
      resultENSpan.style.display = "block";
    } else {
      resultVNSpan.style.display = "none";
      resultENSpan.style.display = "none";
    }
  
    var searchByGoogleButton = document.getElementById("searchByGoogleVN");
    
    if (count === 0) {
      searchByGoogleButton.style.display = "block";
    } else {
      searchByGoogleButton.style.display = "none";
    }

    checkInput();
}

function filterItems2() {
  var searchText = removeVietnameseSigns((document.getElementById("search-input-3").value.trim() + document.getElementById("search-input-4").value.trim()).toLowerCase());
  
  var listItems = document.querySelectorAll("#nha-A li, #nha-B li, #nha-C li, #nha-D li, #nha-K li, #nha-V li");
  var count = 0;
  
  listItems.forEach(function (item) {
    var textContent = removeVietnameseSigns(item.textContent.trim().toLowerCase());
    if (textContent.indexOf(searchText) !== -1) {
      item.style.display = "block";
      count++;
    } else {
      item.style.display = "none";
    }
  });

  var resultVNSpan = document.getElementById("resultVN");
  var resultENSpan = document.getElementById("resultEN");
  
  if (searchText !== "") {
    resultVNSpan.innerText = count === 0 ? "Không có kết quả" : count === 1 ? "1 kết quả" : count + " kết quả";
    resultVNSpan.style.display = "block";
    resultENSpan.innerText = count === 0 ? "No result" : count === 1 ? "1 result" : count + " results";
    resultENSpan.style.display = "block";
  } else {
    resultVNSpan.style.display = "none";
    resultENSpan.style.display = "none";
  }

  var searchByGoogleButton = document.getElementById("searchByGoogleVN");
  
  if (count === 0) {
    searchByGoogleButton.style.display = "block";
  } else {
    searchByGoogleButton.style.display = "none";
  }

  checkInput();
}

// Hàm kiểm tra khi input có chữ và hiển thị nút clear-input
function checkInput() {
  var searchInput1 = document.getElementById("search-input-1");
  var searchInput2 = document.getElementById("search-input-2");
  var searchInput3 = document.getElementById("search-input-3");
  var searchInput4 = document.getElementById("search-input-4");
  var clearInput = document.getElementById("clear-input");

  if (searchInput1.value.trim() !== "" || searchInput2.value.trim() !== "" || searchInput3.value.trim() !== "" || searchInput4.value.trim() !== "") {
      clearInput.style.display = "block";
  } else {
      clearInput.style.display = "none";
  }
}

// Hàm xoá sạch nội dung input khi bấm vào nút clear-input
function clearInput() {
  var searchInput1 = document.getElementById("search-input-1");
  var searchInput2 = document.getElementById("search-input-2");
  var searchInput3 = document.getElementById("search-input-3");
  var searchInput4 = document.getElementById("search-input-4");
  var clearInput = document.getElementById("clear-input");

  searchInput1.value = "";
  searchInput2.value = "";
  searchInput3.value = "";
  searchInput4.value = "";
  clearInput.style.display = "none";
  filterItems();
  filterItems2();
}

// Hàm mở Google Search
function openGoogleSearch() {
    var searchText = removeVietnameseSigns((document.getElementById("search-input-1").value.trim() + document.getElementById("search-input-2").value.trim()).toLowerCase());
    var googleSearchURL = "https://www.google.com/search?q=" + encodeURIComponent(searchText);
    window.open(googleSearchURL, "_blank");
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

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const homeContent = document.getElementById('main-content');
  
    sidebar.classList.remove('show');
    homeContent.classList.remove('show');
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
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var redHex = red.toString(16).padStart(2, '0');
  var greenHex = green.toString(16).padStart(2, '0');
  var blueHex = blue.toString(16).padStart(2, '0');

  var hexColor = '#' + redHex + greenHex + blueHex;

  return hexColor;
}

function playBackgroundMusic() {
  backgroundMusic.play();
  isMusicPlaying = true;
  backgroundMusic.volume = 0.2;
}

function pauseBackgroundMusic() {
  backgroundMusic.pause();
  isMusicPlaying = false;
}

document.getElementById("music").addEventListener("click", function() {
  if (!isMusicPlaying) {
    pauseBackgroundMusic();
  } else {
    playBackgroundMusic();
  }
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


document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const btn = document.getElementById('menu-btn');
    const homeContent = document.getElementById('main-content');
  
    btn.addEventListener('click', function () {
        sidebar.classList.toggle('show');
        homeContent.classList.toggle('show');
    });
});

var mymap = L.map('map', {
    zoomControl: false
  }).fitWorld().setView([21.03749740008041, 105.783335342976], 18);
  
const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '<span id="groupInfo" onclick="toggleGroupInfo()" data-bs-toggle="tooltip" title="Xem thông tin nhóm">Được phát triển bởi Phạm Đức Hoà</span>'
}).addTo(mymap);

// Lấy tọa độ khi click
mymap.on('click', function (e) {
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
    console.log('Latitude: ' + lat + ', Longitude: ' + lng);
});

var zoomControl = L.control.zoom({
    position: 'bottomright' 
});

zoomControl.addTo(mymap);

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
    fillOpacity: 0.25
}).addTo(mymap);


function removeDarken() {
  const homeContent = document.getElementById('main-content');
  homeContent.classList.remove('darkFilter');
}

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

var directionBoard = document.getElementById('direction-board');
var directionArrow = document.getElementById('directionArrow');
var openSearchMenu = document.getElementById('open-search-menu');

function toggleHide() {
  directionBoard.classList.toggle('hide');
  hideSocialNetworkDiv();
  hideInfomationPagesDiv();
  hideProductIntroductionDiv();
  hideHNUEIntroductionDiv();
  hideSupportDiv();
  hideDonateDiv();
  if (directionBoard.classList.contains('hide')) {
    openSearchMenu.src = 'source-img/magnifying-glass-solid.svg';
    directionArrow.src = 'source-img/Icon ionic-md-arrow-dropdown.svg';
  } else {
    openSearchMenu.src = 'source-img/xmark-solid.svg';
    directionArrow.src = 'source-img/close-direction-board.svg';
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