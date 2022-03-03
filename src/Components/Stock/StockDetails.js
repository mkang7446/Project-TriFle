import React, { useContext } from "react";
import { SymbolContext } from "../../Context/SymbolContext";

function StockDetails(props) {
  const { stocks } = useContext(SymbolContext);
  const symbol = stocks["Meta Data"]["2. Symbol"];
  return <div>hello from detail of {symbol}!</div>;
}

export default StockDetails;
