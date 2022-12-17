import React, { useContext, useEffect } from 'react';
import Alert from '../components/Alert';
import Chats from '../components/Chats';
import Context from '../context/Context';
import getChats from '../services/getChats';

function Home() {
  const {
    token, setToken, loginIsValid, setLoginIsValid, setChats, user: { name, lastName },
  } = useContext(Context);

  useEffect(() => {
    const tokenRecovered = JSON.parse(localStorage.getItem('token'));
    if (!tokenRecovered) {
      setLoginIsValid(false);
    }
    setToken(tokenRecovered);
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
    <div>
      <h1>{`Welcome, ${name} ${lastName}!`}</h1>
      <Chats />
      {!loginIsValid && <Alert />}
    </div>
  );
}

export default Home;
