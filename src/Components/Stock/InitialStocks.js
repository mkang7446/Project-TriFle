import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import { Link } from "react-router-dom";
import News from "../Header/News";

function InitialStocks(props) {
  // const { ticker } = useParams();
  const [initialStocks, setInitialStocks] = useState([]);

  const key = process.env.REACT_APP_FINN_KEY;
  let arr = [
    {
      ticker: "TSLA",
      companyName: "Tesla",
    },
    {
      ticker: "AAPL",
      companyName: "Apple Inc",
    },
    {
      ticker: "AMZN",
      companyName: "Amazon",
    },
    {
      ticker: "MSFT",
      companyName: "Microsoft",
    },
    {
      ticker: "GOOG",
      companyName: "Google",
    },
  ];

  const fetchPromises = [];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    for (let i = 0; i < arr.length; i++) {
      const url = `https://finnhub.io/api/v1/quote?symbol=${arr[i].ticker}&token=${key}`;
      fetchPromises.push(fetch(url));
    }
    await Promise.all(fetchPromises).then((data) => {
      const responses = data.map((element) => {
        return element.json();
      });

      return Promise.all(responses).then((data) => {
        setInitialStocks(data);
      });
    });
  };

  const renderStocks = () => {
    return initialStocks.map((element, idx) => {
      return (
        <Link
          id="btn"
          className="linkToDetail"
          to={`/details/${arr[idx].ticker}`}
        >
          <div id="initial-stocks" className="initial-box">
            <div className="infoLeft">
              <p className="left1">{arr[idx].ticker}</p>
              <p className="left2">{arr[idx].companyName}</p>
            </div>
            <div
              style={
                parseInt(element.d) > 0
                  ? { color: "green" }
                  : { color: "#FF506A" }
              }
              className="infoMid"
            >
              <p className="mid1">
                ${element.c}
                {"         "}
                {parseInt(element.d) > 0 ? "⬆︎" : "⬇︎"}
              </p>
              <p className="mid2">
                ({parseInt(element.d) > 0 ? "$" : "-$"}
                {parseInt(element.d) > 0 && element.d}
                {parseInt(element.d) < 0 &&
                  element["d"].toString().slice(1)} , {element.dp}%)
              </p>
            </div>
            <div className="infoRight">
              <p>
                High: ${element.h} Low: ${element.l}
              </p>
              <p>
                Open: ${element.c} Close: ${element.pc}
              </p>
            </div>
          </div>
        </Link>
      );
    });
  };

  return (
    <div className="homepage">
      <div className="initialStocks">
        <h1 style={{ color: "black" }} className="sentence">
          TOP 5 Stocks
        </h1>
        {renderStocks()}
      </div>
      <div className="news">
        <News />
      </div>
    </div>
  );
}

export default InitialStocks;
