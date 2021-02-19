// requiring in our Engineer.js file
const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
	// first test
	describe('Initialization', () => {
		it('Should create new engineer', () => {
			const engineer = new Engineer();

			expect('name' in engineer).toEqual(true);
		});
	});

	// second test
	describe('getGithub method', () => {
		it('Should return engineer GitHub', () => {
			const engineer = new Engineer();
			const github = engineer.github;

			expect(engineer.getGithub()).toEqual(github);
		});
	});

	// third test
	describe('getRole method', () => {
		it('Should return engineer role', () => {
			const engineer = new Engineer();

			expect(engineer.getRole()).toEqual('Engineer');
		});
	});
});
