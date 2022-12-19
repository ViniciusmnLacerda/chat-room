import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Context from '../context/Context';
import putUser from '../services/putUser';

function EditProfile() {
  const {
    setOpenProfile,
    user: { email },
    token,
    setUser,
  } = useContext(Context);
  const [credentials, setCredentials] = useState({
    name: '',
    lastName: '',
    image: '',
  });
  const [isBtnDisable, setIsBtnDisabled] = useState(true);

  const handleChange = ({ target: { name, value } }) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, status } = await putUser(email, token, credentials);
    if (status === 201) setUser(data);
    setOpenProfile(false);
  };

  useEffect(() => {
    const isTheDataValid = [
      credentials.name.length > 2,
      credentials.lastName.length > 2,
    ].every(Boolean);
    setIsBtnDisabled(!isTheDataValid);
  }, [credentials]);

  return (
    <section>
      EditProfile
      <button
        type="button"
        onClick={() => setOpenProfile(false)}
      >
        <AiOutlineClose />
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            autoComplete="off"
            placeholder="Name"
            type="text"
            name="name"
            id="name"
            value={credentials.name}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="lastName">
          <input
            autoComplete="off"
            placeholder="Last name"
            type="text"
            name="lastName"
            id="lastName"
            value={credentials.lastName}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="image">
          <input
            autoComplete="off"
            placeholder="URL image - optional"
            type="url"
            name="image"
            id="image"
            value={credentials.image}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button
          type="submit"
          disabled={isBtnDisable}
        >
          Edit
        </button>
      </form>
    </section>
  );
}

export default EditProfile;
