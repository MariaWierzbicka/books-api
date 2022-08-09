const formatFullName = require('../formatFullName.js');
const expect = require('chai').expect;

describe('formatFullName', () => {
  it('should return an error if a name is missing', () => {
    expect(formatFullName('john')).to.equal('Error');
  });
  it('should return an error if given more than 2 names', () => {
    expect(formatFullName('John david doe')).to.equal('Error');
  });
  it('should return an error if "fullName" is not a string', () => {
    expect(formatFullName(undefined)).to.equal('Error');
    expect(formatFullName(123)).to.equal('Error');
    expect(formatFullName([])).to.equal('Error');
    expect(formatFullName({})).to.equal('Error');
    expect(formatFullName(function() {})).to.equal('Error');
  });

});