import { busStops } from "./busStops.js";
import { parkingLots } from "./parkingLots.js";
import { dining } from "./dining.js";
import { compost } from "./compost.js";
import { bikeParking } from "./bikeParking.js";
import { academics } from "./academics.js";
import { athletics } from "./athletics.js";

document.addEventListener("DOMContentLoaded", function () {
  var sidebarCollapse = document.getElementById("sidebarCollapse");
  var sidebar = document.getElementById("sidebar");

  sidebarCollapse.addEventListener("click", function () {
    sidebar.classList.toggle("active");
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

}
initMap();
// [END maps_map_simple]