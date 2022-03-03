import React, { useContext } from "react";
import { SymbolContext } from "../../Context/SymbolContext";

function SearchResult() {
  const { stocks } = useContext(SymbolContext);
  // console.log(props["Time Series (Daily)"]["2022-03-02"]["1. open"]);
  return (
    <div>
      <p>Symbol:{stocks["Meta Data"]["2. Symbol"]}</p>
      <p>Open: ${stocks["Time Series (Daily)"]["2022-03-02"]["1. open"]}</p>
      <p>High: ${stocks["Time Series (Daily)"]["2022-03-02"]["2. high"]}</p>
      <p>Low: ${stocks["Time Series (Daily)"]["2022-03-02"]["3. low"]}</p>
      <p>Close: ${stocks["Time Series (Daily)"]["2022-03-02"]["4. close"]}</p>
      <p>Volume: {stocks["Time Series (Daily)"]["2022-03-02"]["5. volume"]}</p>
    </div>
  );
}

export default SearchResult;
