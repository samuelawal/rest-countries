import React, { useContext } from "react";
import AppContext from "../../context/context";

const Countries = ({countries}) => {
  const { loading, loadingText } = useContext(AppContext);
  return (
    <div className="container">
      {loading ? (
        loadingText
      ) : (
        <div className="country_container">
          {countries.map((country, key) => (
            <article key={key} className="country-holder">
              <img
                src={country.flags.png}
                alt={`${country.name.common} flag`}
                width="300px"
                height="130px"
              ></img>
              <h2>{country.name.common}</h2>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Countries;
