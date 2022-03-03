import React, { useContext } from "react";
import { SymbolContext } from "../../Context/SymbolContext";

function SearchForm(props) {
  const { symbol, handleChange, handleSubmit } = useContext(SymbolContext);

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchBar">Symbol: </label>
        <input
          value={symbol}
          onChange={handleChange}
          id="searchBar"
          type="text"
          placeholder="ex) AAPL, MSFT"
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchForm;
