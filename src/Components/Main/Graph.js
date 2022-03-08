import React from "react";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

function Graph({ detailGraph, graph }) {
  // const [graph, setGraph] = useState([]);

  // const graphKey = process.env.REACT_APP_FINN_KEY;

  // function getGraph() {
  //   const url = `https://finnhub.io/api/v1/stock/candle?symbol=${ticker}&resolution=W&from=1631022248&to=1646421764&token=${graphKey}`;

  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setGraph(data.c);
  //     })
  //     .catch(console.error);
  // }

  // useEffect(() => {
  //   getGraph();
  // }, []);

  return (
    <>
      {!graph[0] ? (
        <div className="graph">
          <Line
            data={{
              labels: [
                "6M",
                "",
                "",
                "",
                "5M",
                "",
                "",
                "",
                "4M",
                "",
                "",
                "",
                "3M",
                "",
                "",
                "",
                "2M",
                "",
                "",
                "",
                "1M",
                "",
                "",
                "",
                "Now",
              ],
              datasets: [
                {
                  label: "Last 6 Months",
                  data: detailGraph,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 2,
                },
              ],
            }}
          ></Line>
        </div>
      ) : (
        <div className="graph">
          <Line
            data={{
              labels: [
                "6M",
                "",
                "",
                "",
                "5M",
                "",
                "",
                "",
                "4M",
                "",
                "",
                "",
                "3M",
                "",
                "",
                "",
                "2M",
                "",
                "",
                "",
                "1M",
                "",
                "",
                "",
                "Now",
              ],
              datasets: [
                {
                  label: "Last 6 Months",
                  data: graph,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 2,
                },
              ],
            }}
          ></Line>
        </div>
      )}
    </>
  );
}

export default Graph;
