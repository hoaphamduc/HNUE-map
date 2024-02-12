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

// Info nhà hiệu bộ

var nhahieubo = L.polygon([
  [21.03759826731647, 105.78301370143892],
  [21.037574928011193, 105.7836266547129],
  [21.037454950931714, 105.7836159176814],
  [21.03747994616458, 105.78301464391645]
], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);

var infoDivNhaHieuBo = document.getElementById('infoDivNhaHieuBo');

nhahieubo.on('click', function () {
  document.getElementById('infoDivNhaHieuBo').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivNhaHieuBo');

  closeButton.addEventListener('click', function () {
    var infoDivNhaHieuBo = document.getElementById('infoDivNhaHieuBo');
    infoDivNhaHieuBo.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhahieubo.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivNhaHieuBo').style.display = 'none';
  }
});

function openGoogleMapsForNhaHieuBo() {
  var latitude = 21.037439688219646; 
  var longitude = 105.78331516196478; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà A2

var nhaA2 = L.polygon([
  [21.03953178666788, 105.78532099596487],
  [21.03952178090288, 105.785911193595],
  [21.03937669723494, 105.78590582816199],
  [21.03940171167052, 105.78532099596487]
], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);

var infoDivA2 = document.getElementById('infoDivA2');

nhaA2.on('click', function () {
  document.getElementById('infoDivA2').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivA2');

  closeButton.addEventListener('click', function () {
    var infoDivA2 = document.getElementById('infoDivA2');
    infoDivA2.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaA2.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivA2').style.display = 'none';
  }
});

function openGoogleMapsForA2() {
  var latitude = 21.03945579822238; 
  var longitude = 105.7852989435196; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}