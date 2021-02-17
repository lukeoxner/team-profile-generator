// set up our required Node modules
const fs = require('fs');
const inquirer = require('inquirer');
// const { inherits } = require('util');

let manager1;
const engineers = [];
const interns = [];

// declare manager class
class Manager {
	constructor(name, id, email, office) {
		this.name = name;
		this.email = email;
		this.id = id;
		this.office = office;
	}
}

// declare engineer class
class Engineer {
	constructor(name, id, email, github) {
		this.name = name;
		this.email = email;
		this.id = id;
		this.github = github;
	}
}

// declare intern class
class Intern {
	constructor(name, id, email, school) {
		this.name = name;
		this.email = email;
		this.id = id;
		this.school = school;
	}
}

// use inquirer to prompt user for Manager inputs
function createManager() {
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
			manager1 = new Manager(
				response.name,
				response.id,
				response.email,
				response.office
			);
			console.log(manager1);
			menu();
		});
}

// create function to enable main menu choices
function menu() {
	inquirer
		.prompt([
			{
				type: 'list',
				name: 'menu',
				message: 'What would you like to do next?',
				choices: [
					'Add an engineer',
					'Add an intern',
					'All done - generate my team profile',
				],
			},
		])
		.then((response) => {
			switch (response.menu) {
				case 'Add an engineer':
					createEngineer();
					break;
				case 'Add an intern':
					createIntern();
					break;
				case 'All done - generate my team profile':
					generateProfile();
			}
		});
}

// declare function used for creating a new engineer
function createEngineer() {
	console.log('time to make an engineer!');
	menu();
}

// declare function used for creating a new intern
function createIntern() {
	console.log('time to make an intern!');
	menu();
}

// declare function used for generating the team profile
function generateProfile() {
	console.log('time to generate a profile!');
}

// Kick everything off by calling the createManager function
createManager();
