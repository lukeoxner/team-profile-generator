// requiring in our index.js file
const Employee = require('../app');

describe('Employee class', () => {
	describe('Initialization', () => {
		it('Should create new employee', () => {
			const employee = new Employee();

			expect('name' in employee).toEqual(true);
		});
	});
});
