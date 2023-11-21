// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

const buttonGames = document.querySelector(".button-start");
const containerBig = document.querySelector("article.container-grid");


buttonGames.addEventListener("click", function () {
    containerBig.innerHTML = "";    
    // Ogni cella ha un numero progressivo, da 1 a 100.
    // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    for (let index = 0; index < 100; index++) {
        const currentSquare = createdSquare(index);
        // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
        currentSquare.addEventListener("click", function () {
            currentSquare.classList.toggle("bg-color");
        });
        containerBig.appendChild(currentSquare);
    }

    containerBig.style.display = "flex";
});

// ========== Function ==========
/**
 * funzione per creare una cella!
 */
function createdSquare(index) {
    const squareElement = document.createElement("div");
    squareElement.classList.add("square-class");
    squareElement.textContent = index + 1;
    return squareElement;
}



