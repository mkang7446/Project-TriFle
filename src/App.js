import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  const [data, setData] = useState([]);
  const [timeSeries, setTimeSeries] = useState("TIME_SERIES_DAILY");
  const [symbol, setSymbol] = useState("APPL");

  const searchOption = {
    key: process.env.REACT_APP_ALPHAV_KEY,
    api: "https://www.alphavantage.co/",
  };

  function getData() {
    const url = `${searchOption.api}query?function=${timeSeries}&symbol=${symbol}&apikey=${searchOption.key}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getData(data);
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
