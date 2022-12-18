import React, { useContext } from 'react';
import Context from '../context/Context';

function Chats() {
  const { chats } = useContext(Context);

  return (
    <aside>
      <h2>Direct messages</h2>
      <main>
        {chats.map(({
          name, lastName, userId, image,
        }) => (
          <button
            key={userId}
            type="button"
          >
            <p>{`${name} ${lastName}`}</p>
            <img src={image} alt={`${name} ${lastName}`} width="30px" />
          </button>
        ))}
      </main>
    </aside>
  );
}

export default Chats;
