import { loadHeading } from "./heading";

document.addEventListener("DOMContentLoaded", function() {
    loadCharacter('finn');
    populateCharacterDropdown();
});


function loadCharacter(characterKey) {
    const character = characters[characterKey];

    loadHeading(character, 'heading-container');
}