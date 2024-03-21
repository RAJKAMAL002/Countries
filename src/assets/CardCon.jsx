import React, { useEffect, useState } from "react";
import Card from "./Card";
const CardCon = (props) => {
  // update data after data has been fetched
  const [data, setData] = useState([]);

  // Data Fetching useing UseEffect hook
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((val) => {
        return val.json();
      })
      .then((val) => setData(val));
  }, []);

  // sorting cards function
  const Ascsorting = () => {
    const sorted_data = [...data].sort((a, b) =>
      a.name.common > b.name.common ? 1 : -1
    );
    setData(sorted_data);
  };

  return (
    <>
      <div className="btn flex">
        <button
          className="navbar btn shadow-lg px-4 py-2 my-5"
          onClick={Ascsorting}
        >
          Sort
        </button>
      </div>
      <div className="card-container grid grid-cols-4 w-5/6">
        {data
          .filter(
            (data) => data.name.common.toLowerCase().includes(props.SearchItem) // Filter to implement search functionality
          )
          .map((country) => {
            // Map to render all the data object in card
            // return <Card flag={country.flags.png} name={country.name.common} />;
            return <Card countryDetail={country} />;
          })}
      </div>
    </>
  );
};
export default CardCon;
