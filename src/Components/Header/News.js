/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function News(props) {
  const [news, setNews] = useState([]);

  const key = process.env.REACT_APP_FINN_KEY;

  function getNews(searchString) {
    const url = `https://finnhub.io/api/v1/news?category=general&token=${key}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getNews();
  }, []);

  const renderNews = () => {
    return news.map((element, idx) => {
      return (
        <a
          className="news-link"
          key={idx}
          href={element.url}
          target="_blank noreferrer "
        >
          <div className="newsSection">
            <img className="newsImage" src={element.image} alt="news image" />
            <div className="newsRight">
              <p className="source">{element.source}</p>
              <h3 className="headline">{element.headline}</h3>
            </div>
          </div>
        </a>
      );
    });
  };

  return <div className="news">{renderNews()}</div>;
}

export default News;
