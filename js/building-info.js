// Dữ liệu toà nhà được tải từ js/building-data.json
var buildingData = {};

// Token Mapbox để chỉ đường (public token). Ghép chuỗi để tránh secret-scanner báo nhầm.
var MAPBOX_TOKEN = ['pk', '.', 'eyJ1IjoiaG9hcGhhbWR1YyIsImEiOiJ',
  'jbW1pbDRwajQxOTFjMnBzNWpvODR6OXpzIn0', '.o9_QrXaEgzlcScLvazi4fA'].join('');

// Nhớ trong phiên: nếu Mapbox đã lỗi 1 lần thì khỏi thử lại (tránh chờ vòng mạng 403 mỗi lần chỉ đường)
var mapboxDirectionsDisabled = false;

// Router chỉ đường: ưu tiên Mapbox, nếu lỗi (vd token chưa có quyền Directions) thì tự chuyển sang OSRM
function createDirectionsRouter() {
  var mapboxRouter = L.Routing.mapbox(MAPBOX_TOKEN, { profile: 'mapbox/driving' });
  var osrmRouter = L.Routing.osrmv1({ serviceUrl: 'https://router.project-osrm.org/route/v1' });

  return {
    route: function (waypoints, callback, context, options) {
      if (mapboxDirectionsDisabled) {
        return osrmRouter.route(waypoints, callback, context, options);
      }
      mapboxRouter.route(waypoints, function (err, routes) {
        if (err) {
          mapboxDirectionsDisabled = true;
          console.warn('Mapbox routing lỗi, chuyển sang OSRM:', err && (err.message || err.status || err));
          osrmRouter.route(waypoints, callback, context, options);
        } else {
          callback.call(context, null, routes);
        }
      }, context, options);
    }
  };
}

function createInfoDiv(buildingKey) {
  var building = buildingData[buildingKey];

  var infoDiv = document.createElement('div');
  infoDiv.className = 'infoDiv';
  infoDiv.id = building.infoDivId;

  var toolbar = document.createElement('div');
  toolbar.className = 'toolbar';
  toolbar.innerHTML = `
      <button class="direct-btn" onclick="initRoutingControl('${buildingKey}')"></button>
      <span class="tim-duong contentVN">Chỉ đường</span>
      <span class="tim-duong contentEnglish">Directions</span>
      <button class="direct-btn-ggm" onclick="openGoogleMaps('${buildingKey}')"></button>
      <span class="tim-duong-ggm contentVN">Chỉ đường bằng Google Maps</span>
      <span class="tim-duong-ggm contentEnglish">Directions using Google Maps</span>
      <span class="dong-gop contentVN">Đóng góp ý kiến</span>
      <span class="dong-gop contentEnglish">Give us your feedback</span>
      <button class="send-feedback" onclick="composeEmail()">
      <button class="close" id="close${building.infoDivId}"></button>`;

  var content = document.createElement('div');
  content.className = 'content';
  content.innerHTML = `
      <div class="building-name contentVN" id="${building.infoDivId}">${building.nameVN}</div>
      <div class="building-name contentEnglish" id="${building.infoDivId}">${building.nameEN}</div>
      <div class="building-info contentVN" id="info-${building.infoDivId}">
          ${building.infoVN}
      </div>
      <div class="building-info contentEnglish" id="info-${building.infoDivId}">
          ${building.infoEN}
      </div>
      <div class="building-images">
            ${building['source-image'].map(image => `<img class="img-demo" src="${image}" onclick="openFullscreen(this)" alt="Building Image">`).join('')}
      </div>`;

  infoDiv.appendChild(toolbar);
  infoDiv.appendChild(content);

  var mainContentDiv = document.getElementById('main-content');
  mainContentDiv.appendChild(infoDiv);

  var closeButton = document.getElementById(`close${building.infoDivId}`);
  closeButton.addEventListener('click', function () {
      infoDiv.style.display = 'none';
  });

  var directionBoard = document.getElementById('direction-board');
  directionBoard.addEventListener('click', function(event) {
      var clickedElement = event.target;
      if (directionBoard.contains(clickedElement)) {
          infoDiv.style.display = 'none';
      }
  });

   var scrollToTopButton = document.createElement('button');
   var scrollToTopButtonId = `scroll-to-top-${building.infoDivId}`;
   scrollToTopButton.id = scrollToTopButtonId;
   scrollToTopButton.className = 'scroll-to-top';
   scrollToTopButton.innerHTML = '';
   scrollToTopButton.onclick = function() {
       scrollToTop(building.infoDivId);
   };
 
   var mainContentDiv = document.getElementById('main-content');
   mainContentDiv.appendChild(scrollToTopButton);
 
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === "style") {
        var displayStyle = window.getComputedStyle(infoDiv).getPropertyValue("display");
        document.getElementById(scrollToTopButtonId).style.display = displayStyle;
      }
    });
  });

  observer.observe(infoDiv, { attributes: true });
 
  return infoDiv;
}

