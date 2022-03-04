import { useContext } from "react";
import { SymbolContext } from "../../Context/SymbolContext";
import { Link } from "react-router-dom";

function SearchForm() {
  const { handleChange, handleSubmit, searchString, ticker } =
    useContext(SymbolContext);

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchBar"></label>
        <input
          value={searchString}
          onChange={handleChange}
          id="searchBar"
          type="text"
          placeholder="  Symbol / Ticker"
          name="searchString"
          required
        />

        {/* <Link to="/details/:ticker"> */}
        <button className="btn-submit">🔍</button>
        {/* </Link> */}
      </form>
    </div>
  );
}

export default SearchForm;
