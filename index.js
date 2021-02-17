// set up our required Node modules
const fs = require('fs');
const inquirer = require('inquirer');
// const { inherits } = require('util');

let manager;
const engineers = [];
const interns = [];

// declare manager class
class Manager {
	constructor(name, id, email, office) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.office = office;
	}
}

// declare engineer class
class Engineer {
	constructor(name, id, email, github) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.github = github;
	}
}

// declare intern class
class Intern {
	constructor(name, id, email, school) {
		this.name = name;
		this.id = id;
		this.email = email;
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
			manager = new Manager(
				response.name,
				response.id,
				response.email,
				response.office
			);
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
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'name',
				message: 'What is the name of the engineer?',
			},
			{
				type: 'input',
				name: 'id',
				message: 'What is their ID number?',
			},
			{
				type: 'input',
				name: 'email',
				message: 'What is their email?',
			},
			{
				type: 'input',
				name: 'github',
				message: 'What is their GitHub username?',
			},
		])
		.then((response) => {
			let engineer = new Engineer(
				response.name,
				response.id,
				response.email,
				response.github
			);
			engineers.push(engineer);
			console.log(engineers);
			menu();
		});
}

// declare function used for creating a new intern
function createIntern() {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'name',
				message: 'What is the name of the intern?',
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
				name: 'school',
				message: 'What is their school?',
			},
		])
		.then((response) => {
			let intern = new Intern(
				response.name,
				response.id,
				response.email,
				response.school
			);
			interns.push(intern);
			console.log(interns);
			menu();
		});
}

// declare function used for generating the team profile
function generateProfile() {
	console.log('time to generate a profile!');
}

// Kick everything off by calling the createManager function
createManager();
