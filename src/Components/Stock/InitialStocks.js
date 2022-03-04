import React, { useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { SymbolContext } from "../../Context/SymbolContext";

function InitialStocks(props) {
  const { getInfo, getQuote } = useContext(SymbolContext);
  return (
    <div className="biggest-container">
      <h1 className="sentence">
        You don't know what to search? Try click the most famous stocks below
        for detail.{" "}
      </h1>
      <div className="box-container">
        <div className="grid">
          <Link
            // onClick={(getInfo("AAPL"), getQuote("AAPL"))}
            id="btn"
            className="btn-aapl"
            to="/details/AAPL"
          >
            <h1>AAPL</h1>
            <p>Apple</p>
          </Link>
          <Link id="btn" className="btn-msft" to="/details/MSFT">
            <h1>MSFT</h1>
            <p>Microsoft</p>
          </Link>
          <Link id="btn" className="btn-amzn" to="/details/AMZN">
            <h1>AMZN</h1>
            <p>Amazon</p>
          </Link>
          <Link id="btn" className="btn-tsla" to="/details/TSLA">
            <h1>TSLA</h1>
            <p>Tesla</p>
          </Link>
          <Link id="btn" className="btn-fb" to="/details/FB">
            <h1>FB</h1>
            <p>Meta Platforms</p>
          </Link>
          <Link id="btn" className="btn-goog" to="/details/GOOG">
            <h1>GOOG</h1>
            <p>Google</p>
          </Link>
          <Link id="btn" className="btn-nvda" to="/details/NVDA">
            <h1>NVDA</h1>
            <p>NVIDIA</p>
          </Link>
          <Link id="btn" className="btn-brk" to="/details/BRK">
            <h1>BRK-A</h1>
            <p>Berkshire Hathaway</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InitialStocks;
