import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SearchResult from "./Components/Stock.js/SearchResult";
import About from "./Components/Header/About";
import News from "./Components/Header/News";

import { SymbolContext } from "./Context/SymbolContext";

import { Route, Routes, Link } from "react-router-dom";

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

  const [stocks, setStocks] = useState(null);

  const [searchString, setSearchString] = useState("AAPL");

  // HANDEL FUNCTIONS
  function handleChange(event) {
    setSearchString(event.target.value.toUpperCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    getData(searchString);
  }

  const searchOption = {
    key: process.env.REACT_APP_ALPHAV_KEY,
    api: "https://www.alphavantage.co/",
  };

  function getData(searchString) {
    // searchString.map((element) => {
    //   return element;
    // });
    const url = `${searchOption.api}query?function=${timeSeries}&symbol=${searchString}&apikey=${searchOption.key}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setStocks(data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getData(searchString);
  }, []);

  if (!stocks) {
    return <p>Loading...</p>;
  }

  return (
    <SymbolContext.Provider
      value={{ handleChange, handleSubmit, searchString, stocks }}
    >
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
