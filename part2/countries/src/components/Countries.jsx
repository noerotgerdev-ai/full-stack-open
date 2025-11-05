import Country from "./Country";

const Countries = ({ allCountries }) => {
  if (allCountries.length > 10)
    return <div>Too many matches, specify another filter</div>;

  if (allCountries.length <= 10 && allCountries.length > 1) {
    return (
      <div>
        {allCountries.map((item) => (
          <h2 key={item.name.official}>{item.name.common}</h2>
        ))}
      </div>
    );
  }

  if(allCountries.length === 1){
    return(
        <Country country={allCountries[0]} />
    )
  }
};
export default Countries;
