import { useState, useEffect } from "react";
import Countries from "./components/Countries";
import FindForm from "./components/FindForm";
import countriesAPI from "./services/countriesAPI";
import Weather from "./components/Weather";

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

  const handleClick = (name) => {
    setFilter(name);
  };

  const filteredCountries = countries.filter((item) => {
    return item.name.common.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <FindForm value={filter} handleChange={handleChange} />
      <Countries allCountries={filteredCountries} handleClick={handleClick} />
      {filteredCountries.length === 1 && <Weather city={filteredCountries[0].capital[0]} />}
    </>
  );
}

export default App;
