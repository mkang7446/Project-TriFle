import React, { useContext, useState, useEffect } from "react";
import { SymbolContext } from "../../Context/SymbolContext";

function StockDetails(props) {
  const { stocks } = useContext(SymbolContext);

  const symbol = stocks["Global Quote"]["01. symbol"];

  const [detail, setDetail] = useState(null);

  const searchOption = {
    key: process.env.REACT_APP_ALPHAV_KEY,
    api: "https://www.alphavantage.co/",
  };

  function getData(symbol) {
    const url = `${searchOption.api}query?function=OVERVIEW&symbol=${symbol}&apikey=${searchOption.key}`;
    // const url = `${searchOption.api}query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=${searchOption.key}`;
    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getData(symbol);
  }, []);

  if (!detail) {
    return <p>Loading...</p>;
  }

  const companyName = detail["Name"];
  const description = detail["Description"];
  const address = detail["Address"];
  const marketCap = detail["MarketCapitalization"];
  const yearHigh = detail["52WeekHigh"];
  const yearLow = detail["52WeekLow"];
  const divPerShare = detail["DividendPerShare"];
  const divYield = detail["DividendYield"];
  const divDate = detail["DividendDate"];
  const exchange = detail["Exchange"];
  const country = detail["Country"];

  return (
    <div className="detail-container">
      <p>Company Name: {companyName}</p>
      <p>description: {description}</p>
      <p>📍 {address}</p>
      <p>marketCap: ${marketCap}</p>
      <p>yearHigh: ${yearHigh}</p>
      <p>yearLow: ${yearLow}</p>
      <p>divPerShare: {divPerShare}</p>
      <p>divYield: {divYield}%</p>
      <p>divDate: {divDate}</p>
      <p>exchange: {exchange}</p>
      <p>country: {country}</p>
    </div>
  );
}

export default StockDetails;
