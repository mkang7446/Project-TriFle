import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/Header/About";
import StockDetails from "./Components/Stock/StockDetails";
import { useNavigate, Navigate } from "react-router-dom";

import { SymbolContext } from "./Context/SymbolContext";

import { Route, Routes } from "react-router-dom";
import InitialStocks from "./Components/Stock/InitialStocks";

function App() {
  // USESTATE VARIABLES
  let navigate = useNavigate();
  const [quote, setQuote] = useState({});
  const [info, setInfo] = useState({});
  const [searchString, setSearchString] = useState("");

  // HANDEL FUNCTIONS
  function handleChange(event) {
    setSearchString(event.target.value.toUpperCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    // setSearchString(searchString);
    getInfo(searchString);
    getQuote(searchString);
    // navigate(`/details/${searchString}`);
    // setSearchString("");

    // <Link to={`/details/${searchString}`} />;
  }

  // useEffect(() => {
  //   if (quote.c === 0) {
  //     alert("NO!");
  //     setSearchString("");
  //   }
  //   if (quote.c > 0) {
  //     navigate(`/details/${searchString}`);
  //     setSearchString("");
  //   }
  // }, [quote]);

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

  // useEffect(() => {
  //   getQuote(searchString);
  //   getInfo(searchString);
  // }, []);

  // useEffect(() => {
  // getInfo(searchString);
  // }, []);

  // function clear() {
  //   setQuote({});
  // }

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
            {/* <Route path="/news" element={<News />} /> */}
            <Route
              path="/details/:ticker"
              element={<StockDetails quote={quote} info={info} />}
            />
            {/* use navigae to link to stockdetail */}
            <Route
              path="/details/:ticker"
              element={<Navigate to="/details/:ticker" />}
            />
            {/* <Route path="/" element={<Navigate to="/detail/:ticker" />} /> */}
          </Routes>
        </main>
      </div>
    </SymbolContext.Provider>
  );
}

export default App;
