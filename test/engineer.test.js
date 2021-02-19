// requiring in our Engineer.js file
const Engineer = require('../Engineer');
const Manager = require('../Engineer');

describe('Engineer class', () => {
	describe('Initialization', () => {
		it('Should create new engineer', () => {
			const engineer = new Engineer();

			expect('name' in engineer).toEqual(true);
		});
	});
});
