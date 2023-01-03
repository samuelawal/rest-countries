import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="nav_container">
        <p className="logo">My Countries</p>
        <div>
          <ul className="nav_list">
            <li className="list_style">Theme</li>
            <li className="list_style">
              Sort by
              <ul className="inner_sortBy">
                <li className="inner_listed_style">
                  <input type="radio" id="name" name="sort" />
                  <label for="name">Name (A-Z)</label>
                </li>
                <li className="inner_listed_style">
                  <input type="radio" id="population" name="sort" />
                  <label for="population">Population</label>
                </li>
              </ul>
            </li>
            <li className="list_style">Filter by</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
