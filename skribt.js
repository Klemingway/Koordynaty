function olicz() {
  longitude1=document.getElementById("da").value;
  longitude2=document.getElementById("db").value;
  latitude1=document.getElementById("sa").value;
  latitude2=document.getElementById("sb").value;
  var theta = longitude1 - longitude2;
  var distance = 60 * 1.1515 * (180/Math.PI) * Math.acos(
      Math.sin(latitude1 * (Math.PI/180)) * Math.sin(latitude2 * (Math.PI/180)) + 
      Math.cos(latitude1 * (Math.PI/180)) * Math.cos(latitude2 * (Math.PI/180)) * Math.cos(theta * (Math.PI/180)));
      var wyn=distance * 1.609344;
      document.getElementById("wynik").innerHTML=wyn.toFixed(2)+"km    "+(wyn*1000).toFixed(2)+"m    ";
      console.log(distance);
  
}
function konwert(){
  var s1 = document.getElementById("s1").value;
  var s2 = document.getElementById("s2").value;
  var s3 = document.getElementById("s3").value;
  var d1 = document.getElementById("d1").value;
  var d2 = document.getElementById("d2").value;
  var d3 = document.getElementById("d3").value;
  var ss1 = document.getElementById("ss1").value;
  var ss2 = document.getElementById("ss2").value;
  var ss3 = document.getElementById("ss3").value;
  var dd1 = document.getElementById("dd1").value;
  var dd2 = document.getElementById("dd2").value;
  var dd3 = document.getElementById("dd3").value;
  s1 = parseFloat(s1);
  s2 = parseFloat(s2);
  s3 = parseFloat(s3);
  d1 = parseFloat(d1);
  d2 = parseFloat(d2);
  d3 = parseFloat(d3);
  ss1 = parseFloat(ss1);
  ss2 = parseFloat(ss2);
  ss3 = parseFloat(ss3);
  dd1 = parseFloat(dd1);
  dd2 = parseFloat(dd2);
  dd3 = parseFloat(dd3);

  //dla pierwszego punktu
  var lat = s1 + s2/60 + s3/3600;
  var lon = d1 + d2/60 + d3/3600;
  if (document.getElementById("r2").checked) {
    lat = -lat; //jeśli wybrano południe, zmień znak na ujemny
  }
  if (document.getElementById("t2").checked) {
    lon = -lon; //jeśli wybrano zachód, zmień znak na ujemny
  }

  //dla drugiego punktu
  var lat2 = ss1 + ss2/60 + ss3/3600;
  var lon2 = dd1 + dd2/60 + dd3/3600;
  if (document.getElementById("r4").checked) {
    lat2 = -lat2;
  }
  if (document.getElementById("t4").checked) {
    lon2 = -lon2;
  }
  document.getElementById("sa").value=lat;
  document.getElementById("da").value=lon;
  document.getElementById("sb").value=lat2;
  document.getElementById("db").value=lon2;

}
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 52.2297, lng: 21.0122} // Domyślne położenie mapy (Warszawa)
  });

  // Pobranie wartości z pól tekstowych
  var lat1 = parseFloat(document.getElementById('lat1').value);
  var lng1 = parseFloat(document.getElementById('lng1').value);
  var lat2 = parseFloat(document.getElementById('lat2').value);
  var lng2 = parseFloat(document.getElementById('lng2').value);

  // Utworzenie znacznika 1
  var marker1 = new google.maps.Marker({
      position: {lat: lat1, lng: lng1},
      map: map,
      label: '1'
  });

  // Utworzenie znacznika 2
  var marker2 = new google.maps.Marker({
      position: {lat: lat2, lng: lng2},
      map: map,
      label: '2'
  });
}
function poka() {
  // Pobierz wartości z pól input
  var lat1 = document.getElementById("sa").value;
  var lng1 = document.getElementById("da").value;
  var lat2 = document.getElementById("sb").value;
  var lng2 = document.getElementById("db").value;

  // Utwórz markery dla punktów
  var marker1 = L.marker([lat1, lng1]).addTo(map);
  var marker2 = L.marker([lat2, lng2]).addTo(map);

  // Dodaj etykiety do markerów
  marker1.bindPopup("Punkt 1");
  marker2.bindPopup("Punkt 2");

  // Utwórz tablicę zawierającą wszystkie markery
  var markers = L.featureGroup([marker1, marker2]);

  // Ustaw widok mapy na obszar zawierający wszystkie markery
  map.fitBounds(markers.getBounds());
}
