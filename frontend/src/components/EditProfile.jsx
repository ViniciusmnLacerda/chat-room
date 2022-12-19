import React, { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Context from '../context/Context';

function EditProfile() {
  const { setOpenProfile } = useContext(Context);

  return (
    <div>
      EditProfile
      <button
        type="button"
        onClick={() => setOpenProfile(false)}
      >
        <AiOutlineClose />
      </button>
    </div>
  );
}

export default EditProfile;
