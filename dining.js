var markersmain = [];
export function dining(map, markers){
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
    const dining = [
        {
          position: {lat: 41.561798, lng: -72.650945},
          title: "Grown Café",
          type: "dining",
        },
        {
          position: {lat: 41.557475, lng: -72.650565},
          title: "Red & Black Café",
          type: "dining",
        },
        {
          position: {lat: 41.554778102723084, lng: -72.65498871239876}, 
          title: "Star and Crescent Eating Club",
          type: "dining",
        },
        {
            position: {lat: 41.55391442793207, lng: -72.65358478074275}, 
            title: "WesWings",
            type: "dining",
        },
        {
            position: {lat: 41.552269, lng: -72.655065},
            title: "Summerfields",
            type: "dining",
        },
        {
            position: {lat: 41.553348, lng: -72.657833},
            title: "Pi Café",
            type: "dining",
        },
        {
            position: {lat: 41.553874, lng: -72.658509},
            title: "WesShop",
            type: "dining",
        },
        {
            position: {lat: 41.556929, lng: -72.656868},
            title: "Usdan Marketplace, Usdan Café, Daniel Family Commons",
            type: "dining",
        },
      ];

      dining.forEach(({position, title, type}, i) => {
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
        document.getElementById("diningBtn").addEventListener("click", hideMarkers);
        document.getElementById("diningBtn").addEventListener("click", setMarker);
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