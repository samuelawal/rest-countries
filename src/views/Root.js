import React from "react";
import Countries from "../components/CountriesList/Countries";
import Header from "../components/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <React.Fragment>
        <Countries />
      </React.Fragment>
    </div>
  );
};

export default Root;
