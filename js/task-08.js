const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const form = event.target;
	const email = form.elements.email.value;
	const password = form.elements.password.value;

	if (email === '' || password === '') {
		return alert('Будь ласка, заповність всі поля!');
	} else {
		const values = {
			Email: form.elements.email.value,
			Password: form.elements.password.value,
		};
		console.log(values);
		loginForm.reset();
	}
}
