const colorContainer = document.getElementById('color-container');
const colorText = document.getElementById('color-text');
const btnFlip = document.getElementById('btn-flip');

btnFlip.addEventListener('click', changeColor);

function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getContrastTextColor(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#000' : '#fff';
}

function changeColor() {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    const textColor = getContrastTextColor(randomColor);
    colorText.textContent = randomColor;
    colorContainer.style.color = textColor;
}
