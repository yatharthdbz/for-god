const apologyMessages = [
    "Sorry Diksha God, I really did not mean it in that way.",
];

const catBase = "https://cataas.com/cat";

function getRandomCatUrl() {
    const filters = ["", "?filter=mono", "?filter=pixel", "?filter=sepia", "?type=square"];
    return catBase + filters[Math.floor(Math.random() * filters.length)];
}

function loadNewContent() {
    // Random apology
    const randomMessage = apologyMessages[Math.floor(Math.random() * apologyMessages.length)];
    document.getElementById("message").textContent = randomMessage;

    // Random cats
    const catGrid = document.getElementById("cat-grid");
    catGrid.innerHTML = "";

    for (let i = 0; i < 4; i++) {
        const img = document.createElement("img");
        img.src = getRandomCatUrl();
        img.alt = "Adorable Cat";
        img.className = "cat-image";
        catGrid.appendChild(img);
    }
}

// Load content when page loads
window.onload = loadNewContent;