import axios from "axios";
const URL = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(URL);
  return request.then((res) => res.data);
};

const create = (newContact) => {
  const request = axios.post(URL, newContact);
  return request.then((res) => res.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${URL}/${id}`, newObject);
  return request.then((res) => res.data);
};

export default {
  getAll,
  create,
  update,
};
