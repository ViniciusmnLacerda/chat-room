/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [loginIsValid, setLoginIsValid] = useState(true);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({
    username: '',
    name: '',
    lastName: '',
    email: '',
    image: '',
    id: '',
  });
  const [chats, setChats] = useState([]);
  const [doRenderBanner, setDoRenderBanner] = useState(false);
  const value = {
    user,
    setUser,
    loginIsValid,
    setLoginIsValid,
    token,
    setToken,
    chats,
    setChats,
    doRenderBanner,
    setDoRenderBanner,
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
