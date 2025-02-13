export class Character {
    constructor(data) {
        this.name = data.name;
        this.race = data.race;
        this.level = data.level;
        this.class = data.class;
        this.subClass = data.subClass;
        this.height = data.height;
        this.weight = data.weight;
        this.speed = data.speed;
        this.image = data.image;
        this.abilityScores = data.abilityScores;
        this.abilityNames = data.abilityNames;
        this.initiative = data.initiative;
        this.armourClass = data.armourClass;
        this.hitPoints = data.hitPoints;
        this.proficiencies = data.proficiencies;
        this.expertise = data.expertise;
        this.savingThrows = data.savingThrows;
        this.skills = data.skills;
        this.skillsNames = data.skillsNames;
        this.racialTraits = data.racialTraits;
        this.classFeatures = data.classFeatures;
        this.equipment = data.equipment;
    }

    // Method to display character information in a given div
    display(divId) {
        const div = document.getElementById(divId);
        if (div) {
            // give div a class
            div.classList.add('div-transparent-box');
            // Create a new h2 element for the name
            const name = document.createElement('h2');
            name.textContent = this.name;
            name.classList.add('boxed-h2');
            name.classList.add('top-item');
            div.appendChild(name);

            // Create a new img element for the image
            const image = document.createElement('img');
            image.src = this.image;
            div.appendChild(image);

            // Create a new transparent div for the character information
            const info = document.createElement('div');
            info.classList.add('div-horizonatal-center');
            info.classList.add('full-width');
            info.classList.add('back-transparent');
            div.appendChild(info);

            // Create a new p element for for race
            const race = document.createElement('p');
            race.classList.add('boxed-p');
            race.textContent = `Race: ${this.race}`;
            info.appendChild(race);

            // Create a new p element for for class
            const charClass = document.createElement('p');
            charClass.classList.add('boxed-p');
            charClass.textContent = `Class: ${this.class} (${this.subClass})`;
            info.appendChild(charClass);

            // Create a new p element for for level
            const level = document.createElement('p');
            level.classList.add('boxed-p');
            level.textContent = `Level: ${this.level}`;
            info.appendChild(level);

            // Create anew p element for height
            const height = document.createElement('p');
            height.classList.add('boxed-p');
            height.textContent = `Height: ${this.height}`;
            info.appendChild(height);

            // Create a new p element for weight
            const weight = document.createElement('p');
            weight.classList.add('boxed-p');
            weight.textContent = `Weight: ${this.weight}`;
            info.appendChild(weight);

            // Create a new p element for speed
            const speed = document.createElement('p');
            speed.classList.add('boxed-p');
            speed.textContent = `Speed: ${this.speed}`;
            info.appendChild(speed);

            // Create a new p element for initiative
            const initiative = document.createElement('p');
            initiative.classList.add('boxed-p');
            initiative.textContent = this.initiative >= 0 ? `Initiative: +${this.initiative}` : `Initiative: ${this.initiative}`;
            info.appendChild(initiative);

            // Create a new p element for armour class
            const armourClass = document.createElement('p');
            armourClass.classList.add('boxed-p');
            armourClass.textContent = `Armour Class: ${this.armourClass}`;
            info.appendChild(armourClass);

            // Create a new div for hit points
            const hitPoints = document.createElement('div');
            hitPoints.classList.add('div-horizonatal-center');
            hitPoints.classList.add('full-width');
            hitPoints.classList.add('back-transparent');
            div.appendChild(hitPoints);

            // Create a new h2 element for hit points
            const hitPointsHeading = document.createElement('h2');
            hitPointsHeading.textContent = 'Hit Points';
            hitPointsHeading.classList.add('boxed-h2');
            hitPoints.appendChild(hitPointsHeading);

            // Create a new table for hit points
            const hitPointsTable = document.createElement('table');
            hitPointsTable.classList.add('stats-table');
            hitPoints.appendChild(hitPointsTable);

            // Populate the table with hit points data
            const hitPointsData = this.hitPoints;
            for (const [key, value] of Object.entries(hitPointsData)) {
                const row = hitPointsTable.insertRow();
                const cell1 = row.insertCell();
                const cell2 = row.insertCell();
                cell1.textContent = key;
                cell2.textContent = value;
            }

            // Create a new div for ability scores
            const abilityScores = document.createElement('div');
            abilityScores.classList.add('div-horizonatal-center');
            abilityScores.classList.add('full-width');
            abilityScores.classList.add('back-transparent');
            div.appendChild(abilityScores);

            // Create a new h2 element for the ability scores
            const abilityScoresHeading = document.createElement('h2');
            abilityScoresHeading.textContent = 'Ability Scores';
            abilityScoresHeading.classList.add('boxed-h2');
            abilityScoresHeading.classList.add('top-item');
            abilityScores.appendChild(abilityScoresHeading);


            // Create a new table for ability scores
            const table = document.createElement('table');
            table.classList.add('stats-table');
            abilityScores.appendChild(table);

            // Populate the table with ability scores data
            const abilityScoresData = this.abilityScores;
            const abilityNames = this.abilityNames;
            for (const [key, value] of Object.entries(abilityScoresData)) {
                // Capitalize the key
                const row = table.insertRow();
                const cell1 = row.insertCell();
                const cell2 = row.insertCell();
                const cell3 = row.insertCell();
                cell1.textContent = abilityNames[key];
                cell2.textContent = value;
                // Calculate the modifier
                const modifier = Math.floor((value - 10) / 2);
                cell3.textContent = modifier >= 0 ? `+${modifier}` : modifier;
            }

            // Create new div for Skill Scores
            const skillScores = document.createElement('div');
            skillScores.classList.add('div-horizonatal-center');
            skillScores.classList.add('full-width');
            skillScores.classList.add('back-transparent');
            div.appendChild(skillScores);

            // create a new h2 element for the skill scores
            const skillScoresHeading = document.createElement('h2');
            skillScoresHeading.textContent = 'Skill Scores';
            skillScoresHeading.classList.add('boxed-h2');
            skillScores.appendChild(skillScoresHeading);

            // Create a new table for skill scores
            const skillTable = document.createElement('table');
            skillTable.classList.add('stats-table');
            skillScores.appendChild(skillTable);

            // Populate the table with skill scores data
            const skillScoresData = this.skills;
            const skillNames = this.skillsNames;
            for (const [key, value] of Object.entries(skillScoresData)) {
                const row = skillTable.insertRow();
                const cell1 = row.insertCell();
                const cell2 = row.insertCell();
                cell1.textContent = this.skillsNames[key];
                cell2.textContent = value >= 0 ? `+${value}` : value;
            }

            // Creata a new div for saving throws
            const savingThrows = document.createElement('div');
            savingThrows.classList.add('div-horizonatal-center');
            savingThrows.classList.add('full-width');
            savingThrows.classList.add('back-transparent');
            div.appendChild(savingThrows);

            // Create a new h2 element for saving throws
            const savingThrowsHeading = document.createElement('h2');
            savingThrowsHeading.textContent = 'Saving Throws';
            savingThrowsHeading.classList.add('boxed-h2');
            savingThrows.appendChild(savingThrowsHeading);

            // Create a new table for saving throws
            const savingThrowsTable = document.createElement('table');
            savingThrowsTable.classList.add('stats-table');
            savingThrows.appendChild(savingThrowsTable);
            
            // Populate the table with saving throws data
            const savingThrowsData = this.savingThrows;
            for (const [key, value] of Object.entries(savingThrowsData)) {
                const row = savingThrowsTable.insertRow();
                const cell1 = row.insertCell();
                const cell2 = row.insertCell();
                cell1.textContent = this.abilityNames[key];
                cell2.textContent = value >= 0 ? `+${value}` : value;
            }
            

            //div.innerHTML = `
                //<h2>${this.name}</h2>
                //<!--
                //<p>Race: ${this.race}</p>
                //<p>Class: ${this.class} (${this.subClass})</p>
                //<p>Level: ${this.level}</p>
                //<p>Height: ${this.height}</p>
                //<p>Weight: ${this.weight}</p>
                //<p>Speed: ${this.speed}</p>
                //<img src="${this.image}" alt="${this.name}">
                //<h3>Ability Scores</h3>
                //<pre>${JSON.stringify(this.abilityScores, null, 2)}</pre>
                //<h3>Hit Points</h3>
                //<pre>${JSON.stringify(this.hitPoints, null, 2)}</pre>
                //<h3>Proficiencies</h3>
                //<pre>${JSON.stringify(this.proficiencies, null, 2)}</pre>
                //<h3>Expertise</h3>
                //<pre>${JSON.stringify(this.expertise, null, 2)}</pre>
                //<h3>Saving Throws</h3>
                //<pre>${JSON.stringify(this.savingThrows, null, 2)}</pre>
                //<h3>Skills</h3>
                //<pre>${JSON.stringify(this.skills, null, 2)}</pre>
                //<h3>Racial Traits</h3>
                //<pre>${JSON.stringify(this.racialTraits, null, 2)}</pre>
                //<h3>Class Features</h3>
                //<pre>${JSON.stringify(this.classFeatures, null, 2)}</pre>
                //<h3>Equipment</h3>
                //<pre>${JSON.stringify(this.equipment, null, 2)}</pre>
                //-->
                //`;
        } else {
            console.error(`Div with id "${divId}" not found.`);
        }
    }
}

export class CharacterLoader {
    constructor(jsonFilePath) {
        this.jsonFilePath = jsonFilePath;
    }

    async loadCharacter(characterName, divId) {
        try {
            const response = await fetch(this.jsonFilePath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (data[characterName]) {
                const character = new Character(data[characterName]);
                character.display(divId);
            } else {
                console.error(`Character "${characterName}" not found in JSON data.`);
            }
        } catch (error) {
            console.error('Error loading JSON content:', error);
        }
    }
}