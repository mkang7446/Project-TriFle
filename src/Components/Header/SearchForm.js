import { useContext } from "react";
import { SymbolContext } from "../../Context/SymbolContext";
import { Link } from "react-router-dom";

function SearchForm(props) {
  const { searchString } = useContext(SymbolContext);
  console.log(searchString);
  return (
    <div className="search-bar">
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="searchBar"></label>
        <input
          value={searchString}
          onChange={props.handleChange}
          id="searchBar"
          type="text"
          placeholder="  Symbol / Ticker"
          name="searchString"
          required
        />

        {/* <Link to={`/details/${searchString}`}> */}
        <button type="submit" className="btn-submit">
          🔍
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
}

export default SearchForm;
