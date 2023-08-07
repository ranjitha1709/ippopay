import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
function calculateMinSteps(password) {
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

function App() {
  const [password, setPassword] = useState('');
  const [minSteps, setMinSteps] = useState(null);
  const [passwordError, setPasswordErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordChange =async (e) => {
    // const newPassword = e.target.value;
    // setPassword(newPassword);
    setMinSteps(calculateMinSteps(password));
    // e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/calculate', { password, steps: minSteps });
        console.log(response.data.message);
      } catch (error) {
        console.error('Error sending data:', error);
      }
      // setMinSteps('')
  };
  function validateForm() { 
    const passwordLength =      password.length;
    if(passwordLength===0){
      alert(
        'Password must contain least 6 characters and at most 20 characters.',
      )
      return    }
    // setPasswordErr(errMsg)
    // console.log(errMsg)
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Password Strength Checker</h1>
        <div className="password-input-container">
        {/* <label> */}
          Enter your password:
          <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => { setPassword(e.target.value); setMinSteps(null) }} />
          <button className="toggle-password" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </button>
          {/* </label> */}
        </div>
        {password.length===0  && minSteps !== null &&(
            <div className='error'>White or empty space is not allowed.</div>
          )}
        <button className='button' type="submit" value="Submit"  onClick={() => {
          handlePasswordChange()
          }}
        >Check</button>
        {password!=='' && minSteps !== null && (
          <p>Minimum steps to make the password strong: {minSteps}</p>
        )}
      </header>
    </div>
  );
}

export default App;
