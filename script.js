var mymap = L.map('map').setView([21.037138, 105.783182], 13);
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
