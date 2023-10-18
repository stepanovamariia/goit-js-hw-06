function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const body = document.querySelector('body');
const colorValue = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', () => {
	body.style.backgroundColor = getRandomHexColor();
	colorValue.textContent = body.style.backgroundColor;
});
