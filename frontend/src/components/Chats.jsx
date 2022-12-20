import React, { useContext, useState } from 'react';
import { AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';
import Context from '../context/Context';
import getMessages from '../services/getMessages';
import '../styles/chats.css';
import Profile from './Profile';

function Chats() {
  const {
    chats,
    token,
    setMessages,
    setDoRenderBanner,
    setChatId,
    setOpenNewChat,
  } = useContext(Context);

  const [isChatVisible, setIsChatVisible] = useState(false);

  const fetchMessages = async (chatId) => {
    const { data, status } = await getMessages(chatId, token);
    if (status === 200) {
      setMessages(data);
      setChatId(chatId);
      setDoRenderBanner(false);
    }
  };

  const handleKeyPress = (event) => {
    event.preventDefault();
    if (event.key === 'Enter') setIsChatVisible(!isChatVisible);
  };

  return (
    <aside>
      <Profile />
      <section className="chats">
        <div
          role="button"
          tabIndex="0"
          className="chats-header"
          onKeyPress={handleKeyPress}
          onClick={() => setIsChatVisible(!isChatVisible)}
        >
          <h2>Chats</h2>
          <button
            type="button"
            onClick={() => setOpenNewChat(true)}
          >
            <AiOutlinePlus />
          </button>
        </div>
        <main className={isChatVisible ? 'visible' : 'not-visible'}>
          {chats.map(({
            name, lastName, userId, image, chatId,
          }) => (
            <button
              key={userId}
              type="button"
              onClick={() => fetchMessages(chatId)}
            >
              {image
                ? <img src={image} alt={`${name} ${lastName}`} width="30px" />
                : <AiOutlineUser />}
              <p>{`${name} ${lastName}`}</p>
            </button>
          ))}
        </main>
      </section>
    </aside>
  );
}

export default Chats;
