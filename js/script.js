// List to store user inputs
let inputList = [];

// Function to start the draft phase
function startDraft() {
    // Get the current timestamp
    const timestamp = new Date().getTime();

    // Get the tournament name, blue team name, and red team name from the form
    const tournamentName = document.getElementById("tournamentName").value;
    const blueTeamName = document.getElementById("blueTeamName").value;
    const redTeamName = document.getElementById("redTeamName").value;

    // Create a new input object
    const newInput = {
        timestamp: timestamp,
        tournamentName: tournamentName,
        blueTeamName: blueTeamName,
        redTeamName: redTeamName
    };

    // Add the new input to the inputList
    inputList.push(newInput);

    // Display the input list
    displayInputList();
}

// Function to display the input list
function displayInputList() {
    const inputListContainer = document.getElementById("inputList");
    inputListContainer.innerHTML = "";

    inputList.forEach(input => {
        const timeAgo = getTimeAgo(input.timestamp);
        const inputSection = document.createElement("div");
        inputSection.classList.add("input-section");

        const content = `
            <p>Tournament Name: ${input.tournamentName}</p>
            <p>Blue Team Name: ${input.blueTeamName}</p>
            <p>Red Team Name: ${input.redTeamName}</p>
            <p>Submitted ${timeAgo}</p>
            <button class="love-button" onclick="toggleLove(this)">Love</button>
        `;
        inputSection.innerHTML = content;
        inputListContainer.appendChild(inputSection);
    });
}

// Function to calculate time ago
function getTimeAgo(timestamp) {
    const now = new Date().getTime();
    const diff = now - timestamp;

    const minute = 60 * 1000;
    const hour = 60 * minute;

    if (diff < minute) {
        return `${Math.floor(diff / 1000)} seconds ago`;
    } else if (diff < hour) {
        return `${Math.floor(diff / minute)} minutes ago`;
    } else {
        return `${Math.floor(diff / hour)} hours ago`;
    }
}

// Function to toggle love button color
function toggleLove(button) {
    button.classList.toggle("loved");
}

// Add event listener to the Start Draft button
document.getElementById("startDraftButton").addEventListener("click", startDraft);
