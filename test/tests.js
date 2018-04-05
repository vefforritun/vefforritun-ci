const chai = require('chai');
const quadratic = require('../quadratic');

chai.should();
chai.expect();

describe('Quadratic', () => {
  it('should solve a basic case', () => {
    const result = quadratic(3, 6, -105);
    result.x1.should.equal(45);
    result.x2.should.equal(-63);
  });

  it('should throw an error for imaginary roots', () => {
    quadratic(1, 1, 1).to.throw();
  });
});

// 3 6 -105
// 45 -63
