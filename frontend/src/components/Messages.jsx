import React, { useContext } from 'react';
import Context from '../context/Context';

function Messages() {
  const { messages } = useContext(Context);
  return (
    <section>
      <article>
        {messages.map(({ message, date, username }) => (
          <div key={`${date}_${message}_${username}`}>
            <p>{username}</p>
            <p>{date}</p>
            <p>{message}</p>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Messages;