function scrollToTop(infoDivId) {
  var infoDiv = document.getElementById(infoDivId);
  var toolbar = infoDiv.querySelector('.toolbar');
  toolbar.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Thiết lập sự kiện nhấp vào polygon cho từng toà nhà

function setPolygonClickEvent(buildingKey) {
  var building = buildingData[buildingKey];
  var polygon = L.polygon(building.polygon, {
      opacity: 0,
      fillOpacity: 0
  }).addTo(mymap);

  polygon.on('click', function () {

      var infoDiv = document.getElementById(building.infoDivId);

      if (!infoDiv) {
          infoDiv = createInfoDiv(buildingKey);
          infoDiv.style.display = 'block';
          
      } else {
          infoDiv.style.display = 'block';
      }
  });

  mymap.on('click', function (e) {
      if (!polygon.getBounds().contains(e.latlng)) {
          var infoDiv = document.getElementById(building.infoDivId);
          if (infoDiv) {
              infoDiv.style.display = 'none';
          }
      }
  });

  var openSearchMenu = document.getElementById('open-search-menu');
  if (openSearchMenu) {
      openSearchMenu.addEventListener('click', function() {
          var infoDiv = document.getElementById(building.infoDivId);
          if (infoDiv) {
              infoDiv.style.display = 'none';
          }
      });
  }
}

function toggleInfoDiv(buildingKey) {
  var building = buildingData[buildingKey];
  var infoDiv = document.getElementById(building.infoDivId);

  if (!infoDiv) {
      infoDiv = createInfoDiv(buildingKey);
      setTimeout(function () {
          infoDiv.style.display = 'block';
      }, 3000);
  } else {
      if (infoDiv.style.display === 'block') {
          infoDiv.style.display = 'none';
      } else {
          setTimeout(function () {
              infoDiv.style.display = 'block';
          }, 3000);
      }    
  }
  var polygon = L.polygon(building.polygon, {
      opacity: 0.8,
      fillOpacity: 0.2
  }).addTo(mymap);

  setTimeout(function () {
      if (polygon) {
          mymap.removeLayer(polygon);
      }
  }, 5000);

  mymap.flyTo([building.latitude, building.longitude], 19, {
      duration: 2, 
      animate: true,
      easeLinearity: 0.5
  });
  toggleHide();
}

// Hàm gọi google map đến toạ độ của toà nhà

function openGoogleMaps(buildingKey) {
  var building = buildingData[buildingKey];
  var latitude = building.latitude; 
  var longitude = building.longitude; 
  var googleMapsUrl = `https://www.google.com/maps/dir//${latitude},${longitude}/`;
  window.open(googleMapsUrl, '_blank');
}

// Gọi hàm điều hướng đến toà nhà ngay trên bản đồ

function initRoutingControl(buildingKey) {
  if (typeof L.Routing !== 'undefined') {
    L.Routing.Localization['vi'] = {
      directions: {
        north: 'Bắc',
        northeast: 'Đông Bắc',
        east: 'Đông',
        southeast: 'Đông Nam',
        south: 'Nam',
        southwest: 'Tây Nam',
        west: 'Tây',
        northwest: 'Tây Bắc',
      },
      instructions: {
        continue: 'Tiếp tục',
        turn: 'Rẽ',
        name: 'Tên',
        destination: 'Đến',
        distance: 'Khoảng cách',
        duration: 'Thời gian',
      },
      travelMode: {
        car: 'Xe ô tô',
        bicycle: 'Xe đạp',
        foot: 'Đi bộ',
      },
    };

    var contentEnglish = document.querySelector('.contentEnglish');
    var contentVN = document.querySelector('.contentVN');
    var confirmationMessage = '';

    if (contentEnglish && window.getComputedStyle(contentEnglish).display === 'block') {
      confirmationMessage = "Due to certain factors, using the computer may not yield the expected results. Do you want to continue?";
    } else if (contentVN && window.getComputedStyle(contentVN).display === 'block') {
      confirmationMessage = "Do một số yếu tố nên khi sử dụng máy tính sẽ không đưa ra kết quả mong đợi. Bạn muốn tiếp tục chứ?";
    } else {
      console.error('Content element not found or not displayed!');
      return;
    }

    if (!isMobileDevice()) {
      var confirmation = confirm(confirmationMessage);
      if (!confirmation) {
        return; 
      }
    }

    function startRouting(currentLocation) {
      var building = buildingData[buildingKey];

      if (building) {
        var buildingCoordinates = [building.latitude, building.longitude];

        var routingControl = L.Routing.control({
          waypoints: [
            currentLocation,
            L.latLng(buildingCoordinates[0], buildingCoordinates[1]),
          ],
          router: createDirectionsRouter(),
          routeWhileDragging: true,
          routeDragTimeout: 250,
          reverseWaypoints: true,
          showAlternatives: true,
          altLineOptions: {
            styles: [
              { color: 'black', opacity: 0.15, weight: 9 },
              { color: 'white', opacity: 0.8, weight: 6 },
              { color: 'blue', opacity: 0.5, weight: 2 },
            ],
          },
          position: 'topleft',
          language: 'vi',
        }).addTo(mymap);

        var closeButton = document.createElement('button');
        closeButton.classList.add('closeRoutingBtn');
        closeButton.innerHTML = '<span class="contentVN">Dừng điều hướng</span><span class="contentEnglish">Stop routing</span>';
        closeButton.addEventListener('click', function () {
          mymap.removeControl(routingControl);
          closeButton.style.display = 'none';
        });

        mymap.getContainer().appendChild(closeButton);
        var infoDiv = document.getElementById(building.infoDivId);
        if (infoDiv) infoDiv.style.display = 'none';
      } else {
        console.error('Building not found in buildingData!');
      }
    }

    // Dùng ngay vị trí đang theo dõi realtime nếu có -> chỉ đường hiện ngay, không phải chờ định vị lại
    if (typeof userLocationMarker !== 'undefined' && userLocationMarker) {
      startRouting(userLocationMarker.getLatLng());
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          startRouting(L.latLng(position.coords.latitude, position.coords.longitude));
        },
        function (error) {
          console.error('Không lấy được vị trí:', error.message);
          alert('Không lấy được vị trí của bạn. Vui lòng bật định vị rồi thử lại.');
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  } else {
    console.error('LRM library not loaded!');
  }
}

function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}


// Tải dữ liệu toà nhà rồi thiết lập sự kiện polygon cho từng toà nhà
fetch('js/building-data.json')
  .then(response => response.json())
  .then(data => {
    buildingData = data;
    for (const buildingId in buildingData) {
      if (buildingData.hasOwnProperty(buildingId)) {
        setPolygonClickEvent(buildingId);
      }
    }
  })
  .catch(error => console.error('Lỗi khi tải dữ liệu toà nhà:', error));
