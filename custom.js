let today = new Date().getUTCDate(); // current date
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const modalClose = document.getElementById('modal-close'); 

let todaysCard = document.getElementById(today);

todaysCard.style.cursor = "pointer";
todaysCard.style.color = "white";
todaysCard.style.backgroundColor = "rgba(255, 0, 0)";

todaysCard.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal)


function openModal(){
  
    modal.style.display = 'block'; 
    
    if(today == 9) {
       modalText.textContent = 'Code promo du jour 9 is ... ';
    }
}

 
function closeModal() {
    modal.style.display = "none"; 
}

//ferme la modal si click outside the div
document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('m-cont');
    if (!container.contains(e.target)) {
        closeModal();
    }
});