import React, { useContext } from "react";
import Countries from "../components/CountriesList/Countries";
import Header from "../components/Header";
import AppContext from "../context/context";

const Root = () => {
    const { countries, filter, onFilterChange } = useContext(AppContext)
    const filteredCountries = countries.filter(country => filter === 'all' || country.region === filter)
  return (
    <div>
      <Header countries={countries} filter={filter} onFilterChange={onFilterChange}/>
      <React.Fragment>
        <Countries countries={filteredCountries}/>
      </React.Fragment>
    </div>
  );
};

export default Root;
