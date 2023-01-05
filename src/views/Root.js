import React, { useContext } from "react";
import Countries from "../components/CountriesList/Countries";
import Header from "../components/Header";
import AppContext from "../context/context";
import { sortCountries } from "../utils/utils";

const Root = () => {
    const { countries, filter, sortBy, sortOrder, onFilterChange, onSortOrderChange } = useContext(AppContext)
    const {key, type} = sortBy
    const filteredCountries = countries.filter(country => filter === 'all' || country.region === filter);
    const sortedAndFilteredCountries = sortCountries({countries: filteredCountries, key, type, order: sortOrder})
  return (
    <div>
      <Header countries={countries} filter={filter} onFilterChange={onFilterChange} onSortOrderChange={onSortOrderChange}/>
      <React.Fragment>
        <Countries countries={sortedAndFilteredCountries}/>
      </React.Fragment>
    </div>
  );
};

export default Root;
