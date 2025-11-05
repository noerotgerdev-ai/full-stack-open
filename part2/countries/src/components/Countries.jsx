import Country from "./Country";

const Countries = ({ allCountries, handleClick }) => {
  if (allCountries.length > 10)
    return <div>Too many matches, specify another filter</div>;

  if (allCountries.length <= 10 && allCountries.length > 1) {
    return (
      <div>
        {allCountries.map((item) => (
          <div key={item.name.official}>
            {item.name.common} <button onClick={() => handleClick(item.name.common)}>Show</button>
          </div>
        ))}
      </div>
    );
  }

  if (allCountries.length === 1) {
    return <Country country={allCountries[0]} />;
  }
};
export default Countries;
