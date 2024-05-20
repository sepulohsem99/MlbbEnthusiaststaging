// List of heroes categorized by their roles
const heroPool = {
    Tank: ["Atlas", "Barats", "Baxia", "Belerick", "Franco", "Gatotkaca", "Grock", "Hilda", "Hylos", "Johnson", "Khufra", "Lolita", "Minotaur", "Tigreal", "Uranus"],
    Fighter: ["Aldous", "Alpha", "Argus", "Badang", "Chou", "Dyrroth", "Freya", "Guinevere", "Hilda", "Jawhead", "Kaja", "Leomord", "Martis", "Masha", "Roger", "Ruby", "Silvanna", "Sun", "Terizla", "Thamuz", "X.Borg", "Yu Zhong"],
    Assassin: ["Alucard", "Fanny", "Gusion", "Hanzo", "Hanzo (Shadow)", "Hayabusa", "Helcurt", "Karina", "Lancelot", "Lapu-Lapu", "Ling", "Natalia", "Saber", "Selena"],
    Mage: ["Alice", "Aurora", "Cecilion", "Chang'e", "Esmeralda", "Eudora", "Faramis", "Gord", "Guinevere", "Harith", "Harith (Evos)", "Harith (Lightborn)", "Kagura", "Kimmy", "Lylia", "Lunox", "Luo Yi", "Nana", "Odette", "Pharsa", "Selena", "Vale", "Vexana", "Zhask", "Zilong"],
    Marksman: ["Beatrix", "Brody", "Bruno", "Clint", "Claude", "Granger", "Hanabi", "Irithel", "Karrie", "Kimmy", "Layla", "Lesley", "Miya", "Moskov", "Popol and Kupa", "Roger", "Wanwan", "Yi Sun-Shin"],
    Support: ["Angela", "Carmilla", "Diggie", "Estes", "Faramis", "Kaja", "Lolita", "Mathilda", "Nana", "Rafaela", "Selena", "Sylvanna", "Uranus"]
};

// Function to start the draft phase
function startDraft() {
    // Get the tournament name, blue team name, and red team name from the form
    const tournamentName = document.getElementById("tournamentName").value;
    const blueTeamName = document.getElementById("blueTeamName").value;
    const redTeamName = document.getElementById("redTeamName").value;

    // Display the hero pool based on categories
    displayHeroPool(heroPool);

    // Display the draft phase information
    displayDraftPhase(tournamentName, blueTeamName, redTeamName);
}

// Function to display the hero pool based on categories
function displayHeroPool(heroPool) {
    const heroPoolContainer = document.getElementById("heroPool");
    heroPoolContainer.innerHTML = "";

    for (const role in heroPool) {
        const heroes = heroPool[role];
        const roleHeader = document.createElement("h2");
        roleHeader.textContent = role;
        heroPoolContainer.appendChild(roleHeader);

        const heroList = document.createElement("ul");
        heroList.classList.add("hero-list");

        for (const hero of heroes) {
            const heroItem = document.createElement("li");
            heroItem.textContent = hero;
            heroList.appendChild(heroItem);
        }

        heroPoolContainer.appendChild(heroList);
    }

    heroPoolContainer.classList.remove("hidden");
}

// Function to display the draft phase information
function displayDraftPhase(tournamentName, blueTeamName, redTeamName) {
    const draftPhaseContainer = document.getElementById("draftPhase");
    draftPhaseContainer.innerHTML = `
        <h2>${tournamentName} Draft Phase</h2>
        <h3>Phase 1: ${blueTeamName}'s Ban</h3>
        <p>${blueTeamName} is banning a hero...</p>
    `;
    draftPhaseContainer.classList.remove("hidden");
}

// Add event listener to the Start Draft button
document.getElementById("startDraftButton").addEventListener("click", startDraft);
