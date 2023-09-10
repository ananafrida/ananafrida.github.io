import { PARKING, icons } from "./constants.js";

var markersmain = [];
let text = "Google Maps";
export async function parkingLots(map, markers){
    let modalContent = document.querySelector(".parking-modal-content");
    let closeModal = document.querySelector(".parking-close-modal");
    let overlay = document.querySelector(".overlay");
    const close = function(){
      modalContent.classList.add("hidden-modal")
      overlay.classList.add("hidden-modal")
      map.setZoom(15)
      map.setCenter({ lat: 41.556240724638144, lng: -72.65683037211356 })
    };

      const response  = await fetch("/api/all").then(res=> res.json()).catch(console.error);
      const data = response?.data
      console.log(data);
      PARKING.forEach(({position, title, type, pic, description, link}, i) => {
        if(!data?.[i]) {
          console.log("NO data found for", title, i);
          return;
        }
        const marker = new google.maps.Marker({
        position: {
          lat: data[i].x,
          lng: data[i].y,
        },
        icon: icons[type].icon,
        });
        marker.addListener("click", () => {
          map.setZoom(17);
          map.setCenter(marker.getPosition());
          modalContent.classList.remove("hidden-modal");
          overlay.classList.remove("hidden-modal");
          document.getElementById("parking-header").innerHTML = title;
          document.getElementById("parking-desc").innerHTML = description;
          document.getElementById("parking-img").src = pic;
          document.getElementById("parking-maps").innerHTML = text.link(link);
        });
        /*modal closing*/
        closeModal.addEventListener("click", close);
        /*modal closing*/
        overlay.addEventListener("click", close);
        markersmain = markers;
        marker.setMap(null)
        document.getElementById("parkingBtn").addEventListener("click", hideMarkers);
        document.getElementById("parkingBtn").addEventListener("click", setMarker);
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