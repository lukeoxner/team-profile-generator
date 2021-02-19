// requiring in our Manager.js file
const Manager = require('../lib/Manager');

describe('Manager class', () => {
	// first test
	describe('Initialization', () => {
		it('Should create new manager', () => {
			const manager = new Manager();

			expect('name' in manager).toEqual(true);
		});
	});

	// second test
	describe('getOffice method', () => {
		it('Should return manager office', () => {
			const manager = new Manager();
			const office = manager.officeNumber;

			expect(manager.getOffice()).toEqual(office);
		});
	});

	// third test
	describe('getRole method', () => {
		it('Should return manager role', () => {
			const manager = new Manager();

			expect(manager.getRole()).toEqual('Manager');
		});
	});
});
