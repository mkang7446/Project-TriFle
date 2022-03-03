import React, { useContext } from "react";
import { SymbolContext } from "../../Context/SymbolContext";

function SearchForm(props) {
  const symbol = useContext(SymbolContext);
  return (
    <div className="search-bar">
      <form action="">
        <label htmlFor="searchBar">Symbol: </label>
        <input
          value={symbol}
          id="searchBar"
          type="text"
          placeholder="ex) AAPL, MSFT"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchForm;
