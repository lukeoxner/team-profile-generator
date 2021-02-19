// set up our required Node modules
const { profile } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

// declare globals to store manager, engineers, interns, and the HTML pieces we'll generate later
let manager;
const engineers = [];
const interns = [];
const htmlArray = [];

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
				name: 'officeNumber',
				message: 'What is their office number?',
			},
		])
		.then((response) => {
			// create new object from Manager class
			manager = new Manager(
				response.name,
				response.id,
				response.email,
				response.officeNumber
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
			// create new Engineer object
			let engineer = new Engineer(
				response.name,
				response.id,
				response.email,
				response.github
			);
			// push the new Engineer object to the engineers array
			engineers.push(engineer);
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
			// create new Intern object
			let intern = new Intern(
				response.name,
				response.id,
				response.email,
				response.school
			);
			// push new Intern object to interns array
			interns.push(intern);
			menu();
		});
}

// declare function used for kicking off all the other functions needed to create our HTML document
function generateProfile() {
	startingHTML();
	addEngineers();
	addInterns();
	endingHTML();
	writeHTML();
}

// declare function to add the starting HTML code to HTML array
function startingHTML() {
	let startHTML = `<!DOCTYPE html>
		<html lang="en">
		<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
		<title>The Squaaad</title>
	
		<style>
	
		header {
			background-color: #2a9d8f;
			font-family: 'Pacifico', cursive;
			color: #f1faee;
			text-shadow: 2px 2px #000000;
		}
	
		li {
			font-size: 14px;
		}
	
		a {
			color: #2a9d8f;
			text-decoration: none;
		}
	
		.key {
			font-weight: 700;
		}
	
		.card {
			box-shadow: 3px 3px 5px #000;
			background-color: #f7f7f7;
		}
	
		.card-header {
			background-color: #264653;
			color: #f1faee;
		}
	
		</style>
	
		</head>
	
		<body>
		<header>
			<div class="container">
				<div class="row py-5 mb-5">
					<div class="col-12 text-center">
						<h1>The Squad</h1>
					</div>
				</div>
			</div>
		</header>
	
		<main>
			<div class="container">
				<div class="row d-flex justify-content-center card-element">
	
					<div class="col-12 col-md-6 col-lg-4 card m-3 p-0" style="width: 18rem;">
						<div class="card-header">
							<h5 class="card-title">${manager.name}</h5>
							<h6 class="card-text">Manager</h6>
						</div>
						<ul class="list-group list-group m-4">
							<li class="list-group-item"><span class="key">ID: </span>${manager.id}</li>
							<li class="list-group-item"><span class="key">Email: </span><a href="mailto:${manager.email}">${manager.email}</a></li>
							<li class="list-group-item"><span class="key">Office: </span>${manager.officeNumber}</li>
						</ul>
					</div>
		`;

	htmlArray.push(startHTML);
}

// declare function used to add engineer blocks to HTML array
function addEngineers() {
	if (engineers.length > 0) {
		engineers.forEach((engineer) => {
			let engineerHTML = `<div class="col-12 col-md-6 col-lg-4 card m-3 p-0" style="width: 18rem;">
			<div class="card-header">
				<h5 class="card-title">${engineer.name}</h5>
				<h6 class="card-text">Engineer</h6>
			</div>
			<ul class="list-group list-group m-4">
				<li class="list-group-item"><span class="key">ID: </span>${engineer.id}</li>
				<li class="list-group-item"><span class="key">Email: </span><a href="mailto:${engineer.email}">${engineer.email}</a></li>
				<li class="list-group-item"><span class="key">GitHub: </span><a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
			</ul>
			</div>`;

			htmlArray.push(engineerHTML);
		});
	}
}

// declare function used to add intern blocks to HTML array
function addInterns() {
	if (interns.length > 0) {
		interns.forEach((intern) => {
			let internHTML = `<div class="col-12 col-md-6 col-lg-4 card m-3 p-0" style="width: 18rem;">
			<div class="card-header">
				<h5 class="card-title">${intern.name}</h5>
				<h6 class="card-text">Intern</h6>
			</div>
			<ul class="list-group list-group m-4">
				<li class="list-group-item"><span class="key">ID: </span>${intern.id}</li>
				<li class="list-group-item"><span class="key">Email: </span><a href="mailto:${intern.email}">${intern.email}</a></li>
				<li class="list-group-item"><span class="key">School: </span>${intern.school}</li>
			</ul>
			</div>`;

			htmlArray.push(internHTML);
		});
	}
}

// declare function used to add the closing HTML code to HTML array
function endingHTML() {
	let endHTML = `</div>
	</div>
	</main>
	</body>
	</html>`;

	htmlArray.push(endHTML);
}

// declare function that uses fs.writeFile to generate our HTML document from HTML array
function writeHTML() {
	fs.writeFile('team-profile.html', htmlArray.join(''), (err) =>
		// If there is an error, console log it. Otherwise, console log a success message
		err ? console.error(err) : console.log('Team Profile generated!')
	);
}

// Kick everything off by calling the createManager function
createManager();
