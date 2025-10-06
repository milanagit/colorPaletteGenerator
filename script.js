const generateBtn = document.getElementById('generate-btn');
const paletteContainer = document.querySelector('.palette-container');


/* Functions */
const generatePalette = () => {
    const colors = [];

    for(let i = 0; i<5; i++) {
        colors.push(generateRandomColor());
    }

    updatePaletteDisplay(colors);
}

const generateRandomColor = () => {
    const letters = "0123456789ABCDEF"; // 16
    let color = "#";

    for(let i = 0; i<6; i++) {
        color += letters[Math.floor(Math.random() *16)];
    }
    return color;
}

const updatePaletteDisplay = (colors) => {
    const colorBoxes = document.querySelectorAll('.color-box');

    colorBoxes.forEach((box, index) => {
        const color = colors[index];
        const colorDiv = box.querySelector('.color');
        const hexValue = box.querySelector('.hex-value');

        colorDiv.style.backgroundColor = color;
        hexValue.textContent = color;
    });
}

/* Event listeners */
generateBtn.addEventListener('click', generatePalette);

/* Called functions */
generatePalette();