import React, { useContext } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';
import Context from '../context/Context';
import '../styles/profile.css';

function Profile() {
  const { user: { name, lastName, image }, setOpenProfile } = useContext(Context);
  return (
    <header className="profile">
      {image
        ? <img src={image} alt={`${name} ${lastName}`} width="30px" />
        : <AiOutlineUser />}
      <h1>{`${name} ${lastName}`}</h1>
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
