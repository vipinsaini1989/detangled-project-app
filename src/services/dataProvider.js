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

const updateEvent = async (evt) => {
  const resp = await instance({
    method: 'PUT',
    url: `events/${evt.id}`,
    data: evt,
  });

  const { data } = resp;
  return data;
};

const deleteEvent = async (id) => {
  const resp = await instance({
    method: 'DELETE',
    url: `events/${id}`,
  });

  const { data } = resp;
  return data;
};

export { getAllEvents, updateEvent, deleteEvent };
