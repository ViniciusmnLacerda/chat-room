/* eslint-disable no-alert */
import React, { useContext, useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import { MdOutlineDone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import getUsers from '../services/getUsers';
import postSignup from '../services/postSignup';

function Signup() {
  const { users, setUsers } = useContext(Context);
  const [registered, setRegistered] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    name: '',
    lastName: '',
    email: '',
  });
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [validations, setValidations] = useState({
    uppercase: false,
    number: false,
    username: false,
    password: false,
    name: false,
    lastName: false,
    email: false,
    emailIsValid: true,
    usernameIsValid: true,
  });

  const handleChange = ({ target: { name, value } }) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  useEffect(() => {
    const uppercaseRegex = /(?=.*[A-Z])/;
    const numberRegex = /(?=.*\d)/;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    setValidations({
      uppercase: uppercaseRegex.test(credentials.password),
      number: numberRegex.test(credentials.password),
      username: credentials.username.length > 2,
      password: credentials.password.length > 5,
      name: credentials.name.length > 2,
      lastName: credentials.name.length > 2,
      email: emailRegex.test(credentials.email),
      emailIsValid: users.filter((u) => u.email === credentials.email).length === 0,
      usernameIsValid: users.filter((u) => u.username === credentials.username).length === 0,
    });
  }, [credentials]);

  useEffect(() => {
    const isTheDataValid = Object.values(validations).every((boolean) => boolean === true);
    setIsBtnDisabled(!isTheDataValid);
  }, [validations]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, status } = await getUsers();
      if (status === 200) setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { status } = await postSignup(credentials);
    if (status === 201) setRegistered(true);
    else alert('Please try again');
  };

  return (
    <main>
      <header>
        <h2>Singup</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            placeholder="First name"
            type="text"
            name="name"
            id="name"
            value={credentials.name}
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="lastName">
          <input
            placeholder="Last name"
            type="text"
            name="lastName"
            id="lastName"
            value={credentials.lastName}
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="username">
          <input
            placeholder="Username"
            type="text"
            name="username"
            id="username"
            value={credentials.username}
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
        </label>
        {!validations.usernameIsValid && <p>Username is not available</p>}
        <label htmlFor="email">
          <input
            placeholder="E-mail"
            type="email"
            name="email"
            id="email"
            value={credentials.email}
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
        </label>
        {!validations.emailIsValid && <p>E-mail is not available</p>}
        <label htmlFor="password">
          <input
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            value={credentials.password}
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <p className={validations.password ? 'right' : 'wrong'}>
          {validations.password ? <MdOutlineDone /> : <ImCross />}
          {'  '}
          Your password must be at least six characters long
        </p>
        <p className={validations.uppercase ? 'right' : 'wrong'}>
          {validations.uppercase ? <MdOutlineDone /> : <ImCross />}
          {'  '}
          Your password must have at least one uppercase letter
        </p>
        <p className={validations.number ? 'right' : 'wrong'}>
          {validations.number ? <MdOutlineDone /> : <ImCross />}
          {'  '}
          Your password must have at least one number
        </p>
        <button
          type="submit"
          disabled={isBtnDisabled}
        >
          Register
        </button>
        <button
          type="button"
        >
          <Link to="/">Login</Link>
        </button>
      </form>
      {registered && (
      <div>
        <p>User successfully registered!</p>
        <button
          type="button"
        >
          <Link to="/">Login</Link>
        </button>
      </div>
      )}
    </main>
  );
}

export default Signup;
