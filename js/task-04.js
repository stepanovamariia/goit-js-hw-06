let counterValue = 0;

const buttonDecrementEl = document.querySelector(
	'button[data-action="decrement"]'
);

buttonDecrementEl.addEventListener('click', () => {
	counterValue -= 1;
	valueEl.textContent = counterValue;
});

const buttonIncrementEl = document.querySelector(
	'button[data-action="increment"]'
);

buttonIncrementEl.addEventListener('click', () => {
	counterValue += 1;
	valueEl.textContent = counterValue;
});

const valueEl = document.querySelector('#value');
valueEl.textContent = counterValue;
