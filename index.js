import { busStops } from "./busStops";
import { parkingLots } from "./parkingLots";
import { dining } from "./dining";
import { compost } from "./compost";
import { bikeParking } from "./bikeParking";
import { academics } from "./academics";
import { athletics } from "./athletics";

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
    zoom: 15,
    mapId: "c60343d395077993", 
    fullscreenControl: true,
    streetViewControl: false, 
    mapTypeControl: false,
  });

  parkingLots(map, markers);
  busStops(map, markers);
  dining(map, markers);
  compost(map, markers);
  bikeParking(map, markers);
  academics(map, markers);
  athletics(map, markers);
  console.log(markers);

}
initMap();
// [END maps_map_simple]
