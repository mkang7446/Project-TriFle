import React, { useEffect, useState } from "react";
// import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');
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
          key={idx}
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
                parseInt(element.d.toFixed(2)) > 0
                  ? { color: "#adff02" }
                  : { color: "#FF506A" }
              }
              className="infoMid"
            >
              <p className="mid1">
                ${element.c.toFixed(2)}
                {"         "}
                {parseInt(element.d.toFixed(2)) > 0 ? "⬆︎" : "⬇︎"}
              </p>
              <p className="mid2">
                ({parseInt(element.d.toFixed(2)) > 0 ? "$" : "-$"}
                {parseInt(element.d.toFixed(2)) > 0 && element.d.toFixed(2)}
                {parseInt(element.d.toFixed(2)) < 0 &&
                  element["d"].toFixed(2).toString().slice(1)}{" "}
                , {element.dp.toFixed(2)}%)
              </p>
            </div>
            <div className="infoRight">
              <div className="initial-info">
                <div className="initial-one">
                  <p>LOW: </p>
                  <p>OPEN: </p>
                </div>
                <div className="initial-two">
                  <p>${element.l.toFixed(2)} </p>
                  <p>${element.o.toFixed(2)} </p>
                </div>
                <div className="initial-three">
                  <p>HIGH: </p>
                  <p>CLOSE: </p>
                </div>
                <div className="initial-four">
                  <p>${element.h.toFixed(2)} </p>
                  <p>${element.pc.toFixed(2)}</p>
                </div>
              </div>
              {/* <p>
                High: ${element.h.toFixed(2)} Low: ${element.l.toFixed(2)}
              </p>
              <p>
                Open: ${element.c.toFixed(2)} Close: ${element.pc.toFixed(2)}
              </p> */}
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
          TOP 5 STOCKS
        </h1>
        {renderStocks()}
      </div>
      <div className="homepage-news">
        <h1 style={{ color: "black" }} className="news-title">
          STOCK MARKET NEWS
        </h1>
        <News />
      </div>
    </div>
  );
}

export default InitialStocks;
