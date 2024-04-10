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

document.getElementById("close-social-network-div").addEventListener("click", function() {
  var notificationDiv = document.getElementById("notification-div");
  var socialNetworkDiv = document.getElementById("social-network-div");
  notificationDiv.style.display = "none";
  socialNetworkDiv.classList.remove('darkFilter');
});

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

