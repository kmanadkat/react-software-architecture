import { observer } from "mobx-react-lite";
import React from "react";
import { Counter } from "../ForMobx/Counter";

const counter = new Counter();

const CounterButton = observer(({ counter }) => {
  return (
    <>
      <p className="counter">{counter.count}</p>
      <button onClick={(_) => counter.increment()}>Increase</button>
      <button onClick={(_) => counter.decrement()}>Decrease</button>
    </>
  );
});

const CountMobx = () => {
  return (
    <section className="wrapper home">
      <h2>State Management With Mobx</h2>
      <CounterButton counter={counter} />
    </section>
  );
};

export default CountMobx;
