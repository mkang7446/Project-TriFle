import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Link } from "react-router-dom";

function InitialStocks(props) {
  const { ticker } = useParams();
  const [initialStocks, setInitialStocks] = useState([]);

  const key = process.env.REACT_APP_FINN_KEY;
  let arr = ["AAPL", "MSFT", "AMZN", "TSLA", "FB", "GOOG", "NVDA", "BRK-A"];

  useEffect(() => {
    if (initialStocks.length > 0) {
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      const url = `https://finnhub.io/api/v1/quote?symbol=${arr[i]}&token=${key}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) =>
          setInitialStocks((initialStocks) => [...initialStocks, data])
        )
        .catch(console.error);
    }
  }, []);

  if (initialStocks.length === 0) {
    return null;
  }

  return (
    <div className="biggest-container">
      <h1 style={{ color: "red" }} className="sentence">
        HOT STOCKS🌶
      </h1>
      <div className="box-container">
        <div className="grid">
          <Link
            // onClick={(getInfo("AAPL"), getQuote("AAPL"))}
            // => ERROR: getInfo is not a function
            // onClick={(setInfo("AAPL"), setQuote("AAPL"))}
            // => ERROR: Cannot update a component (`App`) while rendering a different component
            id="btn"
            className="btn-aapl"
            to="/details/AAPL"
          >
            <h1>AAPL</h1>
            <p>{initialStocks[0].c}</p>
            {/* <p
              style={
                parseInt(initialStocks[0].d) > 0
                  ? { color: "green" }
                  : { color: "red" }
              }
            >
              Price: {initialStocks[0].c} ({initialStocks[0].d}
              {initialStocks[0].dp}){" "}
              {parseInt(initialStocks[0].d) > 0 ? "⬆︎" : "⬇︎"}
            </p> */}
            <p>Apple</p>
          </Link>
          <Link id="btn" className="btn-msft" to="/details/MSFT">
            <h1>MSFT</h1>
            {/* <p>{initialStocks[1].c}</p> */}
            <p>Microsoft</p>
          </Link>
          <Link id="btn" className="btn-amzn" to="/details/AMZN">
            <h1>AMZN</h1>
            {/* <p>{initialStocks[2].c}</p> */}
            <p>Amazon</p>
          </Link>
          <Link id="btn" className="btn-tsla" to="/details/TSLA">
            <h1>TSLA</h1>
            {/* <p>{initialStocks[3].c}</p> */}
            <p>Tesla</p>
          </Link>
          <Link id="btn" className="btn-fb" to="/details/FB">
            <h1>FB</h1>
            {/* <p>{initialStocks[4].c}</p> */}
            <p>Meta Platforms</p>
          </Link>
          <Link id="btn" className="btn-goog" to="/details/GOOG">
            <h1>GOOG</h1>
            {/* <p>{initialStocks[5].c}</p> */}
            <p>Google</p>
          </Link>
          <Link id="btn" className="btn-nvda" to="/details/NVDA">
            <h1>NVDA</h1>
            {/* <p>{initialStocks[6].c}</p> */}
            <p>NVIDIA</p>
          </Link>
          <Link id="btn" className="btn-brk" to="/details/BRK">
            <h1>BRK-A</h1>
            {/* <p>{initialStocks[7].c}</p> */}
            <p>Berkshire Hathaway</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InitialStocks;
