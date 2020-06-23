const cards = document.querySelectorAll('.card')

// Open card
for (let card of cards) {
    card.addEventListener("click", function() {
        const cardId = card.getAttribute("id")
        window.location.href = `/description?id=${cardId}`
    })
}