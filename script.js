const form = document.getElementById('contact-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if (!validateForm()) {
		errorMessage.innerText = 'Please fill in all fields correctly.';
	} else {
		// create a new FormData object
		const formData = new FormData(form);
		
		// send the form data to the new page using a GET request
		window.location.href = "submit.html?" + new URLSearchParams(formData).toString();
	}
});

function validateForm() {
	const name = document.getElementById('name').value.trim();
	const lname = document.getElementById('lname').value.trim();
	const email = document.getElementById('email').value.trim();
	const phone = document.getElementById('phone').value.trim();
	const message = document.getElementById('message').value.trim();

	if (name === '' || lname === '' || email === '' || phone === '' || message === '') {
		return false;
	}

	if (!validateEmail(email)) {
		return false;
	}

	if (!validatePhone(phone)) {
		return false;
	}

	return true;
}

function validateEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

function validatePhone(phone) {
	const phoneRegex = /^[0-9]{10}$/;
	return phoneRegex.test(phone);
}
