import React from "react";
import { CounterContext } from "./CounterContext";

export const CounterProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const [delta, setDelta] = React.useState("");

  const increment = () => {
    if (delta !== "") {
      setCount((data) => (data += delta));
    }
  };

  const decrement = () => {
    if (delta !== "") {
      setCount((data) => (data -= delta));
    }
  };

  const updateDeltaHandler = (event) => {
    if (event.target.value === "") {
      setDelta("");
    } else {
      setDelta(parseInt(event.target.value));
    }
  };

  return (
    <CounterContext.Provider
      value={{ count, delta, updateDeltaHandler, increment, decrement }}
    >
      {children}
    </CounterContext.Provider>
  );
};
