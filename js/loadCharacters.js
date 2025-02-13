document.addEventListener("DOMContentLoaded", function() {
    loadCharacter('finn');
    populateCharacterDropdown();
});

// Function to populate dropdown for character selection
function populateCharacterDropdown() {
    // Get the dropdown container from the main html file
    const characterSelect = document.getElementById('character-select-dropdown');
    characterSelect.innerHTML = ''; // Clear existing content

    Object.keys(characters).forEach(characterKey => {
        const option = document.createElement('option');
        option.value = characterKey;
        option.textContent = characters[characterKey].name;
        characterSelect.appendChild(option);
    });

    characterSelect.addEventListener('change', function() {
        loadCharacter(this.value);
    });
}


function loadCharacter(characterKey) {
    const character = characters[characterKey];

    // Clear existing content in all sections
    document.getElementById('heading-container').innerHTML = '';
    document.getElementById('basic-info-container').innerHTML = '';
    document.getElementById('ability-container').innerHTML = '';
    document.getElementById('hitpoint-container').innerHTML = '';
    document.getElementById('proficiency-bonus-container').innerHTML = '';
    document.getElementById('initiative-container').innerHTML = '';

    // Load Heading Section ==================================================================
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
    // Only add content if there is an image
    if (character.image) {
        const headingImage = document.createElement('img');
        headingImage.classList.add('character-image-large');
        headingImage.src = character.image;
        headingImage.alt = `${character.name}`;
        headingSection.appendChild(headingImage);
    }

    // Create a paragraph element for the character level and append it to heading section
    // Only add content if there is a level
    if (character.level) {
        const characterLevel = document.createElement('p');
        characterLevel.innerHTML = `<strong>Level:</strong> ${character.level}`;
        headingSection.appendChild(characterLevel);
    }

    // Create a paragraph element for the Class and append it to heading section
    // Only add content if there is a class
    if (character.class) {
        const characterClass = document.createElement('p');
        characterClass.innerHTML = `<strong>Class:</strong> ${character.class}`;
        headingSection.appendChild(characterClass);
    }

    // Create a paragraph element for the Subclass and append it to heading section
    // Only add content if there is a subclass
    if (character.subClass) {
        const characterSubClass = document.createElement('p');
        characterSubClass.innerHTML = `<strong>Backgound:</strong> ${character.subClass}`;
        headingSection.appendChild(characterSubClass);
    }

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

    // Proficiency Bonus Section ====================================================================

    // Get the proficiency bonus container in the main html file
    const proficiencyBonusContainer = document.getElementById('proficiency-bonus-container');
    // Set the class of the container
    proficiencyBonusContainer.classList.add('stats-list');
    
    // Create a new h2 element for the heading and append it to proficiency bonus container
    const proficiencyBonusHeading = document.createElement('h2');
    proficiencyBonusHeading.textContent = 'Proficiency Bonus';
    proficiencyBonusContainer.appendChild(proficiencyBonusHeading);

    // Calculate the proficiency bonus
    character.proficiencyBonus = Math.ceil(character.level / 4) + 1;

    // Append a + for positive values and a - for negative values
    character.proficiencyBonus = character.proficiencyBonus >= 1 ? `+${character.proficiencyBonus}` : `-${character.proficiency}`;

    // Create a paragraph element for the proficiency bonus and append it to proficiency bonus container
    const proficiencyBonus = document.createElement('p');
    proficiencyBonus.innerHTML = `${character.proficiencyBonus}`;
    proficiencyBonusContainer.appendChild(proficiencyBonus);

    // Create a new stats-list container for the list of proficiencies
    const proficiencyListContainer = document.createElement('div');
    proficiencyListContainer.classList.add('stats-list');
    proficiencyBonusContainer.appendChild(proficiencyListContainer);


    // remove the border from this container
    proficiencyListContainer.style.border = 'none';

    // Add content to the proficiency list container
    // Create a h2 heading for the container
    const proficiencyListHeading = document.createElement('h2');
    proficiencyListHeading.textContent = 'Proficiencies';
    proficiencyListContainer.appendChild(proficiencyListHeading);

    character.proficiencies.forEach(proficiency => {
        const proficiencyItem = document.createElement('p');
        proficiencyItem.innerHTML = proficiency;
        proficiencyListContainer.appendChild(proficiencyItem);
    });



    // Initiative Section ====================================================================
    // Get the initiative container in the main html file
    const initiativeContainer = document.getElementById('initiative-container');
    // Set the class of the container
    initiativeContainer.classList.add('stats-list');

    // Create a new h2 element for the heading and append it to initiative container
    const initiativeHeading = document.createElement('h2');
    initiativeHeading.textContent = 'Initiative';
    initiativeContainer.appendChild(initiativeHeading);

    // Calculate the initiative by finding the modifier for dexterity
    initiative = Math.floor((character.abilityScores.dexterity - 10) / 2);

    // Append a + for positive values and a - for negative values
    initiative = initiative >= 1 ? `+${initiative}` : `-${initiative}`;

    // Create a paragraph element for the initiative and append it to initiative container
    const initiativeParagraph = document.createElement('p');
    initiativeParagraph.innerHTML = `${initiative}`;
    initiativeContainer.appendChild(initiativeParagraph);
}