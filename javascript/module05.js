document.getElementById('createButton').addEventListener('click', function() {
    const name = document.getElementById('planetName').value;
    const type = document.getElementById('planetType').value;
    const atmosphere = document.getElementById('atmosphere').value;
    const size = document.getElementById('size').value;
    const color = document.getElementById('color').value;

    if (name && type && atmosphere && size) {
        const planetDisplay = document.getElementById('planetDisplay');
        planetDisplay.innerHTML = `
            <div class="planet">
                <div class="planet-circle" style="background-color: ${color};">
                    <p style="color: white; text-align: center; margin-top: 35px;">${name}</p>
                </div>
                <div class="planet-info">
                    <h2>${name}</h2>
                    <p>Type: ${type.replace('_', ' ').toUpperCase()}</p>
                    <p>Atmosphere: ${atmosphere}</p>
                    <p>Size: ${size} km</p>
                </div>
            </div>
        `;
    } else {
        alert('Please fill in all fields to create your planet!');
    }
});