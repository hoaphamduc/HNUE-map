var mymap = L.map('map', {
  zoomControl: false  // Tắt thanh zoom mặc định
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
  position: 'bottomright'  // Đặt ở góc dưới bên phải
});

zoomControl.addTo(mymap);


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    L.marker([lat, lon]).addTo(mymap)
      .bindPopup('Your Location').openPopup();
  }, function (error) {
    console.log('Error getting geolocation:', error.message);
  });
  } else {
  console.log('Geolocation is not supported by this browser.');
}

document.addEventListener('DOMContentLoaded', function () {
  // Get the necessary elements
  const sidebar = document.querySelector('.sidebar');
  const btn = document.getElementById('btn');
  const homeContent = document.querySelector('.home_content');

  // Add click event listener to the button
  btn.addEventListener('click', function () {
      // Toggle the 'thut' class on the sidebar
      sidebar.classList.toggle('thut');

      // Toggle the width and left position of homeContent
      homeContent.classList.toggle('thut');

      // You may want to add more styling adjustments or animations as needed
  });
});




// Lấy tọa độ khi click
mymap.on('click', function (e) {
  var lat = e.latlng.lat;
  var lng = e.latlng.lng;
  console.log('Latitude: ' + lat + ', Longitude: ' + lng);
});

// Tạo một đa giác (ví dụ là hình vuông) để đại diện cho vùng rộng
var polygon = L.polygon([
  [21.03759826731647, 105.78301370143892],
  [21.037574928011193, 105.7836266547129],
  [21.037454950931714, 105.7836159176814],
  [21.03747994616458, 105.78301464391645]
], {
  opacity: 0,        // Độ trong suốt của đường viền
  fillOpacity: 0     // Độ trong suốt của màu tô
}).addTo(mymap);

var infoDivA2 = document.getElementById('infoDivA2');

// Gắn sự kiện click cho đa giác
polygon.on('click', function () {
  // Hiển thị khối div khi đa giác được click
  document.getElementById('infoDivA2').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.querySelector('.close');

  // Gắn sự kiện click cho nút đóng
  closeButton.addEventListener('click', function () {
    // Ẩn khối div khi click nút đóng
    infoDivA2.style.display = 'none';
  });
});

mymap.on('click', function (e) {
  // Kiểm tra xem sự kiện click có xảy ra bên ngoài đa giác hay không
  if (!polygon.getBounds().contains(e.latlng)) {
    // Ẩn khối div khi click bên ngoài đa giác
    document.getElementById('infoDivA2').style.display = 'none';
  }
});

function openGoogleMaps() {
  // Replace "latitude" and "longitude" with your desired coordinates
  var latitude = 21.037439688219646; // Example latitude
  var longitude = 105.78331516196478; // Example longitude

  // Create the Google Maps URL with the coordinates
  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  // Open a new tab or window with the Google Maps URL
  window.open(googleMapsUrl, '_blank');
}

function redirectToAnotherPage() {
  var targetUrl = 'https://hnue.edu.vn/';
  window.open(targetUrl, '_blank');
}