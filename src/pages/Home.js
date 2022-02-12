import React from "react";

const Home = () => {
  const [counter, setCounter] = React.useState(0);
  const [delta, setDelta] = React.useState("");

  const updateHandler = (isIncrement) => {
    if (delta !== "") {
      if (isIncrement) {
        setCounter((data) => (data += delta));
      } else {
        setCounter((data) => (data -= delta));
      }
    }
  };

  const updateDeltaHandler = (e) => {
    if (e.target.value.trim() === "") {
      setDelta("");
    } else {
      setDelta(parseInt(e.target.value));
    }
  };

  return (
    <section className="wrapper home">
      <h2>State Management with useState</h2>
      <input
        type="number"
        placeholder="Delta value.."
        value={delta}
        onChange={updateDeltaHandler}
      />
      <p className="counter">{counter}</p>
      <button onClick={(_) => updateHandler(true)}>Increase</button>
      <button onClick={(_) => updateHandler(false)}>Decrease</button>
    </section>
  );
};

export default Home;
