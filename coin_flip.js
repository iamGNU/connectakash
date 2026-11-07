const coinButton = document.getElementById("coin-button");
const coin = document.getElementById("coin");
const result = document.getElementById("result");
const headsCount = document.getElementById("heads-count");
const tailsCount = document.getElementById("tails-count");
const totalCount = document.getElementById("total-count");
const resetButton = document.getElementById("reset");

const FACES = {
    Heads: { src: "/resources/flip-a-rs-10-indian-coin-head.png", alt: "₹10 coin showing heads" },
    Tails: { src: "/resources/flip-a-rs-10-indian-coin-tail.png", alt: "₹10 coin showing tails" },
};

// Preload the tails image so the first flip doesn't flash.
new Image().src = FACES.Tails.src;

let heads = 0;
let tails = 0;
let flipping = false;

function updateStats() {
    headsCount.textContent = heads;
    tailsCount.textContent = tails;
    totalCount.textContent = heads + tails;
}

function tossCoin() {
    if (flipping) return;
    flipping = true;
    coinButton.disabled = true;

    coin.classList.add("flip");
    result.textContent = "Flipping...";
    const toss = Math.random() < 0.5 ? "Heads" : "Tails";

    setTimeout(() => {
        coin.src = FACES[toss].src;
        coin.alt = FACES[toss].alt;
        result.textContent = toss;

        if (toss === "Heads") {
            heads++;
        } else {
            tails++;
        }
        updateStats();

        coin.classList.remove("flip");
        coinButton.disabled = false;
        coinButton.focus();
        flipping = false;
    }, 1000);
}

function resetGame() {
    heads = 0;
    tails = 0;
    updateStats();
    result.textContent = "Click the coin to toss";
}

coinButton.addEventListener("click", tossCoin);
resetButton.addEventListener("click", resetGame);
