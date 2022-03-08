import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/Header/About";
import Crypto from "./Components/Main/Crypto";
import StockDetails from "./Components/Main/StockDetails";
import { useNavigate, Navigate } from "react-router-dom";

import { SymbolContext } from "./Context/SymbolContext";

import { Route, Routes } from "react-router-dom";
import InitialStocks from "./Components/Main/InitialStocks";

function App() {
  let navigate = useNavigate();

  const [quote, setQuote] = useState({});
  const [info, setInfo] = useState({});
  const [searchString, setSearchString] = useState("");

  function handleChange(event) {
    setSearchString(event.target.value.toUpperCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    getInfo(searchString);
    getQuote(searchString);
  }

  const key = process.env.REACT_APP_FINN_KEY;

  function getQuote(searchString) {
    const quoteURL = `https://finnhub.io/api/v1/quote?symbol=${searchString}&token=${key}`;

    fetch(quoteURL)
      .then((res) => res.json())
      .then((data) => {
        if (data.d === null && data !== {}) {
          alert("Please enter a valide symbol / ticker!");
          setSearchString("");
          navigate("/");
        } else {
          setQuote(data);
          navigate(`/details/${searchString}`);
          setSearchString("");
        }
      })
      .catch(console.error);
  }

  function getInfo(searchString) {
    const infoURL = `https://finnhub.io/api/v1/stock/profile2?symbol=${searchString}&token=${key}`;

    fetch(infoURL)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      })
      .catch(console.error);
  }

  return (
    <SymbolContext.Provider
      value={{
        searchString,
      }}
    >
      <div className="App">
        <Header handleChange={handleChange} handleSubmit={handleSubmit} />
        <main>
          <Routes>
            <Route path="/" element={<InitialStocks />} />
            <Route path="/about" element={<About />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route
              path="/details/:ticker"
              element={<StockDetails quote={quote} info={info} />}
            />
            <Route
              path="/details/:ticker"
              element={<Navigate to="/details/:ticker" />}
            />
          </Routes>
        </main>
      </div>
    </SymbolContext.Provider>
  );
}

export default App;
