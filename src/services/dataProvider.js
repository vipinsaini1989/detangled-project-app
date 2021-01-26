import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://detangled.in/develop/753614e6-ca4d-42a1-a14c-7a8d72c51826/',
});

const getAllEvents = async () => {
  const resp = await instance({
    method: 'GET',
    url: 'events',
  });

  const { data } = resp;
  return data;
};

export { getAllEvents };
