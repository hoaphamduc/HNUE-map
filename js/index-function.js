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

function hideSupportDiv() {
  var supportDiv = document.getElementById("support-div");
  supportDiv.style.display = "none";
}

function hideDonateDiv() {
  var donateDiv = document.getElementById("donate-div");
  donateDiv.style.display = "none";
}
