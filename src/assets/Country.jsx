import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
function Country() {
  const param = useParams();
  console.log(param);
  const [data, setData] = useState({});
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      if (location.state) {
        setData(location.state);
      } else {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${param.countryDetail}/?fullText=true`
        );
        const countryData = await response.json();
        setData(countryData[0]);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="navbar flex w-2/3 h-80 items-center justify-between my-40 shadow-lg">
        <img
          className="w-1/2 h-full"
          src={data.flags?.png}
          alt={`Flag of ${data.name?.common}`}
        />
        <div className="flex flex-col items-center w-1/2">
          <h3 className="my-2">
            <b>Name :</b> {data.name?.common}
          </h3>
          <p className="my-2">
            <b>Capital :</b> {data.capital}
          </p>
          <p className="my-2">
            <b>Continent :</b> {data.continents}
          </p>
          <p className="my-2">
            <b>Region :</b> {data.subregion}
          </p>
          <div className="flex justify-center items-center w-1/2 flex-wrap">
            <b>Borders : </b>
            <div className=" flex flex-wrap">
              {data.borders &&
                data.borders.map((val) => (
                  <Link to={`${val}`}>
                    <span key={val} className="py-1 px-2 shadow-lg mx-1">
                      {val}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Country;
