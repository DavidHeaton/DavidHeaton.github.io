function loadSection(sectionFile, elementId) {
    fetch(sectionFile)
        .then(response => response.text())
        .then(text => {
            document.getElementById(elementId).innerHTML = text;
        });
}

document.addEventListener("DOMContentLoaded", function() {
    loadSection('../html/navigation.html', 'navigation-container');
    loadSection('../html/ability-scores.html', 'ability-scores-container');
    loadSection('../html/proficiency.html', 'proficiency-container');
    loadSection('../html/saving-throws.html', 'saving-throws-container');
    loadSection('../html/skills.html', 'skills-container');
    loadSection('../html/racial-traits.html', 'racial-traits-container');
    loadSection('../html/class-features.html', 'class-features-container');
    loadSection('../html/equipment.html', 'equipment-container');
    loadSection('../html/weapon-attack.html', 'weapon-attack-instructions-container');
    loadSection('../html/skill-checks.html', 'skill-checks-container');
    loadSection('../html/attack-tips.html', 'attacking-tips-container');
});