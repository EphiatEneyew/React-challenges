import React, { useState } from 'react';
import classes from './Login.module.css';

function LoginPage() {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredPasswordIsValid = enteredPassword.length >= 4;
  const passwordInputIsInvalid = !enteredPasswordIsValid && enteredPasswordTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordInputBlurHandler = () => {
    setEnteredPasswordTouched(true);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (enteredPasswordIsValid && enteredEmailIsValid) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid email or password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEnteredPassword('');
    setEnteredEmail('');
    setEnteredPasswordTouched(false);
    setEnteredEmailTouched(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2>Welcome!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin}>
      <div className={classes.formControl + ' ' + (enteredEmailIsInvalid ? classes.invalid : '')}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
          required
        /> 
        {enteredEmailIsInvalid && <p className={classes.errorText}>Please enter a valid email.</p>}
      </div>
      <div className={classes.formControl + ' ' + (passwordInputIsInvalid ? classes.invalid : '')}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={enteredPassword}
          onBlur={passwordInputBlurHandler}
          onChange={passwordInputChangeHandler}
          required
        /> 
        {passwordInputIsInvalid && <p className={classes.errorText}>Password length should be greater than four.</p>}
      </div>
      <button type="submit" className={classes.formActions}>Login</button>
    </form>
  );
}

export default LoginPage;
