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

    // Task 4 Categorizing Risks by Level

    let backgroundColor;
    if (riskLevel.toLowerCase() === 'high') {
        backgroundColor = 'red'; // High risk cards background color will be red
    } else if (riskLevel.toLowerCase() === 'medium') {
        backgroundColor = 'yellow'; // Medium risk cards background color will be yellow
    } else if (riskLevel.toLowerCase() === 'low') {
        backgroundColor = 'green'; // Low Risk cards background color will be green
    }

    riskCard.style.backgroundColor = backgroundColor; // Setting background color accorrding to the Risk Level

    // Creating Resolve Button for Task 3

    const resolveButton = document.createElement('button'); // Creating Resolve Button
    resolveButton.textContent = "Resolve"; 

    // Creating Event Listener for Resolve Button so that it removes a risk card when the button is clicked and logs a message to the console

    resolveButton.addEventListener('click', (event) => {
        console.log(riskName, "Risk Card Removed.")
        riskCard.remove();
    });

    riskCard.appendChild(heading); // appending the Heading
    riskCard.appendChild(paragraph); // Appending the Paragraph
    riskCard.appendChild(label); // Appending the Label
    riskCard.appendChild(resolveButton); // Appending the resolve button


    riskDashboard.appendChild(riskCard); // Appending riskCard to riskDashboard

    // Task 6 Handling Event Propagation

    // Adding Event Listener to risk cards so a console entry is created when a risk card is clicked

    riskCard.addEventListener('click', (event) => {
        console.log("Clicked on Risk Card:", riskName);

        event.stopPropagation(); // Clicking Inside of a risk will not trigger events in the dashboard
    })
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

// Task 5 Implementing Bulk Updates

document.getElementById('increaseRiskBtn').addEventListener('click', () => {
    const allRiskCards = document.querySelectorAll('.risk-cards');
    const riskCardsArray = Array.from(allRiskCards);

    riskCardsArray.forEach(card => {
        const RiskCardRiskLevel = card.querySelector('p'); // Select the paragraph element that contains risk level
        const riskLevelText = RiskCardRiskLevel.textContent; // Selecting the text content for risk levels

        if (riskLevelText === 'Risk Level: Low') {
            RiskCardRiskLevel.textContent = 'Risk Level: Medium'; // Update the text to Medium
            card.style.backgroundColor = 'yellow'; // Change background color to yellow for medium risk cards
        }
        else if (riskLevelText === 'Risk Level: Medium') {
            RiskCardRiskLevel.textContent = 'Risk Level: High'; // Update the text to High
            card.style.backgroundColor = 'red'; // Change background color to red for high risk level cards
        }
    });
});



// Test Cases for Task 2

addRiskItem("Data Breach", "High", "IT"); // Adding a new risk item
addRiskItem("Supply Chain Disruption", "Medium", "Operations"); // Adding a new risk item

// Test Cases for Task 3

addRiskItem("Market Fluctuations", "High", "Finance"); // Adding a new risk item

// Test Cases for Task 4 

addRiskItem("Cybersecurity Threat", "High", "IT"); // Adding a new risk Item
addRiskItem("HR Compliance Issue", "Low", "Human Resources"); // Adding a new Risk item

// Test Cases for Task 5

addRiskItem("Employee Retention", "Low", "HR"); // Adding a new risk item