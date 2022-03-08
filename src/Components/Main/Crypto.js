/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";

function Crypto(props) {
  const [crypto, setCrypto] = useState([]);

  function getCrypto() {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setCrypto(data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getCrypto();
  }, []);

  function nFormatter(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  }

  const renderCrypto = () => {
    return crypto.map((element, idx) => {
      return (
        <div key={idx} className="crypto-data">
          <div className="crypto-rank">{element.market_cap_rank}</div>
          <div className="crypto-info">
            <img
              className="crypto-img"
              src={element.image}
              alt="crypto image"
            />
            <div className="crypto-name">
              <div className="crypto-name-name">{element.name}</div>
              <div className="crypto-name-symbol">{element.symbol}</div>
            </div>
          </div>
          <div className="crypto-price">$ {element.current_price}</div>
          <div className="crypto-marketcap">
            {nFormatter(element.market_cap)}
          </div>
          <div className="crypto-change">
            <p
              className="crypto-price-words"
              style={
                parseInt(element.price_change_24h.toFixed(2)) > 0
                  ? { color: "#0CAF82" }
                  : { color: "#FF506A" }
              }
            >
              {parseInt(element.price_change_24h.toFixed(2)) > 0 && "+"}$
              {element.price_change_24h.toFixed(2)} (
              {parseInt(element.price_change_percentage_24h.toFixed(2)) > 0 &&
                "+"}
              {element.price_change_percentage_24h.toFixed(2)} %)
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="crypto-container">
      <h1 className="crypto-title-word">Top 100 Cryptocurrency Prices</h1>
      <div className="crypto-title">
        <div className="crypto-rank-title">Rank</div>
        <div className="crypto-name-title">Name / Symbol</div>
        <div className="crypto-price-title">Price</div>
        <div className="crypto-marketcap-title">Market Cap</div>
        <div className="crypto-change-title">Change(24hr)</div>
      </div>
      {renderCrypto()}
    </div>
  );
}

export default Crypto;
