// set up our required Node modules
const fs = require('fs');
const inquirer = require('inquirer');
// const { inherits } = require('util');

class Manager {
	constructor(name, id, email, office) {
		this.name = name;
		this.email = email;
		this.id = id;
		this.office = office;
	}
}

class Engineer {
	constructor(name, id, email, github) {
		this.name = name;
		this.email = email;
		this.id = id;
		this.github = github;
	}
}

class Intern {
	constructor(name, id, email, school) {
		this.name = name;
		this.email = email;
		this.id = id;
		this.school = school;
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
			name: 'id',
			message: 'What is their ID number?',
		},
		{
			type: 'input',
			name: 'email',
			message: 'What is their email address?',
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
			response.id,
			response.email,
			response.office
		);
		console.log(manager);
	});
