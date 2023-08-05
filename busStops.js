var markersmain = [];
export function busStops(map, markers){
    const iconBase =
    "http://maps.google.com/mapfiles/kml/shapes/";
    const icons = {
      parking: {
        icon: iconBase + "parking_lot_maps.png",
      },
      bus: {
        icon: iconBase + "bus_maps.png",
      },
      gas: {
        icon: iconBase + "gas_stations_maps.png",
      },
      compost: {
        icon: iconBase + "shopping_maps.png",
      },
      dining: {
        icon: iconBase + "dining_maps.png",
      },
    };
    const busStops = [
        {
          position: {lat: 41.558832, lng: -72.661057},
          title: "Vine Street / Washington Street",
          type: "bus",
        },
        {
          position: {lat: 41.560827, lng: -72.649256},
          title: "Middletown Bus Terminal",
          type: "bus",
        },
        {
          position: {lat: 41.560586, lng: -72.655634},
          title: "High Street / Washington Bus Stop",
          type: "bus",
        },
      ];

      busStops.forEach(({position, title, type}, i) => {
        const marker = new google.maps.Marker({
        position: position,
        icon: icons[type].icon,
        });
        markersmain = markers;
        marker.setMap(null)
        document.getElementById("busBtn").addEventListener("click", hideMarkers);
        document.getElementById("busBtn").addEventListener("click", setMarker);
        function setMarker(){
          marker.setMap(map)
        }
        markersmain.push(marker);
      });
}

function setMapOnAll(map) {
    for (let i = 0; i < markersmain.length; i++) {
      markersmain[i].setMap(map);
    }
}
  
function hideMarkers() {
    setMapOnAll(null);
}