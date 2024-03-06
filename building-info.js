// Info nhà hiệu bộ

var nhahieubo = L.polygon([
  [21.03762108716946, 105.78371055569922],
  [21.03736593667034, 105.78370519338678],
  [21.03738844996725, 105.78298128120896],
  [21.037643600427817, 105.78298664352141]
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

function toggleInfoDivNhaHieuBo() {
  var infoDiv = document.getElementById('infoDivNhaHieuBo');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  nhahieubo.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhahieubo.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  
  mymap.flyTo([21.037439688219646, 105.78331516196478], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
  });
}

// Info nhà A2

var nhaA2 = L.polygon([
  [21.039511182916044, 105.78532040119173],
  [21.039506178754355, 105.78557789325716],
  [21.03952338988057, 105.78558325767519],
  [21.039521191238894, 105.78565299510957],
  [21.039506178754355, 105.78565299510957],
  [21.039501174592516, 105.785907804966],
  [21.0393735684087, 105.78590512275697],
  [21.0393735684087, 105.78582197427751],
  [21.03940609548554, 105.78582197427751],
  [21.039416103815462, 105.78540354967119],
  [21.03938607882369, 105.78540354967119],
  [21.03939108298941, 105.78532040119173]
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

function toggleInfoDivA2() {
  var infoDiv = document.getElementById('infoDivA2');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  nhaA2.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaA2.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.03945579822238, 105.7852989435196], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info nhà A3

var nhaA3 = L.polygon([
  [21.039873981555353, 105.78559130430223],
  [21.039873981555353, 105.78566104173662],
  [21.03985646703086, 105.78566372394563],
  [21.039851462880613, 105.78592389822008],
  [21.039723856992776, 105.78591853380206],
  [21.039723856992776, 105.78583270311357],
  [21.039758886070906, 105.78583270311357],
  [21.03976889437745, 105.78541427850725],
  [21.03973886945585, 105.78541427850725],
  [21.039741371532877, 105.78532844781877],
  [21.039863973255898, 105.78533381223681],
  [21.039858844322897, 105.78558862209321]
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

function toggleInfoDivA3() {
  var infoDiv = document.getElementById('infoDivA3');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  nhaA3.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaA3.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.039801266375314, 105.78532040119173], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info vườn thực nghiệm

var VTN = L.polygon([
  [21.04015176019683, 105.78534454107287],
  [21.04014175191605, 105.7858541607857],
  [21.039871528080255, 105.78584879636766],
  [21.0398815363792, 105.78533381223681]
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

function openGoogleMapsForVTN() {
  var latitude = 21.040027118063747; 
  var longitude = 105.78531054929083; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

function toggleInfoDivVTN() {
  var infoDiv = document.getElementById('infoDivVTN');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  VTN.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    VTN.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.039801266375314, 105.78532040119173], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}


// Info nhà A4

var nhaA4 = L.polygon([
  [21.040324684024057, 105.78534990549089],
  [21.040319679889556, 105.7856047153473],
  [21.04033469229257, 105.78560739755632],
  [21.04033469229257, 105.78567713499072],
  [21.040319679889556, 105.7856798171997],
  [21.040309671620037, 105.78593999147417],
  [21.04018456819433, 105.78593462705614],
  [21.04018707026389, 105.78584879636766],
  [21.040219597164132, 105.78584879636766],
  [21.040229605439706, 105.78543037176134],
  [21.04019958061097, 105.78542768955232],
  [21.04020208268026, 105.78534722328186]
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

function toggleInfoDivA4() {
  var infoDiv = document.getElementById('infoDivA4');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  nhaA4.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaA4.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.040267185120243, 105.78533187197176], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info nhà B1

var nhaB1 = L.polygon([
  [21.037217745997488, 105.78267037868501],
  [21.037212739131554, 105.78276693820953],
  [21.03725780091894, 105.78276962041856],
  [21.03725780091894, 105.78290641307832],
  [21.037475599365866, 105.78291714191438],
  [21.037478102794438, 105.78267842531206]
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

function toggleInfoDivB1() {
  var infoDiv = document.getElementById('infoDivB1');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  nhaB1.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaB1.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.03732416343628, 105.78294965118342], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info nhà B2

var nhaB2 = L.polygon([
  [21.037610784448614, 105.78224390745166],
  [21.03759326046332, 105.78280985355379],
  [21.037475599365866, 105.78280985355379],
  [21.037485613079898, 105.78247457742692],
  [21.037455571935766, 105.78247189521791],
  [21.037455571935766, 105.782487988472],
  [21.037250290621994, 105.78248262405397],
  [21.037250290621994, 105.78246116638185],
  [21.037220249430398, 105.78245848417284],
  [21.037217745997488, 105.78260064125062],
  [21.037232766594297, 105.78260868787768],
  [21.03723527002695, 105.78262209892274],
  [21.03722775972886, 105.78263819217683],
  [21.03721524256454, 105.78264087438585],
  [21.037210235698517, 105.78287422657014],
  [21.037095077733536, 105.78287422657014],
  [21.037110098342712, 105.78238874673846],
  [21.037222752863254, 105.78239142894745],
  [21.03722775972886, 105.7823619246483],
  [21.037490619898467, 105.78237086545417],
  [21.03749312336499, 105.78224122524263]

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

function toggleInfoDivB2() {
  var infoDiv = document.getElementById('infoDivB2');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  nhaB2.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaB2.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.03735793817546, 105.7824343442917], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info nhà C1

var nhaC1 = L.polygon([
  [21.03718019449884, 105.78377813100816],
  [21.03717769106527, 105.78402221202852],
  [21.037187704799326, 105.78402757644655],
  [21.037192711666112, 105.78404366970064],
  [21.037187704799326, 105.7840543985367],
  [21.037175187631647, 105.78405976295473],
  [21.037167677330526, 105.78426092863084],
  [21.03704500902534, 105.78425824642183],
  [21.037057526203963, 105.78377276659015]

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

function toggleInfoDivC1() {
  var infoDiv = document.getElementById('infoDivC1');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  nhaC1.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaC1.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.037137948558595, 105.78374855294989], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info nhà C2

var nhaC2 = L.polygon([
  [21.0371742550829, 105.78418314456941],
  [21.03716924296171, 105.78428775072099],
  [21.037402306418958, 105.78429311513904],
  [21.037404812475675, 105.78423142433168],
  [21.03744240332109, 105.7842341065407],
  [21.03744240332109, 105.78419119119646]

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

function toggleInfoDivC2() {
  var infoDiv = document.getElementById('infoDivC2');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  nhaC2.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaC2.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.037137948558595, 105.78374855294989], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivC3() {
  var infoDiv = document.getElementById('infoDivC3');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.037494326242005, 105.78374421706172], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function openGoogleMapsForC4() {
  var latitude = 21.037494326242005; 
  var longitude = 105.78374421706172; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

function toggleInfoDivC4() {
  var infoDiv = document.getElementById('infoDivC4');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.037494326242005, 105.78374421706172], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info nhà D1, D2, D4

var nhaD124 = L.polygon([
  [21.038152456191458, 105.78381836414339],
  [21.03814243201535, 105.78417778015138],
  [21.038127395749942, 105.78426361083986],
  [21.038122383661133, 105.78437626361848],
  [21.037786573326926, 105.78437089920045],
  [21.037806621726332, 105.78380763530731]

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
  var latitude = 21.03804219021729; 
  var longitude = 105.78404903411867; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

function toggleInfoDivD124() {
  var infoDiv = document.getElementById('infoDivD124');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.03804219021729, 105.78404903411867], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivD3() {
  var infoDiv = document.getElementById('infoDivD3');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.03818907480665, 105.78376471996307], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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
  var latitude = 21.037883657667848; 
  var longitude = 105.78534990549089; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

function toggleInfoDivH8() {
  var infoDiv = document.getElementById('infoDivH8');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.037883657667848, 105.78534990549089], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivM1234() {
  var infoDiv = document.getElementById('infoDivM1234');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.03725780091894, 105.78450500965118], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivN() {
  var infoDiv = document.getElementById('infoDivN');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.0367247914678, 105.78547313729273], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivK1() {
  var infoDiv = document.getElementById('infoDivK1');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.038680962142024, 105.78296637234962], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivK2() {
  var infoDiv = document.getElementById('infoDivK2');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.039126286970678, 105.7832668617139], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivK3() {
  var infoDiv = document.getElementById('infoDivK3');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.039095308860723, 105.78294396400453], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivKT() {
  var infoDiv = document.getElementById('infoDivKT');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.038531226216158, 105.78513470362036], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivT1() {
  var infoDiv = document.getElementById('infoDivT1');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.038542669242013, 105.78458709452437], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivT2() {
  var infoDiv = document.getElementById('infoDivT2');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.038542669242013, 105.78458709452437], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivV() {
  var infoDiv = document.getElementById('infoDivV');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.03811551883931, 105.78491461906061], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivTV() {
  var infoDiv = document.getElementById('infoDivTV');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.04001756530523, 105.7836799710749], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivCTC() {
  var infoDiv = document.getElementById('infoDivCTC');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.038781898211674, 105.78383495574235], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivA5() {
  var infoDiv = document.getElementById('infoDivA5');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.040557663003472, 105.78565049910145], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivA6() {
  var infoDiv = document.getElementById('infoDivA6');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.040977854797603, 105.7853525876999], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivA8() {
  var infoDiv = document.getElementById('infoDivA8');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.04047779705717, 105.78523665624702], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivA9() {
  var infoDiv = document.getElementById('infoDivA9');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.040737070276787, 105.78423878844119], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info kí túc xá A10: căng tin
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

function toggleInfoDivA10() {
  var infoDiv = document.getElementById('infoDivA10');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.04046323762088, 105.78426431564917], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivA11() {
  var infoDiv = document.getElementById('infoDivA11');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.040843008631303, 105.7848553645986], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
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

function toggleInfoDivA12() {
  var infoDiv = document.getElementById('infoDivA12');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.04080760993697, 105.78427053649243], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}


// Info Hội trường 11.10
var HT1110 = L.polygon([
  [21.03849865754228, 105.78446209430695],
  [21.03848863338883, 105.78488588333131],
  [21.037796965172358, 105.78486979007722],
  [21.03777691677036, 105.78515946865082],
  [21.037631565775207, 105.78515946865082],
  [21.03763657788085, 105.78443527221681]

], {
  opacity: 0,        
  fillOpacity: 0     
}).addTo(mymap);


var infoDiv1110 = document.getElementById('infoDiv1110');

HT1110.on('click', function () {
  document.getElementById('infoDiv1110').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeinfoDiv1110');

  closeButton.addEventListener('click', function () {
    var infoDiv1110 = document.getElementById('infoDiv1110');
    infoDiv1110.style.display = 'none';
  });
});


mymap.on('click', function (e) {
  if (!HT1110.getBounds().contains(e.latlng)) {
    document.getElementById('infoDiv1110').style.display = 'none';
  }
});

function openGoogleMapsFor1110() {
  var latitude = 21.03786212246022; 
  var longitude = 105.78466057777405; 

  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;

  window.open(googleMapsUrl, '_blank');
}

function toggleInfoDiv1110() {
  var infoDiv = document.getElementById('infoDiv1110');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  mymap.flyTo([21.03786212246022, 105.78466057777405], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// --------------------------------------------------------------------------------------- //