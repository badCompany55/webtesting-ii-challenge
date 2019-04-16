import React from "react";

const Display = props => {
  return (
    <div className="disCont">
      <ul>
        <li>
          <h3 data-testid="n-balls">balls: {props.balls}</h3>
        </li>
        <li>
          <h3 data-testid="n-strikes">strikes: {props.strikes}</h3>
        </li>
      </ul>
    </div>
  );
};

export default Display;
