import axios from "axios";
const apiKEY = import.meta.env.VITE_API_KEY;

const getAll = (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKEY}`;
  const request = axios.get(URL);
  return request.then((res) => res.data);
};

export default { getAll };
