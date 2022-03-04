import React, { useContext, useState, useEffect } from "react";
import { SymbolContext } from "../../Context/SymbolContext";

function StockDetails(props) {
  const {
    getInfo,
    getQuote,
    handleChange,
    handleSubmit,
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
  } = useContext(SymbolContext);

  return (
    <div className="detail-container">
      <h1>Data on XX-XX-XXXX</h1>
      <p>Company Name: {name}</p>
      <p style={parseInt(change) > 0 ? { color: "green" } : { color: "red" }}>
        Price: ${price} (${change}, {changePercent}){" "}
        {parseInt(change) > 0 ? "⬆︎" : "⬇︎"}{" "}
      </p>
      <p>IPO: ${ipo}</p>
      <p>Industry: ${industry}</p>
      <p>yearHigh: ${high}</p>
      <p>yearLow: ${low}</p>
      <p>exchange: {exchange}</p>
      <p>Open: ${open}</p>
      <p>High: ${high}</p>
      <p>Low: ${low}</p>
      <p>logo: ${logo}</p>
      <p>Ticker: ${ticker}</p>
      <p>Low: ${low}</p>
      <p>Company URL: ${companyURL}</p>
    </div>
  );
}

export default StockDetails;
