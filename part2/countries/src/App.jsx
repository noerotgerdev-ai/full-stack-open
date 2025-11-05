import { useState, useEffect } from "react";
import Countries from "./components/Countries";
import FindForm from "./components/FindForm";
import countriesAPI from "./services/countriesAPI";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    countriesAPI
      .getAll()
      .then((res) => setCountries(res))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCountries = countries.filter((item) => {
    return item.name.common.toLowerCase().includes(filter.toLowerCase());
  });
  console.log(filteredCountries);

  return (
    <>
      <FindForm value={filter} handleChange={handleChange} />
      <Countries allCountries={filteredCountries} />
    </>
  );
}

export default App;
