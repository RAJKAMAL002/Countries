import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { theme } from "../contexts/Themecontext";

function Navbar(props) {
  const [isDark, setIsDark] = useContext(theme);
  const [search, setSearch] = useState("");
  props.searchItem(search);
  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <nav className="navbar flex flex-row w-full justify-between items-center h-16 bg-white shadow ">
        <Link to={"/"}>
          <div className="text-xl mx-10">FunFlags</div>
        </Link>
        <div
          className=" cursor-pointer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDark", !isDark);
          }}
        >
          <i class={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>{" "}
          <span> {`${isDark ? "Light" : "Dark"} Mode `}</span>
        </div>
        <input
          className="mx-20 py-2 px-5"
          type="text"
          placeholder="Seach here..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </nav>
    </div>
  );
}

export default Navbar;
