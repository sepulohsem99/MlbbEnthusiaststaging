function startDraft() {
    const tournamentName = document.getElementById("tournamentName").value;
    const blueTeamName = document.getElementById("blueTeamName").value;
    const redTeamName = document.getElementById("redTeamName").value;

    const resultContainer = document.getElementById("resultContainer");
    
    const currentTime = new Date();
    const timeAgo = "Just now";

    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");

    resultDiv.innerHTML = `
        <h2>Tournament: ${tournamentName}</h2>
        <p>Blue Team: ${blueTeamName}</p>
        <p>Red Team: ${redTeamName}</p>
        <p>Submitted: ${timeAgo}</p>
        <button class="love-button">&#10084;</button>
    `;

    resultContainer.appendChild(resultDiv);

    const loveButton = resultDiv.querySelector(".love-button");
    loveButton.addEventListener("click", () => {
        loveButton.classList.toggle("liked");
    });
}

document.getElementById("startDraftButton").addEventListener("click", startDraft);
