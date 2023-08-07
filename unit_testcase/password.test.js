let {validatePassword, validatePasswordSteps} = require('./password');
let possibleValuesOf = require('./possiblevalues');

describe('String Length Validation', () => {
    // Test Case 1: String with 5 characters (less than the minimum)
    it('should return false for a string with 5 characters', () => {
      const inputString = 'hello';
      expect(validatePassword(inputString)).toBe(false);
    });
  
    // Test Case 2: String with 6 characters (at the minimum)
    it('should return true for a string with 6 characters', () => {
      const inputString = 'Abcd1f';
      expect(validatePassword(inputString)).toBe(true);
    });
  
    // Test Case 3: String with 10 characters (within the valid range)
    it('should return true for a string with 10 characters', () => {
      const inputString = '1bCdefghij';
      expect(validatePassword(inputString)).toBe(true);
    });
  
    // Test Case 4: String with 20 characters (at the maximum)
    it('should return true for a string with 20 characters', () => {
      const inputString = '1bCdefghijklmnopqrst';
      expect(validatePassword(inputString)).toBe(true);
    });
  
    // Test Case 5: String with 21 characters (more than the maximum)
    it('should return false for a string with 21 characters', () => {
      const inputString = '1bcDefghijklmnopqrstu';
      expect(validatePassword(inputString)).toBe(false);
    });
  });
  
  describe('String Required Characters Validation', () => {
    // Test Case 1: String without any required characters
    it('should return false for a string without any required characters', () => {
      const inputString = '1234'; // No lowercase or uppercase letters
      expect(validatePassword(inputString)).toBe(false);
    });
  
    // Test Case 2: String with lowercase letter only
    it('should return false for a string with lowercase letter only', () => {
      const inputString = 'password'; // No uppercase letter or digit
      expect(validatePassword(inputString)).toBe(false);
    });
  
    // Test Case 3: String with uppercase letter only
    it('should return false for a string with uppercase letter only', () => {
      const inputString = 'PASSWORD'; // No lowercase letter or digit
      expect(validatePassword(inputString)).toBe(false);
    });
  
    // Test Case 4: String with a digit only
    it('should return false for a string with a digit only', () => {
      const inputString = '123456'; // No lowercase or uppercase letter
      expect(validatePassword(inputString)).toBe(false);
    });
  
    // Test Case 5: String with all required characters
    it('should return true for a string with all required characters', () => {
      const inputString = 'P@ssw0rd'; // Contains lowercase letter, uppercase letter, and digit
      expect(validatePassword(inputString)).toBe(true);
    });
  
    // Test Case 6: String with all required characters and additional characters
    it('should return true for a string with all required characters and additional characters', () => {
      const inputString = 'MyP@ssw0rd123'; // Contains lowercase letter, uppercase letter, and digit, along with additional characters
      expect(validatePassword(inputString)).toBe(true);
    });
  });
  
  describe('String Repeating Characters Validation', () => {
    // Test Case 1: String with three repeating characters in a row
    it('should return false for a string with three repeating characters in a row', () => {
      const inputString = 'Baaabb0';
      expect(validatePassword(inputString)).toBe(false);
    });
  
    // Test Case 2: String without three repeating characters in a row
    it('should return true for a string without three repeating characters in a row', () => {
      const inputString = 'Baaba0';
      expect(validatePassword(inputString)).toBe(true);
    });
  
  
    // Test Case 4: String with special characters and no three repeating characters in a row
    it('should return true for a string with special characters and no three repeating characters in a row', () => {
      const inputString = '1@#!Ba#ba%';
      expect(validatePassword(inputString)).toBe(true);
    });
  
    // Test Case 5: String with three repeating characters in a row and digits
    it('should return false for a string with three repeating characters in a row and digits', () => {
      const inputString = 'aa111';
      expect(validatePassword(inputString)).toBe(false);
    });











    // Test Case 1: String with at least 6 characters and at most 20 characters
    it('should return 5 for a string with a', () => {
        const inputString = 'a';
        expect(validatePasswordSteps(inputString)).toBe(5);
      });

      // Test Case 2: String with at least 6 characters and at most 20 characters
    it('should return 3 for a string with aA1', () => {
        const inputString = 'aA1';
        expect(validatePasswordSteps(inputString)).toBe(3);
      });

      // Test Case 3: String with at least 6 characters and at most 20 characters
    it('should return 0 for a string with 1337C0d3', () => {
        const inputString = '1337C0d3';
        expect(validatePasswordSteps(inputString)).toBe(0);
      });
  });