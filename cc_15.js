// Task 1 Creating the Base Structure

document.addEventListener('DOMContentLoaded', function() {
    const riskDashboard = document.getElementById("riskDashboard");
    console.log("Risk Dashboard Loaded");
}); // When the document is loaded sucessfully log a message to the console

// Task 2 Adding Risk Items Dynamically

function addRiskItem(riskName, riskLevel, department){

    const divRiskDashboard = document.getElementById('riskDashboard')

    const riskCard = document.createElement('div'); // creating a new div element for risk cards
    riskCard.setAttribute('class','risk-cards'); // Setting the class of new risk cards 

    const heading = document.createElement('h3'); // Creating a heading as risk name
    heading.textContent = riskName;

    const paragraph = document.createElement('p'); // Creating a paragraph as risk level
    paragraph.textContent = `Risk Level: ${riskLevel}`;

    const label = document.createElement('label'); // Creating a label as the department name
    label.textContent = `Department: ${department}`;

    // Creating Resolve Button for Task 3

    const resolveButton = document.createElement('button'); // Creating Resolve Button
    resolveButton.textContent = "Resolve"; 

    // Creating Event Listener for Resolve Button so that it removes a risk card when the button is clicked and logs a message to the console

    resolveButton.addEventListener('click', () => {
        console.log(riskName, "Risk Card Removed.")
        riskCard.remove();
    });

    riskCard.appendChild(heading); // appending the Heading
    riskCard.appendChild(paragraph); // Appending the Paragraph
    riskCard.appendChild(label); // Appending the Label
    riskCard.appendChild(resolveButton); // Appending the resolve button


    riskDashboard.appendChild(riskCard); // Appending riskCard to riskDashboard
}

document.getElementById('newRiskBtn').addEventListener('click', () => { // Added an event listener to the new risk button
    const riskNameInput = document.getElementById("riskName");
    const riskLevelInput = document.getElementById("riskLevel");
    const departmentInput = document.getElementById("department");

    const riskName = riskNameInput.value; // Returns input entered in Risk Name
    const riskLevel = riskLevelInput.value; // Returns input entered in Risk Level
    const department = departmentInput.value; // Returns input entered in Department

    addRiskItem(riskName, riskLevel, department); // calling add risk item function to create a new risk card in the risk dashboard
    
})


// Test Cases for Task 2

addRiskItem("Data Breach", "High", "IT"); // Adding a new risk item
addRiskItem("Supply Chain Disruption", "Medium", "Operations"); // Adding a new risk item

// Task 3 Removing Risk Items 

