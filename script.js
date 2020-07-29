const form = document.querySelector('form');
const passwordElement = document.getElementById('password');
const passwordConfirmElement = document.getElementById('password-confirm');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
	isValid = form.checkValidity();

	if (!isValid) {
		message.textContent = 'Please fill out all fields.';
		message.style.color = 'red';
		messageContainer.style.borderColor = 'red';

		return;
	};
	if (passwordElement.value === passwordConfirmElement.value) {
		passwordsMatch = true;
		passwordElement.style.borderColor = 'green';
		passwordConfirmElement.style.borderColor = 'green';
	} else {
		passwordsMatch = false;
		message.textContent = 'Ensure Passwords Match';
		message.style.color = 'red';
		messageContainer.style.borderColor = 'red';
		passwordElement.style.borderColor = 'red';
		passwordConfirmElement.style.borderColor = 'red';
		
		return;
	};

	if (isValid && passwordsMatch) {
		message.textContent = 'Success!';
		message.style.color = 'green';
		messageContainer.style.borderColor = 'green';
	};
};

function storeFormData() {
	const user = {
		name: form.name.value,
		email: form.email.value,
		number: form.number.value,
		website: form.website.value,
		password: form.password.value
	};
	console.table(user);
};

function processFormData(e) {
	e.preventDefault();
	validateForm();

	if (isValid && passwordsMatch) {
		storeFormData()
	};
};

form.addEventListener('submit', processFormData);