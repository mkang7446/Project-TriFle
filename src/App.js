import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SearchResult from "./Components/Stock.js/SearchResult";

const initialStocks = {};

function App() {
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
    <div className="App">
      <Header />
      <SearchResult />
    </div>
  );
}

export default App;
