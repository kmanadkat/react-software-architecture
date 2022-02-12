import React from "react";
import { CounterContext } from "../ForContext/CounterContext";
import { CounterProvider } from "../ForContext/CounterProvider";

const CounterButton = () => {
  const { count, increment, decrement } = React.useContext(CounterContext);

  return (
    <>
      <p className="counter">{count}</p>
      <button onClick={(_) => increment()}>Increase</button>
      <button onClick={(_) => decrement()}>Decrease</button>
    </>
  );
};

const CounterDelta = () => {
  const { delta, updateDeltaHandler } = React.useContext(CounterContext);
  return (
    <input
      type="number"
      placeholder="Delta value.."
      value={delta}
      onChange={updateDeltaHandler}
    />
  );
};

const CountContext = () => {
  return (
    <CounterProvider>
      <section className="wrapper home">
        <h2>State Management With useContext</h2>
        <CounterDelta />
        <CounterButton />
      </section>
    </CounterProvider>
  );
};

export default CountContext;
