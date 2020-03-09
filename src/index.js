import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Room() {
  const [isLit, setLit] = React.useState(true);
  const [temperature, setTemperature] = React.useState(80);
  const brightness = isLit ? "lit" : "dark";
  const comfort =
    temperature > 85 ? "hot" : temperature < 55 ? "cold" : "pleasant";
  return (
    <div className={`room ${brightness}`}>
      the room is {isLit ? "lit" : "dark"}
      <br />
      <div className={`${comfort}`}>
        <b>Temperature: {temperature}</b>
      </div>
      <button onClick={() => setLit(!isLit)}>flip</button>
      <button onClick={() => setLit(true)}>ON!</button>
      <button onClick={() => setLit(false)}>(off)</button>
      <br />
      Thermostat:
      <br />
      <button
        className={"cold"}
        onClick={() => setTemperature(temperature - 10)}
      >
        lower
      </button>
      <button className="hot" onClick={() => setTemperature(temperature + 10)}>
        higher
      </button>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById("root"));
