export function populateCharacterDropdown() {
    const characterSelect = document.getElementById('character-select-dropdown');
    characterSelect.innerHTML = '';

    Object.keys(characters).forEach((characterKey) => {
        const option = document.createElement('option');
        option.value = characterKey;
        option.textContent = characters[characterKey].name;
        characterSelect.appendChild(option);
    });

    characterSelect.addEventListener('change', function(){
        loadCharacter(this.value);
    });
}