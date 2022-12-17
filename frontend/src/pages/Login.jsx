import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Alert from '../components/Alert';
import Context from '../context/Context';
import getUserData from '../services/getUserData';
import postLogin from '../services/postLogin';

function Login() {
  const {
    loginIsValid, setLoginIsValid, setUser,
  } = useContext(Context);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const history = useHistory();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, status } = await postLogin(credentials);
    if (status === 200) {
      const { data: userData } = await getUserData(credentials.email, data.token);
      setUser(userData);
      localStorage.setItem('token', data.token);
      history.push('/home');
    } else {
      setLoginIsValid(false);
    }
  };

  useEffect(() => localStorage.removeItem('token'), []);

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            type="email"
            autoComplete="off"
            value={credentials.email}
            onChange={(e) => handleChange(e)}
            id="email"
            name="email"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            autoComplete="off"
            value={credentials.password}
            onChange={(e) => handleChange(e)}
            id="password"
            name="password"
          />
        </label>
        <button
          type="submit"
        >
          Login
        </button>
      </form>
      {!loginIsValid && <Alert />}
    </main>
  );
}

export default Login;
