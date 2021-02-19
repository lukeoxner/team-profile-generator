const Employee = require('./Employee');

// declare manager class, constructor function, and methods
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
	}

	getOffice() {
		return this.officeNumber;
	}

	getRole() {
		return 'Manager';
	}
}

module.exports = Manager;
