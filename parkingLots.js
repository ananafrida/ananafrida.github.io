var markersmain = [];
export function parkingLots(map, markers){
    const iconBase =
    "http://maps.google.com/mapfiles/kml/shapes/";
    const icons = {
      parking: {
        icon: iconBase + "parking_lot_maps.png",
      },
      library: {
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
    const parkingLots = [
        {
          position: {lat: 41.561280, lng: -72.656197},
          title: "K Lot Parking",
          type: "parking",
        },
        {
          position: {lat: 41.558527, lng: -72.658445},
          title: "T Lot Parking",
          type: "parking",
        },
        {
          position: {lat: 41.558647, lng: -72.655639},
          title: "G Lot Parking",
          type: "parking",
        },
        {
          position: {lat: 41.558603, lng: -72.654497},
          title: "H Lot Parking",
          type: "parking",
        },
      ];

      parkingLots.forEach(({position, title, type}, i) => {
        const marker = new google.maps.Marker({
        position: position,
        icon: icons[type].icon,
        });
        markersmain = markers;
        marker.setMap(null)
        document.getElementById("parkingBtn").addEventListener("click", hideMarkers);
        document.getElementById("parkingBtn").addEventListener("click", setMarker);
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