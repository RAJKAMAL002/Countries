import React from "react";
import { Link } from "react-router-dom";
export default function Card({ countryDetail }) {
  return (
    <>
      <Link to={countryDetail.name.common} state={countryDetail}>
        <div className="navbar card flex flex-col rounded-xl text-center mx-5 my-10 shadow-lg items-center justify-center">
          <img className="h-60" src={countryDetail.flags.png} />
          <h2 className="py-5">{countryDetail.name.common}</h2>
        </div>
      </Link>
    </>
  );
}
