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

	// second test
	describe('getSchool method', () => {
		it('Should return intern school', () => {
			const intern = new Intern();
			const school = intern.school;

			expect(intern.getSchool()).toEqual(school);
		});
	});

	// third test
	describe('getRole method', () => {
		it('Should return intern role', () => {
			const intern = new Intern();

			expect(intern.getRole()).toEqual('Intern');
		});
	});
});
