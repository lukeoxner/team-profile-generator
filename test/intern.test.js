// require in Intern.js
const Intern = require('../Intern');

describe('Intern class', () => {
	// first test
	describe('Initialization', () => {
		it('Should create new intern', () => {
			const intern = new Intern();

			expect('name' in intern).toEqual(true);
		});
	});
});
