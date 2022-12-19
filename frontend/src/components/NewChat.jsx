import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import getUsers from '../services/getUsers';

function NewChat() {
  const { setOpenNewChat, token, setUsers } = useContext(Context);
  const [search, setSearch] = useState({ username: '' });

  const handleChange = ({ target: { name, value } }) => {
    setSearch({ [name]: value });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, status } = await getUsers(token);
      if (status === 200) setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <section>
      <h2>New chat</h2>
      <button
        type="button"
        onClick={() => setOpenNewChat(false)}
      >
        Close
      </button>
      <form>
        <label htmlFor="username">
          <input
            type="text"
            autoComplete="off"
            value={search.username}
            onChange={(e) => handleChange(e)}
            id="username"
            name="username"
          />
        </label>
      </form>
    </section>
  );
}

export default NewChat;
