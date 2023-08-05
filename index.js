import { busStops } from "./busStops";
import { parkingLots } from "./parkingLots";

$(document).ready(function () {

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

});

// [START maps_map_simple]
let map;

var markers = [];
async function initMap() {
  
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 41.556240724638144, lng: -72.65683037211356 }, 
    zoom: 16,
    mapId: "c60343d395077993", 
    fullscreenControl: true,
    streetViewControl: false, 
    mapTypeControl: false,
  });

  parkingLots(map, markers);
  busStops(map, markers);
  console.log(markers);

}
initMap();
// [END maps_map_simple]
