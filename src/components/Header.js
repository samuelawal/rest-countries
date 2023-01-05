import React from "react";
import { NUMBER } from "../constants/constants";
import { getCountryContinents } from "../utils/utils";

const Header = ({countries, filter, onFilterChange, onSortOrderChange}) => {
    const myContinents = getCountryContinents(countries)
    const filters = ['all', ...myContinents]
  return (
    <nav>
      <div className="nav_container">
        <p className="logo">My Countries</p>
        <div>
          <ul className="nav_list">
            <li className="list_style">Theme</li>
            <li className="list_style">
              Sort by
              <ul className="inner_sortBy sortOpen">
                <li className="inner_listed_style s" >
                  <input type="checkbox" id="name" onClick={() => onSortOrderChange('name')}/>
                  <label htmlFor="name">Name (A-Z)</label>
                </li>
                <li className="inner_listed_style" >
                  <input type="checkbox" id="population" onClick={() => onSortOrderChange('population', NUMBER)} />
                  <label htmlFor="population">Population</label>
                </li>
              </ul>
            </li>
            <li className="list_style">Filter by
            <ul className="inner_sortBy">
                {filters.map((item, index) => (
                    <React.Fragment key={index}>
                        <li className="inner_listed_style">
                        <input type="radio" name="continents" value={item} id={item} checked={filter === item} onChange={onFilterChange}/>
                        <label htmlFor={item}>{item}</label>
                        </li>
                    </React.Fragment>
                ))}
            </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
