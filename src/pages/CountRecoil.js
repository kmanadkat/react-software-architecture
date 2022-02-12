import React from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countState } from "../ForRecoil/countState";
import { deltaState } from "../ForRecoil/deltaState";

const DisplayCount = () => {
  const count = useRecoilValue(countState);
  return <p className="counter">{count}</p>;
};

const CounterButton = () => {
  const [_, setCount] = useRecoilState(countState);
  const delta = useRecoilValue(deltaState);

  const updateHandler = (isIncrement) => {
    if (delta !== "") {
      if (isIncrement) {
        setCount((data) => (data += delta));
      } else {
        setCount((data) => (data -= delta));
      }
    }
  };

  return (
    <>
      <DisplayCount />
      <button onClick={(_) => updateHandler(true)}>Increase</button>
      <button onClick={(_) => updateHandler(false)}>Decrease</button>
    </>
  );
};

const CounterDelta = () => {
  const [delta, setDelta] = useRecoilState(deltaState);

  const updateDeltaHandler = (event) => {
    if (event.target.value === "") {
      setDelta("");
    } else {
      setDelta(parseInt(event.target.value));
    }
  };

  return (
    <input
      type="number"
      placeholder="Delta value.."
      value={delta}
      onChange={updateDeltaHandler}
    />
  );
};

const CountRecoil = () => {
  return (
    <RecoilRoot>
      <section className="wrapper home">
        <h2>State Management With Recoil</h2>
        <CounterDelta />
        <CounterButton />
      </section>
    </RecoilRoot>
  );
};

export default CountRecoil;
