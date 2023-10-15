const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const list = document.querySelector('#ingredients');

for (let ingredient of ingredients) {
	const listItem = document.createElement('li');
	listItem.textContent = ingredient;
	listItem.classList.add('ingridient');

	list.append(listItem);
}
