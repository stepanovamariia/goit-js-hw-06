const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const list = document.querySelector('#ingredients');
const newEl = [];

for (let ingredient of ingredients) {
	const listItem = document.createElement('li');
	listItem.textContent = ingredient;
	listItem.classList.add('item');
	newEl.push(listItem);
}

list.append(...newEl);
