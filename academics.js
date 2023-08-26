import { ACADEMICS, icons } from "./constants";

var markersmain = [];
export function academics(map, markers){
    let modalContent = document.querySelector(".academics-modal-content");
    let closeModal = document.querySelector(".academics-close-modal");
      ACADEMICS.forEach(({position, title, type, pic, description}, i) => {

        const marker = new google.maps.Marker({
        position: position,
        icon: icons[type].icon,
        });
        marker.addListener("click", () => {
          map.setZoom(17);
          map.setCenter(marker.getPosition());
          modalContent.classList.remove("hidden-modal");
          document.getElementById("academics-header").innerHTML = title;
          document.getElementById("academics-desc").innerHTML = description;
          document.getElementById("academics-img").src = pic;
        });
        /*modal closing*/
        closeModal.addEventListener("click",() =>{
          modalContent.classList.add("hidden-modal")
          map.setZoom(15)
          map.setCenter({ lat: 41.556240724638144, lng: -72.65683037211356 })
        });
        /*modal closing*/
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