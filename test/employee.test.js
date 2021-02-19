// requiring in our Employee.js file
const Employee = require('../lib/Employee');

describe('Employee class', () => {
	// first test
	describe('Initialization', () => {
		it('Should create new employee', () => {
			const employee = new Employee();

			expect('name' in employee).toEqual(true);
		});
	});

	// second test
	describe('getName method', () => {
		it('Should return employee name', () => {
			const employee = new Employee();
			const name = employee.name;

			expect(employee.getName()).toEqual(name);
		});
	});
	// third test
	describe('getId method', () => {
		it('Should return employee ID', () => {
			const employee = new Employee();
			const id = employee.id;

			expect(employee.getId()).toEqual(id);
		});
	});
	// fourth test
	describe('getEmail method', () => {
		it('Should return employee email', () => {
			const employee = new Employee();
			const email = employee.email;

			expect(employee.getEmail()).toEqual(email);
		});
	});
	// fifth test
	describe('getRole method', () => {
		it('Should return employee role', () => {
			const employee = new Employee();

			expect(employee.getRole()).toEqual('Employee');
		});
	});
});
