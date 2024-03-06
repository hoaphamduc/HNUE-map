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
  [21.037563219340893, 105.78387261332273],
  [21.037548198777404, 105.78444142805806],
  [21.037440551361414, 105.78443874496965],
  [21.03745056507781, 105.78407384495078],
  [21.037438047932216, 105.78406579568568],
  [21.037433041073676, 105.78405238024379],
  [21.037440551361414, 105.78403896480191],
  [21.03745056507781, 105.78403359862519],
  [21.037455571935766, 105.78386993023439]

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
  nhaC3.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaC3.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.037494326242005, 105.78374421706172], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}


// Info nhà C4

var nhaC4 = L.polygon([
  [21.037443054790582, 105.78376249150337],
  [21.037455571935766, 105.78377322385688],
  [21.03745056507781, 105.7839529907779],
  [21.03718019449884, 105.78394494151281],
  [21.03718019449884, 105.78389127974529],
  [21.037220249430398, 105.78389396283367],
  [21.03722775972886, 105.78376785768015],
  [21.03723527002695, 105.78375712532662]

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
  nhaC4.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaC4.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.037494326242005, 105.78374421706172], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info nhà D1, D2, D4

var nhaD124 = L.polygon([
  [21.038161537221455, 105.78381078709413],
  [21.03815152355284, 105.78422129961533],
  [21.03813399963117, 105.7842239827037],
  [21.03813149621363, 105.78426691211766],
  [21.037911195304414, 105.78426154594092],
  [21.03790869188312, 105.78421861652694],
  [21.03787614740244, 105.78421593343857],
  [21.03787114055864, 105.78437423565265],
  [21.037796037881286, 105.78437155256427],
  [21.037808554996815, 105.78380542091733]

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
  nhaD124.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaD124.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.03804219021729, 105.78404903411867], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info nhà D3
var nhaD3 = L.polygon([
  [21.038164040638502, 105.78381068684716],
  [21.038296721681732, 105.78381336993554],
  [21.03828420460723, 105.78437950158246],
  [21.038149020135595, 105.78437950158246],
  [21.03815402697008, 105.78417826995441],
  [21.03817405430626, 105.78417558686603],
  [21.038179061139893, 105.78410046039154],
  [21.038169047472465, 105.78408972803805],
  [21.038169047472465, 105.78406289715431],
  [21.038179061139893, 105.78405484788921],
  [21.03818406797336, 105.78391264420537],
  [21.03815903380436, 105.78391264420537]

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
  nhaD3.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaD3.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.03818907480665, 105.78376471996307], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info nhà H8
var nhaH8 = L.polygon([
  [21.038003821862752, 105.7853876454793],
  [21.03799881502323, 105.78565327122834],
  [21.037776010494266, 105.7856479050516],
  [21.037778513917797, 105.78538227930257]

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
  nhaH8.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaH8.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.037883657667848, 105.78534990549089], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info nhà M1, M2, M3, M4
var nhaM = L.polygon([
  [21.037528171357064, 105.7845752588726],
  [21.037513150790037, 105.785087728752],
  [21.037455571935766, 105.785087728752],
  [21.037455571935766, 105.78510382728223],
  [21.037062533075126, 105.78509041184041],
  [21.037062533075126, 105.78507431331015],
  [21.037017471228655, 105.7850689471334],
  [21.0370299884096, 105.78459404049121],
  [21.03707505025228, 105.78459404049121],
  [21.037080057122832, 105.7845430618121],
  [21.037425530785555, 105.7845537941656],
  [21.037425530785555, 105.78456184343071],
  [21.037465585651148, 105.78456452651908],
  [21.037468089079884, 105.7845725757842]
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
  nhaM.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaM.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.03725780091894, 105.78450500965118], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info nhà N
var nhaN = L.polygon([
  [21.036917333743286, 105.78535013060683],
  [21.036904816552873, 105.78583040342578],
  [21.036799672111957, 105.78583040342578],
  [21.036799672111957, 105.78577942474666],
  [21.036774637710316, 105.78577405856991],
  [21.036784651471486, 105.78534476443008]

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
  nhaN.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaN.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.0367247914678, 105.78547313729273], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}


// Info nhà K1
var nhaK1 = L.polygon([
  [21.03897764894967, 105.78273773640991],
  [21.038967635335936, 105.78319922761024],
  [21.03873231521919, 105.78319386143349],
  [21.038737322034056, 105.78300604524732],
  [21.038679743652953, 105.78300336215892],
  [21.038682247061296, 105.78292018641935],
  [21.038734818626644, 105.78292018641935],
  [21.038744832256047, 105.78273237023313],
  [21.038814927642953, 105.78273505332153],
  [21.038819934455045, 105.78271358861456],
  [21.03891005704384, 105.78271358861456],
  [21.03891005704384, 105.78273773640991]

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
  nhaK1.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaK1.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.038680962142024, 105.78296637234962], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info nhà K2
var nhaK2 = L.polygon([
  [21.039200451681328, 105.782979171275],
  [21.03919043808257, 105.78327699408447],
  [21.03905525443335, 105.78327699408447],
  [21.039062764639308, 105.78297380509825]

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
  nhaK2.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaK2.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.039126286970678, 105.7832668617139], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info nhà K3
var nhaK3 = L.polygon([
  [21.039202955080917, 105.78285851847535],
  [21.0391979482817, 105.78297657436379],
  [21.039142873479236, 105.78297657436379],
  [21.03914037007864, 105.78293901112654],
  [21.03906777144307, 105.78293901112654],
  [21.039065268041202, 105.78285315229857]

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
  nhaK3.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaK3.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
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
  [21.03853955271893, 105.78489929437639]

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
  nhaKT.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaKT.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.038531226216158, 105.78513470362036], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}


// Info nhà T1
var nhaT1 = L.polygon([
  [21.038554573182463, 105.78434471200755],
  [21.038852478729513, 105.7843527612727],
  [21.0388399617017, 105.78490279438934],
  [21.038544559540274, 105.78489474512426]

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
  nhaT1.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaT1.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.038542669242013, 105.78458709452437], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info nhà T2
var nhaT2 = L.polygon([
  [21.038682247061296, 105.7842854615855],
  [21.038679743652953, 105.78434717261811],
  [21.038554573182463, 105.78434448952973],
  [21.03855707659289, 105.7842854615855]

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
  nhaT2.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaT2.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.038542669242013, 105.78458709452437], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info nhà V
var nhaV = L.polygon([
  [21.038361810452184, 105.78496175814038],
  [21.038356803624698, 105.78512810961956],
  [21.037866133714665, 105.7851120110893],
  [21.037868637136672, 105.78494565961012],
  [21.03805138682979, 105.78495102578687],
  [21.038053890248694, 105.78492419490316],
  [21.03817405430626, 105.78492956107989],
  [21.03817405430626, 105.78495370887525]

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
  nhaV.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaV.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.03811551883931, 105.78491461906061], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info nhà CDTY
var CDTY = L.polygon([
  [21.03855707659289, 105.78329026179401],
  [21.03855707659289, 105.78331977576616],
  [21.040479683387375, 105.78338953606385],
  [21.040479683387375, 105.78336002209176]

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

function toggleInfoDivCDTY() {
  var infoDiv = document.getElementById('infoDivCDTY');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  CDTY.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    CDTY.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.038914821717466, 105.78331432193048], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info nhà TV
var nhaTV = L.polygon([
  [21.040389561748245, 105.78345131568648],
  [21.04037454146976, 105.78393695468218],
  [21.04003157803211, 105.78392622232869],
  [21.040049101730556, 105.7834379002446]

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
  nhaTV.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    nhaTV.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.04001756530523, 105.7836799710749], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info Sân đa năng
var SDN = L.polygon([
  [21.03981628671161, 105.78396892574736],
  [21.039803769764802, 105.78425601620339],
  [21.040394568507402, 105.78428014553222],
  [21.04040207864583, 105.78399307354273]

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

function toggleInfoDivSDN() {
  var infoDiv = document.getElementById('infoDivSDN');
  if (infoDiv.style.display === 'block') {
    infoDiv.style.display = 'none';
  } else {
    setTimeout(function() {
      infoDiv.style.display = 'block';
    }, 2000);
  }
  SDN.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    SDN.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.04025667948982, 105.78429755527353], 19, {
    duration: 1.5, 
    animate: true,
    easeLinearity: 0.5
});
}

// Info Chùa thánh chúa
var CTC = L.polygon([
  [21.039798762985786, 105.78353404998781],
  [21.039886381594307, 105.78396891343634],
  [21.03981628671161, 105.78396623034799],
  [21.039801266375314, 105.78425600389234],
  [21.039260533259778, 105.78423453918538],
  [21.039255526462505, 105.78429088404124],
  [21.039057757835383, 105.78436332742733],
  [21.03901269659248, 105.78440357375293],
  [21.038577103874918, 105.78421575756676],
  [21.03859462774445, 105.78336537771617],
  [21.038880016186976, 105.78337342698131],
  [21.038882519591947, 105.7835075814]
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
  CTC.setStyle({
    opacity: 0.8,
    fillOpacity: 0.2
  });

  setTimeout(function () {
    CTC.setStyle({
      opacity: 0,
      fillOpacity: 0
    });
  }, 2000);
  mymap.flyTo([21.039117839471388, 105.78391492366792], 19, {
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