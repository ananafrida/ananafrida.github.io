import { ACADEMICS, icons } from "./constants";

var markersmain = [];
let text = "Google Maps";
export function academics(map, markers){
    let modalContent = document.querySelector(".academics-modal-content");
    let closeModal = document.querySelector(".academics-close-modal");
    let overlay = document.querySelector(".overlay");
    const close = function(){
      modalContent.classList.add("hidden-modal")
      overlay.classList.add("hidden-modal")
      map.setZoom(15)
      map.setCenter({ lat: 41.556240724638144, lng: -72.65683037211356 })
    };
      ACADEMICS.forEach(({position, title, type, pic, description, link}, i) => {

        const marker = new google.maps.Marker({
        position: position,
        icon: icons[type].icon,
        });
        marker.addListener("click", () => {
          map.setZoom(17);
          map.setCenter(marker.getPosition());
          modalContent.classList.remove("hidden-modal");
          overlay.classList.remove("hidden-modal");
          document.getElementById("academics-header").innerHTML = title;
          document.getElementById("academics-desc").innerHTML = description;
          document.getElementById("academics-img").src = pic;
          document.getElementById("academic-maps").innerHTML = text.link(link);
        });
        /*modal closing*/
        closeModal.addEventListener("click", close);
        /*modal closing*/
        overlay.addEventListener("click", close);
        markersmain = markers;
        marker.setMap(null)
        document.getElementById("academicsBtn").addEventListener("click", hideMarkers);
        document.getElementById("academicsBtn").addEventListener("click", setMarker);
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