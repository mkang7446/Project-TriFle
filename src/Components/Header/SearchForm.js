import React, { useContext } from "react";
import { SymbolContext } from "../../Context/SymbolContext";

function SearchForm() {
  const { handleChange, handleSubmit, searchString } =
    useContext(SymbolContext);
  console.log(handleChange);

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchBar">Symbol: </label>
        <input
          value={searchString}
          onChange={handleChange}
          id="searchBar"
          type="text"
          placeholder="ex) AAPL, MSFT"
          name="searchString"
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchForm;
