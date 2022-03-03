import React, { useContext } from "react";
import { SymbolContext } from "../../Context/SymbolContext";
import { Link } from "react-router-dom";

function SearchResult() {
  const { stocks } = useContext(SymbolContext);
  const symbol = stocks["Meta Data"]["2. Symbol"];
  const open = stocks["Time Series (Daily)"]["2022-03-02"]["1. open"];
  const high = stocks["Time Series (Daily)"]["2022-03-02"]["2. high"];
  const low = stocks["Time Series (Daily)"]["2022-03-02"]["3. low"];
  const close = stocks["Time Series (Daily)"]["2022-03-02"]["4. close"];
  const volume = stocks["Time Series (Daily)"]["2022-03-02"]["5. volume"];

  // console.log(props["Time Series (Daily)"]["2022-03-02"]["1. open"]);
  return (
    <div>
      <Link to={`details/${symbol}`} key={symbol}>
        <p>Symbol:{symbol}</p>
      </Link>
      <p>Open: ${open}</p>
      <p>High: ${high}</p>
      <p>Low: ${low}</p>
      <p>Close: ${close}</p>
      <p>Volume: {volume}</p>
    </div>
  );
}

export default SearchResult;
