// requiring in our Manager.js file
const Manager = require('../Manager');

describe('Manager class', () => {
	// first test
	describe('Initialization', () => {
		it('Should create new manager', () => {
			const manager = new Manager();

			expect('name' in manager).toEqual(true);
		});
	});
});
