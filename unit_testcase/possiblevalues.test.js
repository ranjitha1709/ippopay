let possibleValuesOf = require('./possiblevalues');
describe('String Length Validation', () => {

// Test Case 1: the minimum possible absolute difference
it('should return 2 for a number array(3,9,7,3)', () => {
    const inputString = [3,9,7,3];
    expect(possibleValuesOf(inputString)).toBe(2);
  });

  // Test Case 2: the minimum possible absolute difference
it('should return 72 for a number array(-36,36)', () => {
    const inputString = [-36,36];
    expect(possibleValuesOf(inputString)).toBe(72);
  });

  // Test Case 3: the minimum possible absolute difference
it('should return 0 for a number array(2,-1,0,4,-2,-9)', () => {
    const inputString = [2,-1,0,4,-2,-9];
    expect(possibleValuesOf(inputString)).toBe(0);
  });
});