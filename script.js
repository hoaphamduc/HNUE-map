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

var isMusicPlaying = false;
var backgroundMusic = document.getElementById("backgroundMusic");

function toggleImageBorderAndMusic() {
  var musicImage = document.getElementById("music");

  // Kiểm tra src của hình ảnh và thay đổi nó
  if (musicImage.src.endsWith("muted.png")) {
    musicImage.src = "source-img/music.png";
    playBackgroundMusic();
  } else {
    musicImage.src = "source-img/muted.png";
    pauseBackgroundMusic();
  }

  // Kiểm tra border và thay đổi nó
  if (musicImage.style.border === "3px solid red") {
    musicImage.style.border = "3px solid #000";
  } else {
    musicImage.style.border = "3px solid red";
  }
}

function playBackgroundMusic() {
  backgroundMusic.play();
  isMusicPlaying = true;
  backgroundMusic.volume = 0.1;
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



// Info nhà hiệu bộ

var nhahieubo = L.polygon([
  [21.037616240499375, 105.78370034694673],
  [21.037365634976485, 105.7836949825287],
  [21.037390695547757, 105.7829922437668],
  [21.037616240499375, 105.78300297260286]
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

// Info nhà A3

var nhaA3 = L.polygon([
  [21.039881925527332, 105.78533724552454],
  [21.039871919785867, 105.78592207772165],
  [21.039731839334685, 105.78591671228867],
  [21.039751850835778, 105.78532651465854]
], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);

var infoDivA3 = document.getElementById('infoDivA3');

nhaA3.on('click', function () {
  document.getElementById('infoDivA3').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivA3');

  closeButton.addEventListener('click', function () {
    var infoDivA3 = document.getElementById('infoDivA3');
    infoDivA3.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaA3.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivA3').style.display = 'none';
  }
});

function openGoogleMapsForA3() {
  var latitude = 21.039801266375314; 
  var longitude = 105.78532040119173; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info vườn thực nghiệm

var VTN = L.polygon([
  [21.04015218965353, 105.78533737645584],
  [21.040142183930207, 105.78585245802392],
  [21.03988703775853, 105.78583636172495],
  [21.039907049238757, 105.78534810732182]
], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);

var infoDivVTN = document.getElementById('infoDivVTN');

VTN.on('click', function () {
  document.getElementById('infoDivVTN').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivVTN');

  closeButton.addEventListener('click', function () {
    var infoDivVTN = document.getElementById('infoDivVTN');
    infoDivVTN.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!VTN.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivVTN').style.display = 'none';
  }
});

function openGoogleMapsForA3() {
  var latitude = 21.040027118063747; 
  var longitude = 105.78531054929083; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà A4

var nhaA4 = L.polygon([
  [21.04020715081659, 105.78534260283777],
  [21.040202147956858, 105.78593816590086],
  [21.040332222255206, 105.78593816590086],
  [21.040347230820792, 105.78534796827078]
], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);

var infoDivA4 = document.getElementById('infoDivA4');

nhaA4.on('click', function () {
  document.getElementById('infoDivA4').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivA4');

  closeButton.addEventListener('click', function () {
    var infoDivA4 = document.getElementById('infoDivA4');
    infoDivA4.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaA4.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivA4').style.display = 'none';
  }
});

function openGoogleMapsForA4() {
  var latitude = 21.040267185120243; 
  var longitude = 105.78533187197176; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà B1

var nhaB1 = L.polygon([
  [21.03748926090835, 105.78267064866736],
  [21.03748425795734, 105.7829067277194],
  [21.037214098353235, 105.7828959968534],
  [21.03723411019256, 105.78265991780138]
], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);

var infoDivB1 = document.getElementById('infoDivB1');

nhaB1.on('click', function () {
  document.getElementById('infoDivB1').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivB1');

  closeButton.addEventListener('click', function () {
    var infoDivB1 = document.getElementById('infoDivB1');
    infoDivB1.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaB1.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivB1').style.display = 'none';
  }
});

function openGoogleMapsForB1() {
  var latitude = 21.03732416343628; 
  var longitude = 105.78294965118342; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà B2

var nhaB2 = L.polygon([
  [21.03762480129206, 105.78222647207474],
  [21.037614771965373, 105.78280090063745],
  [21.037494419992427, 105.78279016365494],
  [21.037494419992427, 105.78247879116304],
  [21.037233657050844, 105.7824734226718],
  [21.037218613021057, 105.78288679649728],
  [21.037098260728058, 105.78288679649728],
  [21.03711330477001, 105.78241436926815],
  [21.037218613021057, 105.78241436926815],
  [21.037238671727103, 105.78233921039079],
  [21.037499434659907, 105.78233921039079],
  [21.03750444932722, 105.78222110358348],
  [21.03762480129206, 105.78222647207474]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivB2 = document.getElementById('infoDivB2');

nhaB2.on('click', function () {
  document.getElementById('infoDivB2').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivB2');

  closeButton.addEventListener('click', function () {
    var infoDivB2 = document.getElementById('infoDivB2');
    infoDivB2.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaB2.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivB2').style.display = 'none';
  }
});

function openGoogleMapsForB2() {
  var latitude = 21.037230376421423; 
  var longitude = 105.78290690593676; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà C1

var nhaC1 = L.polygon([
  [21.03718441633168, 105.78378189501747],
  [21.03718441633168, 105.78401810971081],
  [21.037199413499152, 105.78402884674239],
  [21.037199413499152, 105.78405032080538],
  [21.03717941727555, 105.78406105783692],
  [21.037174418219212, 105.78425969291995],
  [21.03708443517676, 105.78425969291995],
  [21.037089434236098, 105.78377115798597]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivC1 = document.getElementById('infoDivC1');

nhaC1.on('click', function () {
  document.getElementById('infoDivC1').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivC1');

  closeButton.addEventListener('click', function () {
    var infoDivC1 = document.getElementById('infoDivC1');
    infoDivC1.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaC1.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivC1').style.display = 'none';
  }
});

function openGoogleMapsForC1() {
  var latitude = 21.037137948558595; 
  var longitude = 105.78374855294989; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà C2

var nhaC2 = L.polygon([
  [21.037189368522238, 105.78418464024028],
  [21.037184369466246, 105.78428664203969],
  [21.037404327770986, 105.78428664203969],
  [21.037409326819585, 105.78423832539787],
  [21.037439321107698, 105.78423295688214],
  [21.037444320155153, 105.78419000875603]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivC2 = document.getElementById('infoDivC2');

nhaC2.on('click', function () {
  document.getElementById('infoDivC2').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivC2');

  closeButton.addEventListener('click', function () {
    var infoDivC2 = document.getElementById('infoDivC2');
    infoDivC2.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaC2.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivC2').style.display = 'none';
  }
});

function openGoogleMapsForC2() {
  var latitude = 21.037137948558595; 
  var longitude = 105.78374855294989; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà C3

var nhaC3 = L.polygon([
  [21.037564789328982, 105.78386784863781],
  [21.037554791242044, 105.78444227982395],
  [21.037449811288603, 105.7844369113082],
  [21.03746480842933, 105.78386784863781]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivC3 = document.getElementById('infoDivC3');

nhaC3.on('click', function () {
  document.getElementById('infoDivC3').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivC3');

  closeButton.addEventListener('click', function () {
    var infoDivC3 = document.getElementById('infoDivC3');
    infoDivC3.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaC3.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivC3').style.display = 'none';
  }
});

function openGoogleMapsForC3() {
  var latitude = 21.037494326242005; 
  var longitude = 105.78374421706172; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà C4

var nhaC4 = L.polygon([
  [21.03745498998619, 105.78376600255208],
  [21.037449990939116, 105.78395390060363],
  [21.03719503931591, 105.7839431635721],
  [21.03719503931591, 105.78388947841455],
  [21.037230032701817, 105.78388947841455],
  [21.037240030810533, 105.78374989700484]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivC4 = document.getElementById('infoDivC4');

nhaC4.on('click', function () {
  document.getElementById('infoDivC4').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivC4');

  closeButton.addEventListener('click', function () {
    var infoDivC4 = document.getElementById('infoDivC4');
    infoDivC4.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaC4.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivC4').style.display = 'none';
  }
});

function openGoogleMapsForC3() {
  var latitude = 21.037494326242005; 
  var longitude = 105.78374421706172; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà D1, D2, D4

var nhaD124 = L.polygon([
  [21.03816183790122, 105.78381415528476],
  [21.03815183985435, 105.78391078856843],
  [21.03793188265335, 105.78390005153692],
  [21.03792688362228, 105.78416310880908],
  [21.03815183985435, 105.78417384584058],
  [21.03815183985435, 105.78422216248238],
  [21.038141841806812, 105.78422216248238],
  [21.03813684278278, 105.78426511060844],
  [21.037916885559632, 105.7842597420927],
  [21.037881892335104, 105.78421679396665],
  [21.037876893302357, 105.78437248092365],
  [21.037801907791014, 105.78437248092365],
  [21.03781690489631, 105.78380878676901]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivD124 = document.getElementById('infoDivD124');

nhaD124.on('click', function () {
  document.getElementById('infoDivD124').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivD124');

  closeButton.addEventListener('click', function () {
    var infoDivD124 = document.getElementById('infoDivD124');
    infoDivD124.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaD124.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivD124').style.display = 'none';
  }
});

function openGoogleMapsForD124() {
  var latitude = 21.038050484637264; 
  var longitude = 105.78376597386799; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà D3
var nhaD3 = L.polygon([
  [21.038295046216756, 105.78381429460755],
  [21.038290047197886, 105.78391078856843],
  [21.038285110748518, 105.78437679850833],
  [21.038155073624633, 105.78437798876216],
  [21.038165071671305, 105.78423303883669],
  [21.038175069717287, 105.78423303883669],
  [21.038175069717287, 105.78417398516333],
  [21.038185067762594, 105.7841793536791],
  [21.038175069717287, 105.78391629640696],
  [21.038185067762594, 105.78381429460755]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivD3 = document.getElementById('infoDivD3');

nhaD3.on('click', function () {
  document.getElementById('infoDivD3').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivD3');

  closeButton.addEventListener('click', function () {
    var infoDivD3 = document.getElementById('infoDivD3');
    infoDivD3.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaD3.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivD3').style.display = 'none';
  }
});

function openGoogleMapsForD3() {
  var latitude = 21.03818907480665; 
  var longitude = 105.78376471996307; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}
// Info nhà H8
var nhaH8 = L.polygon([
  [21.038012666439183, 105.78536948678588],
  [21.03800766741081, 105.7856540181211],
  [21.037784626104546, 105.78564312189428],
  [21.03778770999693, 105.78536948678588]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivH8 = document.getElementById('infoDivH8');

nhaH8.on('click', function () {
  document.getElementById('infoDivH8').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivH8');

  closeButton.addEventListener('click', function () {
    var infoDivH8 = document.getElementById('infoDivH8');
    infoDivH8.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaH8.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivH8').style.display = 'none';
  }
});

function openGoogleMapsForH8() {
  var latitude = 21.03818907480665; 
  var longitude = 105.78376471996307; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà M1, M2, M3, M4
var nhaM = L.polygon([
  [21.03759326046332, 105.78455328941347],
  [21.037583246756526, 105.78514873981476],
  [21.03698242311643, 105.78513264656068],
  [21.036987429990113, 105.78451573848726]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivM1234 = document.getElementById('infoDivM1234');

nhaM.on('click', function () {
  document.getElementById('infoDivM1234').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivM1234');

  closeButton.addEventListener('click', function () {
    var infoDivM1234 = document.getElementById('infoDivM1234');
    infoDivM1234.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaM.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivM1234').style.display = 'none';
  }
});

function openGoogleMapsForM1234() {
  var latitude = 21.03725780091894; 
  var longitude = 105.78450500965118; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà N
var nhaN = L.polygon([
  [21.036959747642673, 105.78532818736727],
  [21.036939751386907, 105.78591872410065],
  [21.036684798890498, 105.78590798706915],
  [21.036699796108245, 105.78531745033577]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivN = document.getElementById('infoDivN');

nhaN.on('click', function () {
  document.getElementById('infoDivN').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivN');

  closeButton.addEventListener('click', function () {
    var infoDivN = document.getElementById('infoDivN');
    infoDivN.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaN.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivN').style.display = 'none';
  }
});

function openGoogleMapsForN() {
  var latitude = 21.0367247914678; 
  var longitude = 105.78547313729273; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà K1
var nhaK1 = L.polygon([
  [21.038970904199036, 105.78275163171931],
  [21.03896090620645, 105.7832079555588],
  [21.038730952192136, 105.7832079555588],
  [21.038735951196223, 105.78274626320356]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivK1 = document.getElementById('infoDivK1');

nhaK1.on('click', function () {
  document.getElementById('infoDivK1').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivK1');

  closeButton.addEventListener('click', function () {
    var infoDivK1 = document.getElementById('infoDivK1');
    infoDivK1.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaK1.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivK1').style.display = 'none';
  }
});

function openGoogleMapsForK1() {
  var latitude = 21.038680962142024; 
  var longitude = 105.78296637234962; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà K2
var nhaK2 = L.polygon([
  [21.03920627080365, 105.78298233037869],
  [21.03920627080365, 105.78311654327264],
  [21.039076297053274, 105.78311654327264],
  [21.039076297053274, 105.78297696186294]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivK2 = document.getElementById('infoDivK2');

nhaK2.on('click', function () {
  document.getElementById('infoDivK2').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivK2');

  closeButton.addEventListener('click', function () {
    var infoDivK2 = document.getElementById('infoDivK2');
    infoDivK2.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaK2.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivK2').style.display = 'none';
  }
});

function openGoogleMapsForK2() {
  var latitude = 21.039126286970678; 
  var longitude = 105.7832668617139; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà K3
var nhaK3 = L.polygon([
  [21.03921637813095, 105.7828590061322],
  [21.03921637813095, 105.7829663764474],
  [21.039081405397056, 105.7829663764474],
  [21.039076406404547, 105.78285363761643]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivK3 = document.getElementById('infoDivK3');

nhaK3.on('click', function () {
  document.getElementById('infoDivK3').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivK3');

  closeButton.addEventListener('click', function () {
    var infoDivK3 = document.getElementById('infoDivK3');
    infoDivK3.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaK3.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivK3').style.display = 'none';
  }
});

function openGoogleMapsForK3() {
  var latitude = 21.039095308860723; 
  var longitude = 105.78294396400453; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà KT
var nhaKT = L.polygon([
  [21.03882616756567, 105.78490922595851],
  [21.03882616756567, 105.78507028143126],
  [21.038976137519423, 105.78508101846278],
  [21.03903112646463, 105.78512933510463],
  [21.039026127470454, 105.78517765174642],
  [21.03853622522696, 105.78517228323066],
  [21.038551222258317, 105.784898488927]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivKT = document.getElementById('infoDivKT');

nhaKT.on('click', function () {
  document.getElementById('infoDivKT').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivKT');

  closeButton.addEventListener('click', function () {
    var infoDivKT = document.getElementById('infoDivKT');
    infoDivKT.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaKT.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivKT').style.display = 'none';
  }
});

function openGoogleMapsForKT() {
  var latitude = 21.038531226216158; 
  var longitude = 105.78513470362036; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà T1
var nhaT1 = L.polygon([
  [21.03854766825242, 105.78489309992261],
  [21.038842609569365, 105.7849038369541],
  [21.038852607569876, 105.78435087983101],
  [21.03856266528263, 105.78435087983101]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivT1 = document.getElementById('infoDivT1');

nhaT1.on('click', function () {
  document.getElementById('infoDivT1').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivT1');

  closeButton.addEventListener('click', function () {
    var infoDivT1 = document.getElementById('infoDivT1');
    infoDivT1.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaT1.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivT1').style.display = 'none';
  }
});

function openGoogleMapsForT1() {
  var latitude = 21.038542669242013; 
  var longitude = 105.78458709452437; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà T2
var nhaT2 = L.polygon([
  [21.038685719012175, 105.78428661335559],
  [21.038685719012175, 105.78433492999744],
  [21.03856074381754, 105.78433492999744],
  [21.03856074381754, 105.78428661335559]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivT2 = document.getElementById('infoDivT2');

nhaT2.on('click', function () {
  document.getElementById('infoDivT2').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivT2');

  closeButton.addEventListener('click', function () {
    var infoDivT2 = document.getElementById('infoDivT2');
    infoDivT2.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaT2.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivT2').style.display = 'none';
  }
});

function openGoogleMapsForT2() {
  var latitude = 21.038542669242013; 
  var longitude = 105.78458709452437; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà V
var nhaV = L.polygon([
  [21.037875565454517, 105.78494146163943],
  [21.03786556738842, 105.7851132541437],
  [21.03836047085427, 105.7851239911752],
  [21.038365469870772, 105.78495756718672]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivV = document.getElementById('infoDivV');

nhaV.on('click', function () {
  document.getElementById('infoDivV').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivV');

  closeButton.addEventListener('click', function () {
    var infoDivV = document.getElementById('infoDivV');
    infoDivV.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaV.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivV').style.display = 'none';
  }
});

function openGoogleMapsForV() {
  var latitude = 21.03811551883931; 
  var longitude = 105.78491461906061; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà CDTY
var CDTY = L.polygon([
  [21.038566726992354, 105.78332577606446],
  [21.038571726001937, 105.78327745942265],
  [21.040486334340915, 105.78335261864326],
  [21.040486334340915, 105.78339019825357]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivCDTY = document.getElementById('infoDivCDTY');

CDTY.on('click', function () {
  document.getElementById('infoDivCDTY').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivCDTY');

  closeButton.addEventListener('click', function () {
    var infoDivCDTY = document.getElementById('infoDivCDTY');
    infoDivCDTY.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!CDTY.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivCDTY').style.display = 'none';
  }
});

function openGoogleMapsForCDTY() {
  var latitude = 21.038914821717466; 
  var longitude = 105.78331432193048; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info nhà TV
var nhaTV = L.polygon([
  [21.040442476383372, 105.78339543973972],
  [21.04042747954243, 105.78395913389436],
  [21.039997569459935, 105.78394302834707],
  [21.040022564266124, 105.78337933419246]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivTV = document.getElementById('infoDivTV');

nhaTV.on('click', function () {
  document.getElementById('infoDivTV').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivTV');

  closeButton.addEventListener('click', function () {
    var infoDivTV = document.getElementById('infoDivTV');
    infoDivTV.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!nhaTV.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivTV').style.display = 'none';
  }
});

function openGoogleMapsForTV() {
  var latitude = 21.04001756530523; 
  var longitude = 105.7836799710749; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info Sân đa năng
var SDN = L.polygon([
  [21.03982676891435, 105.78397544432805],
  [21.0398117720114, 105.78425460714747],
  [21.04039165115876, 105.78427608121049],
  [21.040401649055283, 105.78399154987528]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivSDN = document.getElementById('infoDivSDN');

SDN.on('click', function () {
  document.getElementById('infoDivSDN').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivSDN');

  closeButton.addEventListener('click', function () {
    var infoDivSDN = document.getElementById('infoDivSDN');
    infoDivSDN.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!SDN.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivSDN').style.display = 'none';
  }
});

function openGoogleMapsForSDN() {
  var latitude = 21.04025667948982; 
  var longitude = 105.78429755527353; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info Chùa thánh chúa
var CTC = L.polygon([
  [21.03998565790031, 105.7834008082555],
  [21.039980658938184, 105.78395913389436],
  [21.039825691028437, 105.78395376537856],
  [21.03980569515738, 105.78425440226103],
  [21.03926080663769, 105.78423292819804],
  [21.03926080663769, 105.78429198187133],
  [21.03901585610325, 105.78439935218654],
  [21.038580942937376, 105.78421682265075],
  [21.038595939964228, 105.78336322864517],
  [21.038885882186708, 105.78337396567672]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivCTC = document.getElementById('infoDivCTC');

CTC.on('click', function () {
  document.getElementById('infoDivCTC').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivCTC');

  closeButton.addEventListener('click', function () {
    var infoDivCTC = document.getElementById('infoDivCTC');
    infoDivCTC.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!CTC.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivCTC').style.display = 'none';
  }
});

function openGoogleMapsForCTC() {
  var latitude = 21.038781898211674; 
  var longitude = 105.78383495574235; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info sân vận động
var SVD = L.polygon([
  [21.040396673539313, 105.78428116288529],
  [21.040371678795882, 105.78505959767023],
  [21.040206713384016, 105.78522065314296],
  [21.03903195441039, 105.78518307353264],
  [21.03903195441039, 105.78512938837508],
  [21.038981964461318, 105.78508107173325],
  [21.03885199051521, 105.78507570321749],
  [21.038866987514783, 105.78439927023193],
  [21.039016957427442, 105.78441537577923],
  [21.03928190390412, 105.78429726843252],
  [21.039276904918353, 105.78423821475921]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivSVD = document.getElementById('infoDivSVD');

SVD.on('click', function () {
  document.getElementById('infoDivSVD').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivSVD');

  closeButton.addEventListener('click', function () {
    var infoDivSVD = document.getElementById('infoDivSVD');
    infoDivSVD.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!SVD.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivSVD').style.display = 'none';
  }
});

function openGoogleMapsForSVD() {
  var latitude = 21.040301318576297; 
  var longitude = 105.78517080395068; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info kí túc xá A5
var ktxA5 = L.polygon([
  [21.040732625900958, 105.78536059925048],
  [21.040722628026646, 105.78595113598392],
  [21.040537667230666, 105.78595113598392],
  [21.040552664060527, 105.78536059925048]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivA5 = document.getElementById('infoDivA5');

ktxA5.on('click', function () {
  document.getElementById('infoDivA5').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivA5');

  closeButton.addEventListener('click', function () {
    var infoDivA5 = document.getElementById('infoDivA5');
    infoDivA5.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!ktxA5.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivA5').style.display = 'none';
  }
});

function openGoogleMapsForA5() {
  var latitude = 21.040557663003472; 
  var longitude = 105.78565049910145; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info kí túc xá A6
var ktxA6 = L.polygon([
  [21.041092603604415, 105.78537107812514],
  [21.041077606828928, 105.78596161485854],
  [21.040887647542064, 105.78595624634278],
  [21.040902644336683, 105.78537107812514]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivA6 = document.getElementById('infoDivA6');

ktxA6.on('click', function () {
  document.getElementById('infoDivA6').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivA6');

  closeButton.addEventListener('click', function () {
    var infoDivA6 = document.getElementById('infoDivA6');
    infoDivA6.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!ktxA6.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivA6').style.display = 'none';
  }
});

function openGoogleMapsForA6() {
  var latitude = 21.040977854797603; 
  var longitude = 105.7853525876999; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info kí túc xá A8
var ktxA8 = L.polygon([
  [21.040557780164406, 105.78465685654514],
  [21.040552781221475, 105.78494138788031],
  [21.040597771701936, 105.78494675639605],
  [21.040587773818554, 105.78522591921552],
  [21.040497792837993, 105.78522055069972],
  [21.040497792837993, 105.78494138788031],
  [21.04045280232734, 105.78493601936457],
  [21.04046280021978, 105.78465685654514]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivA8 = document.getElementById('infoDivA8');

ktxA8.on('click', function () {
  document.getElementById('infoDivA8').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivA8');

  closeButton.addEventListener('click', function () {
    var infoDivA8 = document.getElementById('infoDivA8');
    infoDivA8.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!ktxA8.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivA8').style.display = 'none';
  }
});

function openGoogleMapsForA8() {
  var latitude = 21.04047779705717; 
  var longitude = 105.78523665624702; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info kí túc xá A9
var ktxA9 = L.polygon([
  [21.040727072402746, 105.78407773296844],
  [21.040717074528043, 105.78436763281937],
  [21.04076706389482, 105.78436226430361],
  [21.0407570660228, 105.78464679563882],
  [21.040662086205256, 105.78464679563882],
  [21.040667085144523, 105.78436763281937],
  [21.040617095744224, 105.78436226430361],
  [21.040632092566067, 105.78407773296844]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivA9 = document.getElementById('infoDivA9');

ktxA9.on('click', function () {
  document.getElementById('infoDivA9').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivA9');

  closeButton.addEventListener('click', function () {
    var infoDivA9 = document.getElementById('infoDivA9');
    infoDivA9.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!ktxA9.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivA9').style.display = 'none';
  }
});

function openGoogleMapsForA9() {
  var latitude = 21.040737070276787; 
  var longitude = 105.78423878844119; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info kí túc xá A10
var ktxA10 = L.polygon([
  [21.040592811813966, 105.78406086524367],
  [21.040582813930254, 105.78443129283099],
  [21.040562818160833, 105.78443129283099],
  [21.04055282027511, 105.78451718908315],
  [21.040512828725547, 105.78452255759889],
  [21.040507829781077, 105.7846245593983],
  [21.04046283927343, 105.7846245593983],
  [21.0404828350563, 105.7840554967279]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivA10 = document.getElementById('infoDivA10');

ktxA10.on('click', function () {
  document.getElementById('infoDivA10').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivA10');

  closeButton.addEventListener('click', function () {
    var infoDivA10 = document.getElementById('infoDivA10');
    infoDivA10.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!ktxA10.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivA10').style.display = 'none';
  }
});

function openGoogleMapsForA10() {
  var latitude = 21.04046323762088; 
  var longitude = 105.78426431564917; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info kí túc xá A11
var ktxA11 = L.polygon([
  [21.0409879776261, 105.7847157831889],
  [21.0409879776261, 105.78497347194528],
  [21.041007973338445, 105.78497347194528],
  [21.041002974410617, 105.78525800328049],
  [21.040917992611742, 105.78525800328049],
  [21.040912993680898, 105.78510768483923],
  [21.04087300222801, 105.78510231632349],
  [21.040883000092244, 105.7847157831889]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivA11 = document.getElementById('infoDivA11');

ktxA11.on('click', function () {
  document.getElementById('infoDivA11').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivA11');

  closeButton.addEventListener('click', function () {
    var infoDivA11 = document.getElementById('infoDivA11');
    infoDivA11.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!ktxA11.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivA11').style.display = 'none';
  }
});

function openGoogleMapsForA11() {
  var latitude = 21.040843008631303; 
  var longitude = 105.7848553645986; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

// Info kí túc xá A12
var ktxA12 = L.polygon([
  [21.040832604607232, 105.78408263844086],
  [21.040812608871363, 105.784657069627],
  [21.041002568253912, 105.784657069627],
  [21.041022563964287, 105.78409337547241]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivA12 = document.getElementById('infoDivA12');

ktxA12.on('click', function () {
  document.getElementById('infoDivA12').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivA12');

  closeButton.addEventListener('click', function () {
    var infoDivA12 = document.getElementById('infoDivA12');
    infoDivA12.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!ktxA12.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivA12').style.display = 'none';
  }
});

function openGoogleMapsForA12() {
  var latitude = 21.04080760993697; 
  var longitude = 105.78427053649243; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

let currentLanguage = 'vi';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'vi' ? 'en' : 'vi';
    updateContentLanguage();
}

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


const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// Menu burger
// Lấy đối tượng burger và menu bằng ID
const burger = document.getElementById('menu-btn__burger');
const menu = document.getElementById('menu');

// Thêm sự kiện "click" cho burger
burger.addEventListener('click', function() {
  // Toggle giá trị của thuộc tính display
  menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
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


