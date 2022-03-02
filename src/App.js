import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  const timeSeries = "TIME_SERIES_DAILY";
  const apiInfo = {
    key: process.env.REACT_APP_ALPHAV_KEY,
    api: "https://www.alphavantage.co/",
  };
  console.log(apiInfo.key);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
