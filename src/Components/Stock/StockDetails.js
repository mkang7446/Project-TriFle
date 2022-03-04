import React, { useContext, useState, useEffect } from "react";
import { SymbolContext } from "../../Context/SymbolContext";
import { useParams } from "react-router";

function StockDetails({ info, quote }) {
  // if (!info.length && !quote.length) {
  //   return "NO RESULT FOUND";
  // }
  const { ticker } = useParams();
  const [quoteDetail, setQuoteDetail] = useState([]);
  const [infoDetail, setInfoDetail] = useState([]);

  const key = process.env.REACT_APP_FINN_KEY;

  function getQuoteDetail(searchString) {
    const quoteURL = `https://finnhub.io/api/v1/quote?symbol=${searchString}&token=${key}`;

    fetch(quoteURL)
      .then((res) => res.json())
      .then((data) => {
        setQuoteDetail(data);
      })
      .catch(console.error);
  }

  function getInfoDetail(searchString) {
    const infoURL = `https://finnhub.io/api/v1/stock/profile2?symbol=${searchString}&token=${key}`;

    fetch(infoURL)
      .then((res) => res.json())
      .then((data) => {
        setInfoDetail(data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getQuoteDetail(ticker);
  }, [ticker]);

  useEffect(() => {
    getInfoDetail(ticker);
  }, [ticker]);

  if (!quoteDetail.c || !infoDetail.country) {
    return "NO RESULT FOUND";
  }

  if (!quoteDetail || !infoDetail) {
    return "Loading...";
  }

  return (
    <div className="detail-container">
      {/* <h1>Data on XX-XX-XXXX</h1> */}
      <p>Company Name: {infoDetail.name}</p>
      <p
        style={
          parseInt(quoteDetail.d) > 0 ? { color: "green" } : { color: "red" }
        }
      >
        Price: ${quoteDetail.c} (${quoteDetail.d}, {quoteDetail.dp}){" "}
        {parseInt(quoteDetail.d) > 0 ? "⬆︎" : "⬇︎"}{" "}
      </p>
      <p>IPO: {infoDetail.ipo}</p>
      <p>Industry: {infoDetail.finnhubIndustry}</p>
      {/* <p>yearHigh: ${quoteDetail.h}</p>
      <p>yearLow: ${quoteDetail.l}</p> */}
      <p>exchange: {infoDetail.exchange}</p>
      <p>Open: ${quoteDetail.o}</p>
      <p>High: ${quoteDetail.h}</p>
      <p>Low: ${quoteDetail.l}</p>
      <img src={infoDetail.logo} alt="Company Logo" />
      <p>Ticker: {infoDetail.ticker}</p>
      <p>Company URL: {infoDetail.weburl}</p>
    </div>
  );
}

export default StockDetails;
