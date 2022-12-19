import React, { useContext } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';
import Context from '../context/Context';

function Profile() {
  const { user: { name, lastName, image }, setOpenProfile } = useContext(Context);
  return (
    <header>
      {image
        ? <img src={image} alt={`${name} ${lastName}`} width="30px" />
        : <AiOutlineUser />}
      <p>{`${name} ${lastName}`}</p>
      <button
        type="button"
        onClick={() => setOpenProfile(true)}
      >
        <IoMdSettings />
      </button>
    </header>
  );
}

export default Profile;
