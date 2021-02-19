// requiring in our index.js file
const Employee = require('../app');

describe('Employee', () => {
	describe('Initialization', () => {
		it('Should create new employee', () => {
			const test = new Employee();

			expect('name' in test).toEqual(true);
		});
	});
});
