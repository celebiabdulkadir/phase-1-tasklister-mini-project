document.addEventListener('DOMContentLoaded', (event) => {
	// Select the form and input elements
	let form = document.getElementById('create-task-form');
	let input = document.getElementById('new-task-description');
	let list = document.getElementById('list');

	// Listen for the form's submit event
	form.addEventListener('submit', function (event) {
		// Prevent the form from being submitted
		event.preventDefault();

		// Create a new list item
		let newTask = document.createElement('li');

		// Set the text content of the new item to the value of the input
		newTask.textContent = input.value;

		// Append the new item to the list
		list.appendChild(newTask);

		// Clear the input
		input.value = '';
	});
});
