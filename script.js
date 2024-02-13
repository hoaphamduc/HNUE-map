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