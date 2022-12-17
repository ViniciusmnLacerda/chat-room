import React, { useContext } from 'react';
import Context from '../context/Context';

function Alert() {
  const { setLoginIsValid } = useContext(Context);

  const handleClick = () => setLoginIsValid(true);

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
