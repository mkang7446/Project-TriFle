import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SearchResult from "./Components/Stock.js/SearchResult";
import About from "./Components/Header/About";
import News from "./Components/Header/News";

import { SymbolContext } from "./Context/SymbolContext";

import { Route, Routes, Link } from "react-router-dom";

const initialStocks = {};

function App() {
  // USESTATE VARIABLES
  const [mainStocks, setMainStocks] = useState([
    "AAPL",
    "MSFT",
    "GOOG",
    "AMZN",
    "TSLA",
    "BRK-A",
    "NVDA",
    "FB",
    "NFLX",
  ]);

  const [timeSeries, setTimeSeries] = useState("TIME_SERIES_DAILY");

  const [symbol, setSymbol] = useState("AAPL");

  // HANDEL FUNCTIONS
  function handleChange(event) {}

  const searchOption = {
    key: process.env.REACT_APP_ALPHAV_KEY,
    api: "https://www.alphavantage.co/",
  };

  function getData() {
    const url = `${searchOption.api}query?function=${timeSeries}&symbol=${symbol}&apikey=${searchOption.key}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMainStocks(data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <SymbolContext.Provider value={symbol}>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<SearchResult />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
      </div>
    </SymbolContext.Provider>
  );
}

export default App;
