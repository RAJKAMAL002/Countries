import { useContext, useState } from "react";
import "./App.css";
import "./index.css";
import CardCon from "./assets/CardCon";
import Navbar from "./assets/Navbar";
import { Route, Routes } from "react-router-dom";
import Country from "./assets/Country";
import { theme } from "./contexts/Themecontext";

function App() {
  const [searchResult, setSearchResult] = useState("");
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );
  return (
    <>
      <theme.Provider value={[isDark, setIsDark]}>
        <div>
          <Navbar searchItem={(item) => setSearchResult(item)} />
          <div
            className={`${
              isDark ? "dark" : ""
            } main flex items-center justify-center flex-col`}
          >
            <Routes>
              <Route path="/">
                <Route
                  path=""
                  element={<CardCon SearchItem={searchResult} />}
                />
                <Route path=":countryDetail">
                  <Route path="" element={<Country />} />
                  <Route path=":countryDetail" element={<Country />} />
                </Route>
              </Route>
            </Routes>
          </div>
        </div>
      </theme.Provider>
    </>
  );
}

export default App;
