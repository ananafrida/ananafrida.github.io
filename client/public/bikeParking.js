var markersmain = [];
export function bikeParking(map, markers){
    const iconBase =
    "http://maps.google.com/mapfiles/kml/shapes/";
    const icons = {
      bike: {
        icon: iconBase + "cycling_maps.png",
      },
    };
    const bikeParking = [
        {
          position: {lat: 41.551806, lng: -72.656722},
          title: "59 Home Ave. Compost",
          type: "bike",
        },
        {
          position: {lat: 41.558017, lng: -72.654545},
          title: "College of the Environment backyard Compost",
          type: "bike",
        },
        {
          position: {lat: 41.559101, lng: -72.662018},
          title: "Farm House Compost",
          type: "bike",
        },
      ];

      bikeParking.forEach(({position, title, type}, i) => {
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
        document.getElementById("bikeBtn").addEventListener("click", hideMarkers);
        document.getElementById("bikeBtn").addEventListener("click", setMarker);
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