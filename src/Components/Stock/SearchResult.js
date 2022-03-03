import React, { useContext } from "react";
import { SymbolContext } from "../../Context/SymbolContext";
import { Link } from "react-router-dom";

function SearchResult() {
  const { stocks } = useContext(SymbolContext);

  const symbol = stocks["Global Quote"]["01. symbol"];
  const open = stocks["Global Quote"]["02. open"];
  const high = stocks["Global Quote"]["03. high"];
  const low = stocks["Global Quote"]["04. low"];
  const price = stocks["Global Quote"]["05. price"];
  const volume = stocks["Global Quote"]["06. volume"];
  const date = stocks["Global Quote"]["07. latest trading day"];
  const change = stocks["Global Quote"]["09. change"];
  const changePercent = stocks["Global Quote"]["10. change percent"];
  console.log(parseInt(change));

  // console.log(props["Time Series (Daily)"]["2022-03-02"]["1. open"]);
  return (
    <div>
      <p>Data on {date}</p>
      <Link to={`details/${symbol}`} key={symbol}>
        <h1>Symbol:{symbol}</h1>
      </Link>
      <p style={parseInt(change) > 0 ? { color: "green" } : { color: "red" }}>
        Price: ${price} (${change}, {changePercent}){" "}
        {parseInt(change) > 0 ? "⬆︎" : "⬇︎"}
      </p>
      <p>Open: ${open}</p>
      <p>High: ${high}</p>
      <p>Low: ${low}</p>
      <p>Volume: {volume}</p>
    </div>
  );
}

export default SearchResult;
