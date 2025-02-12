document.addEventListener("DOMContentLoaded", function() {
});

function loadCharacter(characterKey) {
    const character = characters[characterKey];

    // Load Header Section ==================================================================
    // Get the heading section in the main html file
    const headingSection = document.getElementById('heading-container');
    headingSection.innerHTML = ''; // Clear existing content

    // Set the class of the container
    headingSection.classList.add('heading-section');

    // Create a new h2 element for the heading and append it to heading section
    const heading = document.createElement('h1');
    heading.textContent = `${character.name}`;
    headingSection.appendChild(heading);

    // Create an image element for the character image
    const headingImage = document.createElement('img');
    headingImage.classList.add('character-image-large');
    headingImage.src = character.image;
    headingImage.alt = `${character.name}`;
    headingSection.appendChild(headingImage);

    // Create a paragraph element for the character level and append it to heading section
    const characterDetails = document.createElement('p');
    characterDetails.innerHTML = `<strong>Level:</strong> ${character.level}`;
    headingSection.appendChild(characterDetails);

    // Create a paragraph element for the Class and append it to heading section
    const characterClass = document.createElement('p');
    characterClass.innerHTML = `<strong>Class:</strong> ${character.class}`;
    headingSection.appendChild(characterClass);

    // Create a paragraph element for the Subclass and append it to heading section
    const characterSubClass = document.createElement('p');
    characterSubClass.innerHTML = `<strong>Backgound:</strong> ${character.subClass}`;
    headingSection.appendChild(characterSubClass);

    // Load Basic Details Section ===========================================================
    // Get the basic info container in the main html file
    const basicStatsContainer = document.getElementById('basic-info-container');
    basicStatsContainer.innerHTML = ''; // Clear existing content

    // Set the class of the container
    basicStatsContainer.classList.add('stats-list');

    // Create a new h2 element for the heading and append it to basic info container
    const basicStatsHeading = document.createElement('h2');
    basicStatsHeading.textContent = 'Basic Info';
    basicStatsContainer.appendChild(basicStatsHeading);

    // Create a paragraph element for the speed of the character and append it to basic info container
    const speed = document.createElement('p');
    speed.innerHTML = `<strong>Speed:</strong> ${character.speed}`;
    basicStatsContainer.appendChild(speed);

    // Create a paragraph element for the height of the character and append it to basic info container
    const height = document.createElement('p');
    height.innerHTML = `<strong>Height:</strong> ${character.height}`;
    basicStatsContainer.appendChild(height);

    // Create a paragraph element for the weight of the character and append it to basic info container 
    const weight = document.createElement('p');
    weight.innerHTML = `<strong>Weight:</strong> ${character.weight}`;
    basicStatsContainer.appendChild(weight);

    // Abilities Section ====================================================================
    // Get the ability container in the main html file
    const abilityContainer = document.getElementById('ability-container');
    abilityContainer.innerHTML = ''; // Clear existing content

    // Set the class of the container
    abilityContainer.classList.add('stats-table-container');

    // Create a new h2 element for the heading and append it to ability container
    const abilityHeading = document.createElement('h2');
    abilityHeading.textContent = 'Abilities';
    abilityContainer.appendChild(abilityHeading);

    // Create a new table element for the abilities and append it to ability container
    const abilityTable = document.createElement('table');
    abilityTable.classList.add('stats-table');

    // Create the table header
    abilityTable.innerHTML = `
        <thead>
            <tr>
                <th>Ability</th>
                <th>Score</th>
                <th>Modifier</th>
            </tr>
        </thead>
        <tbody>
            ${Object.keys(character.abilityScores).map(ability => {
                const score = character.abilityScores[ability];
                const modifier = Math.floor((score - 10) / 2);
                const modifierText = modifier >= 1 ? `+${modifier}` : `${modifier}`;
                return `
                <tr>
                    <td><strong>${ability.charAt(0).toUpperCase() + ability.slice(1)}:</strong></td>
                    <td>${score}</td>
                    <td>${modifierText}</td>
                </tr>
                `;
            }).join('')}
        </tbody>
    `;

    // Append the table to the ability container
    abilityContainer.appendChild(abilityTable);

    // HitPoints Section ====================================================================
    // Get the ability container in the main html file
    const hitPointsContainer= document.getElementById('hitpoint-container');
    // Set the class of the container
    hitPointsContainer.classList.add('stats-list-editable');

    // Create a new h2 element for the heading and append it to hitpoint container
    const hitPointsHeading = document.createElement('h2');
    hitPointsHeading.textContent = 'Hit Points';
    hitPointsContainer.appendChild(hitPointsHeading);

    // Function to create hit points fields with + and - buttons
    function createHitPointsFeild(label, value) {
        const container = document.createElement('div');
        container.classList.add('hitpoints-field');

        const incrementButton = document.createElement('button');
        incrementButton.textContent = '+';
        incrementButton.onclick = () => {
            valueElement.textContent = parseInt(valueElement.textContent) + 1;
            valueElement.textContent = newValue;
            character.hitPoints.current = newValue;
        };
        container.appendChild(incrementButton);

        const labelElement = document.createElement('strong');
        labelElement.classList.add('hitpoints-label');
        labelElement.textContent = `${label}: `;
        container.appendChild(labelElement);
        
        const valueElement = document.createElement('span');
        valueElement.textContent = value;
        container.appendChild(valueElement);


        const decrementButton = document.createElement('button');
        decrementButton.textContent = '-';
        decrementButton.onclick = () => {
            valueElement.textContent = parseInt(valueElement.textContent) - 1;
            valueElement.textContent = newValue;
            character.hitPoints.current = newValue;
        };
        container.appendChild(decrementButton);

        return container;
    }

    // Create hit points fields with buttons
    hitPointsContainer.appendChild(createHitPointsFeild('Current', character.hitPoints.current));
    hitPointsContainer.appendChild(createHitPointsFeild('Max', character.hitPoints.max));  
    hitPointsContainer.appendChild(createHitPointsFeild('Temp', character.hitPoints.temporary));
}