import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';

function Alert() {
  const { setLoginIsValid } = useContext(Context);
  const history = useHistory();

  const handleClick = () => {
    setLoginIsValid(true);
    history.push('/');
  };

  return (
    <div>
      <p>Invalid credentials</p>
      <button
        type="button"
        onClick={handleClick}
      >
        Sign in again
      </button>
    </div>
  );
}

export default Alert;
