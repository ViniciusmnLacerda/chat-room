/* eslint-disable no-param-reassign */
import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import getUsers from '../services/getUsers';
import postChat from '../services/postChat';

function NewChat() {
  const {
    setOpenNewChat,
    token,
    setUsers,
    users,
  } = useContext(Context);
  const [search, setSearch] = useState({ name: '' });
  const [usersToRender, setUsersToRender] = useState([]);

  const handleChange = ({ target: { name, value } }) => {
    setSearch({ [name]: value });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, status } = await getUsers(token);
      if (status === 200) {
        data.forEach((user) => {
          const fullName = `${user.name} ${user.lastName}`.toLowerCase();
          user.fullName = fullName;
        });
        data.sort((a, b) => (a.name > b.name ? 1 : -1));
        setUsers(data);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (search.name.length > 0) {
      const searchedName = search.name.toLowerCase();
      const usersFiltered = users.filter((user) => user.fullName.includes(searchedName));
      setUsersToRender(usersFiltered);
    } else setUsersToRender([]);
  }, [search]);

  const handleClick = async (username) => {
    const { data, status } = await postChat(username, token);
    console.log('username: ', username);
    console.log('token: ', token);
    console.log('data: ', data);
    console.log('status: ', status);
  };

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
        <label htmlFor="name">
          <input
            type="text"
            autoComplete="off"
            value={search.name}
            onChange={(e) => handleChange(e)}
            id="name"
            name="name"
          />
        </label>
      </form>
      <ul>
        {usersToRender.map(({
          name, lastName, id, username,
        }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => handleClick(username)}
            >
              {`${name} ${lastName}`}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NewChat;
