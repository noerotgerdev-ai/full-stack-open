import axios from "axios";
const URL = "/api/persons";

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

const deleteOne = (id) => {
    const request = axios.delete(`${URL}/${id}`)
    return request.then(res => res)
}

export default {
  getAll,
  create,
  update,
  deleteOne
};
