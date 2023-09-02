
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 59.349930,
            lng: 18.045120
        }
    });
  
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    var locations = [
        { lat: 55.681990, lng: 12.562640 },
        { lat: 60.170270, lng: 24.803710 },
        { lat: 59.911070, lng: 10.815820 },
        { lat: 52.509663, lng: 13.376481 }
    ];
  
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
  
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
  }
  