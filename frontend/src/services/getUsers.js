import axios from 'axios';

const getUsers = async (token) => {
  const endpoint = 'http://localhost:3001/home';
  try {
    const { data, status } = await axios.get(endpoint, {
      headers: {
        authorization: token,
      },
    });

    return { data, status };
  } catch (e) {
    const { data: { message }, status } = e.response;
    return { data: message, status };
  }
};

export default getUsers;
