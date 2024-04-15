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
  var socialDiv = document.getElementById("social-network-div-unlogin");
  var computedStyle = window.getComputedStyle(socialDiv);

  if (computedStyle.display === "none") {
    socialDiv.style.display = "block";
  } else {
    socialDiv.style.display = "none";
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
  var socialDiv = document.getElementById("social-network-div-unlogin");
  socialDiv.style.display = "none";
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
}

function openEnterPostDiv() {
  var enterPost = document.getElementById("enter-post");
  enterPost.style.display = "block";
}

// slide
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2500);
}