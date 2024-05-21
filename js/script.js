document.getElementById("draftForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    const tournamentName = document.getElementById("tournamentName").value;
    const blueTeamName = document.getElementById("blueTeamName").value;
    const redTeamName = document.getElementById("redTeamName").value;

    // Display response
    const responseElement = document.getElementById("response");
    responseElement.innerHTML = `
        <p>Tournament Name: ${tournamentName}</p>
        <p>Blue Team Name: ${blueTeamName}</p>
        <p>Red Team Name: ${redTeamName}</p>
        <p>Current Time: ${new Date().toLocaleString()}</p>
    `;
    responseElement.classList.remove("hidden");
});
