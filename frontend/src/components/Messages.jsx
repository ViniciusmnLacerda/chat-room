import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import postMessage from '../services/postMessage';

function Messages() {
  const { messages, token, chatId } = useContext(Context);
  const [text, setText] = useState({ message: '' });
  const [isBtnDisable, setIsBtnDisabled] = useState(true);

  const handleChange = ({ target: { name, value } }) => {
    setText({ [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { status } = await postMessage(chatId, token, text);
    if (status === 201) setText({ message: ' ' });
  };

  useEffect(() => setIsBtnDisabled(text.message.length > 0), [text]);

  return (
    <section>
      <article>
        {messages.map(({
          message, date, username, name, lastName,
        }) => (
          <div key={`${date}_${message}_${username}`}>
            <p>{username}</p>
            <p>{`${name} ${lastName}`}</p>
            <p>{date}</p>
            <p>{message}</p>
          </div>
        ))}
      </article>
      <footer>
        <form onSubmit={handleSubmit}>
          <label htmlFor="message">
            <input
              type="text"
              autoComplete="off"
              value={text.message}
              onChange={(e) => handleChange(e)}
              id="message"
              name="message"
            />
          </label>
          <button
            type="submit"
            disabled={!isBtnDisable}
          >
            Send
          </button>
        </form>
      </footer>
    </section>
  );
}

export default Messages;
