function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const containerEl = document.querySelector('#controls');
const inputNumberEl = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
	const numberOfElements = parseInt(inputNumberEl.value, 10);
	if (numberOfElements < 1) {
		return alert('Введіть значення не менше 1');
	} else {
		createBoxes(numberOfElements);
	}
});

function createBoxes(amount) {
	const boxes = [];
	for (let i = 0; i < amount; i += 1) {
		const newDiv = document.createElement('div');
		if (i === 0) {
			newDiv.style.width = '30px';
			newDiv.style.height = '30px';
		} else {
			newDiv.style.width = parseInt(boxes[i - 1].style.width) + 10 + 'px';
			newDiv.style.height = parseInt(boxes[i - 1].style.height) + 10 + 'px';
		}
		newDiv.style.backgroundColor = getRandomHexColor();
		boxes.push(newDiv);
	}
	for (const box of boxes) {
		boxesEl.append(box);
	}
}

destroyBtn.addEventListener('click', () => {
	destroyBoxes();
});

function destroyBoxes() {
	boxesEl.innerHTML = '';
}
