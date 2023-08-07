function strongPasswordChecker(password) {
      
        const length = Math.max(6 - password.length, 0);
        let mustAdd = 0;
      
        if (!password.match(/[A-Z]/)) {
            mustAdd++;
        }
        if (!password.match(/[a-z]/)) {
            mustAdd++;
        }
        if (!password.match(/\d/)) {
            mustAdd++;
        }
        // Iterate through the password to find repeating characters and count changes required
        let repeatChar = 0;
        for (let i = 2; i < password.length; i++) {
            if (password[i] === password[i - 1] && password[i] === password[i - 2]) {
                repeatChar++;
                i++;
            }
        }
        return Math.max(length, mustAdd, repeatChar) ;
      
        // return steps;
      }
  module.exports = { strongPasswordChecker };
  