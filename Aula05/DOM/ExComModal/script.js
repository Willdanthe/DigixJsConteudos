document.addEventListener("DOMContentLoaded", function () { // Aqui está escrevento o evento DOM
    const modal = document.getElementById("modal");
    const openModalButton = document.getElementById("openModal");
    const closeModalButton = document.getElementById("closeModal");

    openModalButton.addEventListener('click', function() {
        modal.style.display = "block"
    })
    closeModalButton.addEventListener('click', function() {
        modal.style.display = "none"
    })
        
    }
)