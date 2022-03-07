import React, { useContext, useState, useEffect } from "react";
import { SymbolContext } from "../../Context/SymbolContext";
import { useParams } from "react-router";
import Graph from "./Graph";

function StockDetails({ info, quote }) {
  // if (!info.length && !quote.length) {
  //   return "NO RESULT FOUND";
  // }
  const { ticker } = useParams();
  const [profile, setProfile] = useState([]);
  console.log(profile);
  const [quoteDetail, setQuoteDetail] = useState([]);
  console.log(quoteDetail);
  const [infoDetail, setInfoDetail] = useState([]);
  console.log(infoDetail);

  const FKey = process.env.REACT_APP_FINN_KEY;
  const AKey = process.env.REACT_APP_APVT_KEY;

  function getProfile(searchString) {
    const quoteURL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${searchString}&apikey=${AKey}`;

    fetch(quoteURL)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      })
      .catch(console.error);
  }

  function getQuoteDetail(searchString) {
    const quoteURL = `https://finnhub.io/api/v1/quote?symbol=${searchString}&token=${FKey}`;

    fetch(quoteURL)
      .then((res) => res.json())
      .then((data) => {
        setQuoteDetail(data);
      })
      .catch(console.error);
  }

  function getInfoDetail(searchString) {
    const infoURL = `https://finnhub.io/api/v1/stock/profile2?symbol=${searchString}&token=${FKey}`;

    fetch(infoURL)
      .then((res) => res.json())
      .then((data) => {
        setInfoDetail(data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getProfile(ticker);
  }, [ticker]);

  useEffect(() => {
    getQuoteDetail(ticker);
  }, [ticker]);

  useEffect(() => {
    getInfoDetail(ticker);
  }, [ticker]);

  // if (!quoteDetail.c) {
  //   return (
  //     <div className="loading">
  //       <div className="loading"></div>
  //       <div className="loading-word"> "Loading..."</div>
  //     </div>
  //   );
  // }

  if (!quoteDetail || !infoDetail) {
    return "Loading...";
  }

  function nFormatter(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  }

  return (
    <div className="detail-container">
      <div className="detail">
        <div className="left-one">
          <div className="detail-intro">
            <img
              className="intro-logo"
              src={infoDetail.logo}
              alt="Company Logo"
            />
            <div className="intro-head">
              <h1 className="intro-symbol">{profile.Symbol}</h1>
              <div className="intro-head-context">
                <h2 className="intro-name">{infoDetail.name}</h2>
                <h3 className="intro-ex">{profile.Exchange}</h3>
              </div>
            </div>
          </div>
          <div className="detail-price">
            {" "}
            <p
              className="detail-price-words"
              style={
                parseInt(quoteDetail.d) > 0
                  ? { color: "green" }
                  : { color: "red" }
              }
            >
              {parseInt(quoteDetail.d) > 0 ? "⬆︎" : "⬇︎"}
              {"         "}${quoteDetail.c}
              {"         "}({parseInt(quoteDetail.d) > 0 ? "$" : "-$"}
              {parseInt(quoteDetail.d) > 0 && quoteDetail.d}
              {parseInt(quoteDetail.d) < 0 &&
                quoteDetail["d"].toString().slice(1)}{" "}
              , {quoteDetail.dp}%)
            </p>
          </div>
          <div className="detail-info">
            <div className="info-one">
              <p>OPEN: </p>
              <p>HIGH: </p>
              <p>52 HIGH: </p>
              <p>MARKET CAP: </p>
            </div>
            <div className="info-two">
              <p>${quoteDetail.o}</p>
              <p>${quoteDetail.h}</p>
              <p>${profile["52WeekHigh"]}</p>
              <p>{nFormatter(profile.MarketCapitalization)}</p>
            </div>
            <div className="info-three">
              <p>PREV CLOSE: </p>
              <p>LOW: </p>
              <p>52 LOW: </p>
              <p>DIVIDEND: </p>
            </div>
            <div className="info-four">
              <p>${quoteDetail.pc}</p>
              <p>{quoteDetail.l}</p>
              <p>${profile["52WeekLow"]}</p>
              <p>{profile.DividendYield}%</p>
            </div>
          </div>
        </div>

        <Graph ticker={ticker} />
      </div>
      <div className="description">{profile.Description}</div>
    </div>
  );
}

export default StockDetails;
