
// $(document).ready(function () {

//   $('#sidebarCollapse').on('click', function () {
//       $('#sidebar').toggleClass('active');
//   });

// });

// [START maps_map_simple]
let map;

async function initMap() {
  
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 41.556240724638144, lng: -72.65683037211356 }, 
    zoom: 15,
    fullscreenControl: true,
    streetViewControl: false, 
    mapTypeControl: false,
  });

}
initMap();
// [END maps_map_simple]
