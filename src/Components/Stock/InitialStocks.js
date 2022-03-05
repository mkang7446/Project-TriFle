import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function InitialStocks(props) {
  const { ticker } = useParams();
  const [initialStocks, setInitialStocks] = useState([]);
  console.log(initialStocks);

  const key = process.env.REACT_APP_FINN_KEY;
  let arr = ["TSLA", "AMZN", "AAPL", "FB", "GOOG"];

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
    <div className="main">
      <h1 style={{ color: "red" }} className="sentence">
        HOT STOCKS🌶
      </h1>
      {/* <div className="container">
        {initialStocks.map((element) => {
          for (let each of element) return <p>{element.c}</p>;
        })}
      </div> */}
      {/* <p>
        <Link id="btn" className="btn-aapl" to="/details/AAPL">
          AAPL
        </Link>
      </p>
      <p>
        <Link id="btn" className="btn-aapl" to="/details/TSLA">
          TSLA
        </Link>
      </p>
      <p>
        <Link id="btn" className="btn-aapl" to="/details/AMZN">
          AMZN
        </Link>
      </p>
      <p>
        <Link id="btn" className="btn-aapl" to="/details/FB">
          FB
        </Link>
      </p>
      <p>
        <Link id="btn" className="btn-aapl" to="/details/GOOG">
          GOOG
        </Link>
      </p> */}
      {/* <Link id="btn" className="btn-aapl" to="/details/AAPL">
        <div id="initial-stocks" className="apple">
          <div className="infoLeft">
            <p className="left1">AAPL</p>
            <p className="left2">Apple Inc</p>
          </div>
          <div
            style={
              parseInt(initialStocks[0].d) > 0
                ? { color: "green" }
                : { color: "red" }
            }
            className="infoMid"
          >
            <p className="mid1">
              ${initialStocks[0].c}
              {"         "}
              {parseInt(initialStocks[0].d) > 0 ? "⬆︎" : "⬇︎"}
            </p>
            <p className="mid2">
              ({parseInt(initialStocks[0].d) > 0 ? "$" : "-$"}
              {parseInt(initialStocks[0].d) > 0 && initialStocks[0].d}
              {parseInt(initialStocks[0].d) < 0 &&
                initialStocks[0]["d"].toString().slice(1)}{" "}
              , {initialStocks[0].dp}%)
            </p>
          </div>
          <div className="infoRight">
            <p>
              High: ${initialStocks[0].h} Low: ${initialStocks[0].l}
            </p>
            <p>
              Open: ${initialStocks[0].c} Close: ${initialStocks[0].pc}
            </p>
          </div>
        </div>
      </Link>
      <Link id="btn" className="btn-aapl" to="/details/AMZN">
        <div id="initial-stocks" className="amzn">
          <div className="infoLeft">
            <p className="left1">AMZN</p>
            <p className="left2">Amazon</p>
          </div>
          <div
            style={
              parseInt(initialStocks[1].d) > 0
                ? { color: "green" }
                : { color: "red" }
            }
            className="infoMid"
          >
            <p className="mid1">
              ${initialStocks[1].c}
              {"         "}
              {parseInt(initialStocks[1].d) > 0 ? "⬆︎" : "⬇︎"}
            </p>
            <p className="mid2">
              ({parseInt(initialStocks[1].d) > 0 ? "$" : "-$"}
              {parseInt(initialStocks[1].d) > 0 && initialStocks[0].d}
              {parseInt(initialStocks[1].d) < 0 &&
                initialStocks[1]["d"].toString().slice(1)}
              , {initialStocks[1].dp}%)
            </p>
          </div>
          <div className="infoRight">
            <p>
              High: ${initialStocks[1].h} Low: ${initialStocks[1].l}
            </p>
            <p>
              Open: ${initialStocks[1].c} Close: ${initialStocks[1].pc}
            </p>
          </div>
        </div>
      </Link>
      <Link id="btn" className="btn-aapl" to="/details/TSLA">
        <div id="initial-stocks" className="tsla">
          <div className="infoLeft">
            <p className="left1">TSLA</p>
            <p className="left2">Tesla</p>
          </div>
          <div
            style={
              parseInt(initialStocks[2].d) > 0
                ? { color: "green" }
                : { color: "red" }
            }
            className="infoMid"
          >
            <p className="mid1">
              ${initialStocks[2].c}
              {"         "}
              {parseInt(initialStocks[2].d) > 0 ? "⬆︎" : "⬇︎"}
            </p>
            <p className="mid2">
              ({parseInt(initialStocks[2].d) > 0 ? "$" : "-$"}
              {parseInt(initialStocks[2].d) > 0 && initialStocks[0].d}
              {parseInt(initialStocks[2].d) < 0 &&
                initialStocks[2]["d"].toString().slice(1)}
              , {initialStocks[2].dp}%)
            </p>
          </div>
          <div className="infoRight">
            <p>
              High: ${initialStocks[2].h} Low: ${initialStocks[2].l}
            </p>
            <p>
              Open: ${initialStocks[2].c} Close: ${initialStocks[2].pc}
            </p>
          </div>
        </div>
      </Link>
      <Link id="btn" className="btn-aapl" to="/details/FB">
        <div id="initial-stocks" className="fb">
          <div className="infoLeft">
            <p className="left1">FB</p>
            <p className="left2">Meta Plats.</p>
          </div>
          <div
            style={
              parseInt(initialStocks[0].d) > 0
                ? { color: "green" }
                : { color: "red" }
            }
            className="infoMid"
          >
            <p className="mid1">
              ${initialStocks[3].c}
              {"         "}
              {parseInt(initialStocks[3].d) > 0 ? "⬆︎" : "⬇︎"}
            </p>
            <p className="mid2">
              ({parseInt(initialStocks[3].d) > 0 ? "$" : "-$"}
              {parseInt(initialStocks[3].d) > 0 && initialStocks[0].d}
              {parseInt(initialStocks[3].d) < 0 &&
                initialStocks[3]["d"].toString().slice(1)}
              , {initialStocks[3].dp}%)
            </p>
          </div>
          <div className="infoRight">
            <p>
              High: ${initialStocks[3].h} Low: ${initialStocks[3].l}
            </p>
            <p>
              Open: ${initialStocks[3].c} Close: ${initialStocks[3].pc}
            </p>
          </div>
        </div>
      </Link>
      <Link id="btn" className="btn-aapl" to="/details/GOOG">
        <div id="initial-stocks" className="goog">
          <div className="infoLeft">
            <p className="left1">GOOG</p>
            <p className="left2">Google</p>
          </div>
          <div
            style={
              parseInt(initialStocks[4].d) > 0
                ? { color: "green" }
                : { color: "red" }
            }
            className="infoMid"
          >
            <p className="mid1">
              ${initialStocks[4].c}
              {"         "}
              {parseInt(initialStocks[4].d) > 0 ? "⬆︎" : "⬇︎"}
            </p>
            <p className="mid2">
              ({parseInt(initialStocks[4].d) > 0 ? "$" : "-$"}
              {parseInt(initialStocks[4].d) > 0 && initialStocks[0].d}
              {parseInt(initialStocks[4].d) < 0 &&
                initialStocks[4]["d"].toString().slice(1)}
              , {initialStocks[4].dp}%)
            </p>
          </div>
          <div className="infoRight">
            <p>
              High: ${initialStocks[4].h} Low: ${initialStocks[4].l}
            </p>
            <p>
              Open: ${initialStocks[4].c} Close: ${initialStocks[4].pc}
            </p>
          </div>
        </div>
      </Link> */}
    </div>
  );
}

export default InitialStocks;
