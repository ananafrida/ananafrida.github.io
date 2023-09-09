var markersmain = [];
export function compost(map, markers){
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
    const compost = [
        {
          position: {lat: 41.551806, lng: -72.656722},
          title: "59 Home Ave. Compost",
          type: "compost",
        },
        {
          position: {lat: 41.558017, lng: -72.654545},
          title: "College of the Environment backyard Compost",
          type: "compost",
        },
        {
          position: {lat: 41.559101, lng: -72.662018},
          title: "Farm House Compost",
          type: "compost",
        },
      ];

      compost.forEach(({position, title, type}, i) => {
        const marker = new google.maps.Marker({
        position: position,
        icon: icons[type].icon,
        });
        marker.addListener("click", () => {
          map.setZoom(17);
          map.setCenter(marker.getPosition());
        });
        markersmain = markers;
        marker.setMap(null)
        document.getElementById("compostBtn").addEventListener("click", hideMarkers);
        document.getElementById("compostBtn").addEventListener("click", setMarker);
        function setMarker(){
          map.setZoom(15)
          map.setCenter({ lat: 41.556240724638144, lng: -72.65683037211356 })
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