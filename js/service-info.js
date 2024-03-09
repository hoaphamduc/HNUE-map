// Info winmart+ số 27 ngõ 165 xuân thuỷ

var WM27165 = L.polygon([
  [21.035851235744246, 105.78656226396564],
  [21.03587128440539, 105.78659445047381],
  [21.035738461975026, 105.78669637441637],
  [21.035715907210925, 105.78666418790819]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivWM27165 = document.getElementById('infoDivWM27165');

WM27165.on('click', function () {
  document.getElementById('infoDivWM27165').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivWM27165');

  closeButton.addEventListener('click', function () {
    var infoDivWM27165 = document.getElementById('infoDivWM27165');
    infoDivWM27165.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!WM27165.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivWM27165').style.display = 'none';
  }
});

function openGoogleMapsForWM27165() {
  var latitude = 21.035876874492814; 
  var longitude = 105.78656762838365; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

function toggleInfoDivWM27165() {
  var infoDiv = document.getElementById('infoDivWM27165');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 3000);
  }
  WM27165.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    WM27165.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 3000);
  mymap.flyTo([21.035876874492814, 105.78656762838365], 19, {
    duration: 2, 
    animate: true,
    easeLinearity: 0.5
  });
  toggleHide();
}

// Info winmart+ số 77 Trần quốc vượng

var WM77TQV = L.polygon([
  [21.0346721729676, 105.78491806983949],
  [21.034727307215594, 105.78501731157304],
  [21.034860130547415, 105.78493952751161],
  [21.034804996348576, 105.78482419252398]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivWM77TQV = document.getElementById('infoDivWM77TQV');

WM77TQV.on('click', function () {
  document.getElementById('infoDivWM77TQV').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivWM77TQV');

  closeButton.addEventListener('click', function () {
    var infoDivWM77TQV = document.getElementById('infoDivWM77TQV');
    infoDivWM77TQV.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!WM77TQV.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivWM77TQV').style.display = 'none';
  }
});

function openGoogleMapsForWM77TQV() {
  var latitude = 21.034743; 
  var longitude = 105.784939; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

function toggleInfoDivWM77TQV() {
  var infoDiv = document.getElementById('infoDivWM77TQV');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 3000);
  }
  WM77TQV.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    WM77TQV.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 3000);
  mymap.flyTo([21.034840081750197, 105.78488051891328], 19, {
    duration: 2, 
    animate: true,
    easeLinearity: 0.5
  });
  toggleHide();
}

// Info CK số 177 Xuân Thuỷ

var CK177XTLatLng = L.latLng(21.036429162538166, 105.78466057777405);
var CK177XTBounds = L.latLngBounds(CK177XTLatLng, CK177XTLatLng);

var CK177XT = L.marker(CK177XTLatLng, {
  opacity: 0,
  fillOpacity: 0,
}).addTo(mymap);

var infoDivCK177XT = document.getElementById('infoDivCK177XT');

CK177XT.on('click', function () {
  infoDivCK177XT.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivCK177XT');

  closeButton.addEventListener('click', function () {
    infoDivCK177XT.style.display = 'none';
  });
});

mymap.on('click', function (e) {
  if (!CK177XTBounds.contains(e.latlng)) {
    infoDivCK177XT.style.display = 'none';
  }
});

function openGoogleMapsForCK177XT() {
  var latitude = 21.036429162538166; 
  var longitude = 105.78466057777405; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

function toggleInfoDivCK177XT() {
  var infoDiv = document.getElementById('infoDivCK177XT');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 3000);
  }
  CK177XT.setOpacity(0.8);

  setTimeout(function () {
    CK177XT.setOpacity(0);
  }, 3000);
  mymap.flyTo([21.036429162538166, 105.78466057777405], 19, {
    duration: 2, 
    animate: true,
    easeLinearity: 0.5
  });
  toggleHide();
}

// Info Cửa hàng Xăng dầu Petrolimex Số 60

var XD171XT = L.polygon([
  [21.03633621189048, 105.78569054603577],
  [21.0363337058158, 105.78583270311357],
  [21.036128207549012, 105.78583002090456],
  [21.036133219705228, 105.78568786382678]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivXD171XT = document.getElementById('infoDivXD171XT');

XD171XT.on('click', function () {
  document.getElementById('infoDivXD171XT').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivXD171XT');

  closeButton.addEventListener('click', function () {
    var infoDivXD171XT = document.getElementById('infoDivXD171XT');
    infoDivXD171XT.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!XD171XT.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivXD171XT').style.display = 'none';
  }
});

function openGoogleMapsForXD171XT() {
  var latitude = 21.03634373011426; 
  var longitude = 105.78575760126115; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

function toggleInfoDivXD171XT() {
  var infoDiv = document.getElementById('infoDivXD171XT');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 3000);
  }
  XD171XT.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    XD171XT.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 3000);
  mymap.flyTo([21.03634373011426, 105.78575760126115], 19, {
    duration: 2, 
    animate: true,
    easeLinearity: 0.5
  });
  toggleHide();
}

// Info Trạm Xăng Dầu Quân Đội BQP

var XD107PVT = L.polygon([
  [21.040035851912883, 105.7861822575777],
  [21.040136092375718, 105.7861822575777],
  [21.04013358636498, 105.78636474895004],
  [21.040035851912883, 105.78636474895004]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDivXD107PVT = document.getElementById('infoDivXD107PVT');

XD107PVT.on('click', function () {
  document.getElementById('infoDivXD107PVT').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDivXD107PVT');

  closeButton.addEventListener('click', function () {
    var infoDivXD107PVT = document.getElementById('infoDivXD107PVT');
    infoDivXD107PVT.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!XD107PVT.getBounds().contains(e.latlng)) {
    document.getElementById('infoDivXD107PVT').style.display = 'none';
  }
});

function openGoogleMapsForXD107PVT() {
  var latitude = 21.040089155890687; 
  var longitude = 105.78627258539203; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

function toggleInfoDivXD107PVT() {
  var infoDiv = document.getElementById('infoDivXD107PVT');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 3000);
  }
  XD107PVT.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    XD107PVT.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 3000);
  mymap.flyTo([21.040089155890687, 105.78627258539203], 19, {
    duration: 2, 
    animate: true,
    easeLinearity: 0.5
  });
  toggleHide();
}
