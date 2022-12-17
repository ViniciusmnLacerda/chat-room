/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [loginIsValid, setLoginIsValid] = useState(true);
  const [user, setUser] = useState({
    username: '',
    name: '',
    lastName: '',
    email: '',
    image: '',
    id: '',
  });

  const value = {
    user,
    setUser,
    loginIsValid,
    setLoginIsValid,
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
