import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/Header/About";
import News from "./Components/Header/News";
import StockDetails from "./Components/Stock/StockDetails";
import { useNavigate, Navigate } from "react-router-dom";

import { SymbolContext } from "./Context/SymbolContext";

import { Route, Routes } from "react-router-dom";
import InitialStocks from "./Components/Stock/InitialStocks";

function App() {
  // USESTATE VARIABLES
  let navigate = useNavigate();
  const [quote, setQuote] = useState([]);
  const [info, setInfo] = useState([]);
  const [searchString, setSearchString] = useState("");
  console.log(quote, info);

  // HANDEL FUNCTIONS
  function handleChange(event) {
    setSearchString(event.target.value.toUpperCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    // setSearchString(searchString);
    getQuote(searchString);
    getInfo(searchString);
    navigate(`/details/${searchString}`);
    setSearchString("");
    console.log("hello world");
    // <Link to={`/details/${searchString}`} />;
  }

  const key = process.env.REACT_APP_FINN_KEY;

  function getQuote(searchString) {
    const quoteURL = `https://finnhub.io/api/v1/quote?symbol=${searchString}&token=${key}`;

    fetch(quoteURL)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
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

  useEffect(() => {
    getQuote(searchString);
  }, []);

  useEffect(() => {
    getInfo(searchString);
  }, []);

  const open = quote.o;
  const high = quote.h;
  const low = quote.l;
  const price = quote.c;
  const change = quote.d;
  const changePercent = quote.dp;
  const exchange = info.exchange;
  const industry = info.finnhubIndustry;
  const ipo = info.ipo;
  const logo = info.logo;
  const name = info.name;
  const ticker = info.ticker;
  const companyURL = info.weburl;

  return (
    <SymbolContext.Provider
      value={{
        searchString,
        open,
        high,
        low,
        price,
        change,
        changePercent,
        exchange,
        industry,
        ipo,
        logo,
        name,
        ticker,
        companyURL,
      }}
    >
      <div className="App">
        <Header handleChange={handleChange} handleSubmit={handleSubmit} />
        <main>
          <Routes>
            <Route path="/" element={<InitialStocks />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route
              path="/details/:ticker"
              element={<StockDetails quote={quote} info={info} />}
            />
            {/* use navigae to link to stockdetail */}
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
