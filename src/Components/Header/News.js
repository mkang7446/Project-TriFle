import React from "react";

function News(props) {
  // useEffect(() => {
  //   if (initialStocks.length > 0) {
  //     return;
  //   }
  //   for (let i = 0; i < arr.length; i++) {
  //     const url = `https://finnhub.io/api/v1/quote?symbol=${arr[i]}&token=${key}`;
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) =>
  //         setInitialStocks((initialStocks) => [...initialStocks, data])
  //       )
  //       .catch(console.error);
  //   }
  // }, []);

  return <div>Hello from News!</div>;
}

export default News;
