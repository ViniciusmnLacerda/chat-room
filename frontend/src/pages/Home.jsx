import React, { useContext, useEffect } from 'react';
import Alert from '../components/Alert';
import Banner from '../components/Banner';
import Chats from '../components/Chats';
import EditProfile from '../components/EditProfile';
import Messages from '../components/Messages';
import NewChat from '../components/NewChat';
import Context from '../context/Context';
import getChats from '../services/getChats';
import '../styles/home.css';

function Home() {
  const {
    token,
    setToken,
    loginIsValid,
    setLoginIsValid,
    setChats,
    doRenderBanner,
    setDoRenderBanner,
    openNewChat,
    setUser,
    setOpenNewChat,
    openProfile,
  } = useContext(Context);

  const setBanner = (e) => {
    if (e.keyCode === 27) setDoRenderBanner(true);
  };

  useEffect(() => {
    setOpenNewChat(false);
    setDoRenderBanner(true);
    const tokenRecovered = JSON.parse(localStorage.getItem('token'));
    if (!tokenRecovered) setLoginIsValid(false);
    else {
      const userDataRecovered = JSON.parse(localStorage.getItem('userData'));
      setUser(userDataRecovered);
      setToken(tokenRecovered);
      window.addEventListener('keydown', setBanner);
    }
  }, []);

  useEffect(() => () => {
    window.removeEventListener('keydown', setBanner);
  }, []);

  useEffect(() => {
    const fetchChats = async () => {
      const { data, status } = await getChats(token);
      if (status === 200) {
        setChats(data);
      }
    };
    fetchChats();
  }, [token]);

  return (
    <div className="home-container">
      {openProfile && <EditProfile />}
      {openNewChat && <NewChat />}
      <Chats />
      {!loginIsValid && <Alert />}
      {doRenderBanner ? <Banner /> : <Messages />}
    </div>
  );
}

export default Home;
