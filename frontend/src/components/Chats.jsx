import React, { useContext } from 'react';
import Context from '../context/Context';
import getMessages from '../services/getMessages';

function Chats() {
  const {
    chats,
    token,
    setMessages,
    setDoRenderBanner,
    setChatId,
    setOpenNewChat,
  } = useContext(Context);

  const fetchMessages = async (chatId) => {
    const { data, status } = await getMessages(chatId, token);
    if (status === 200) {
      setMessages(data);
      setChatId(chatId);
      setDoRenderBanner(false);
    }
  };

  return (
    <aside>
      <h2>Direct messages</h2>
      <button
        type="button"
        onClick={() => setOpenNewChat(true)}
      >
        New chat
      </button>
      <main>
        {chats.map(({
          name, lastName, userId, image, chatId,
        }) => (
          <button
            key={userId}
            type="button"
            onClick={() => fetchMessages(chatId)}
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
