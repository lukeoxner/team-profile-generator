// set up our required Node modules
const fs = require('fs');
const inquirer = require('inquirer');

class Manager {
	constructor(name, email, id, office) {
		this.name = name;
		this.email = email;
		this.id = id;
		this.office = office;
	}
}

// use inquirer to prompt user for Manager inputs
inquirer
	.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is the name of the manager?',
		},
		{
			type: 'input',
			name: 'email',
			message: 'What is their email address?',
		},
		{
			type: 'input',
			name: 'id',
			message: 'What is their ID number?',
		},
		{
			type: 'input',
			name: 'office',
			message: 'What is their office number?',
		},
	])
	.then((response) => {
		const manager = new Manager(
			response.name,
			response.email,
			response.id,
			response.office
		);
		console.log(manager);
	});
