function validatePassword(passwd){
const length = Math.max(6 - passwd.length, 0);
    let mustAdd = 0;

    if (!passwd.match(/[A-Z]/)) {
        mustAdd++;
        return false;
    }
    if (!passwd.match(/[a-z]/)) {
        mustAdd++;
        return false;
    }
    if (!passwd.match(/\d/)) {
        mustAdd++;
        return false;
    }
    // Iterate through the password to find repeating characters and count changes required
    let repeatChar = 0;
    for (let i = 2; i < passwd.length; i++) {
        if (passwd[i] === passwd[i - 1] && passwd[i] === passwd[i - 2]) {
            repeatChar++;
            i++;
            break;
        }
    }
    if(repeatChar>0){
        return false;
    }
    if(passwd.length >= 6 && passwd.length <=20){
        return true
    }else{
        return false;
    }
    return true;
 console.log(Math.max(length, mustAdd, repeatChar)) ;
}
 function validatePasswordSteps(passwd){
    const length = Math.max(6 - passwd.length, 0);
        let mustAdd = 0;
    
        if (!passwd.match(/[A-Z]/)) {
            mustAdd++;
        }
        if (!passwd.match(/[a-z]/)) {
            mustAdd++;
        }
        if (!passwd.match(/\d/)) {
            mustAdd++;
        }
        // Iterate through the password to find repeating characters and count changes required
        let repeatChar = 0;
        for (let i = 2; i < passwd.length; i++) {
            if (passwd[i] === passwd[i - 1] && passwd[i] === passwd[i - 2]) {
                repeatChar++;
                i++;
            }
        }
        return Math.max(length, mustAdd, repeatChar);
    }
module.exports = { validatePassword, validatePasswordSteps};