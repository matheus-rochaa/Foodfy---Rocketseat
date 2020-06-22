const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

// Open picture
for (let card of cards) {
    card.addEventListener("click", function() {
        const cardId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('modal-content').src = `${cardId}`
    })
}

// Close picture
document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("modal-content").src = ""
})