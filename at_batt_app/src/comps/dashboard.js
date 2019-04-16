import React, { useState } from "react";
import Display from "./display.js";

const Dashboard = () => {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const clickHandler = e => {
    e.preventDefault();
    switch (true) {
      case e.target.id === "strike":
        if (strikes === 2) {
          setStrikes(0);
          setBalls(0);
        } else {
          setStrikes(strikes + 1);
        }
        break;
      case e.target.id === "ball":
        if (balls === 3) {
          setBalls(0);
          setStrikes(0);
        } else {
          setBalls(balls + 1);
        }
        break;
      case e.target.id === "foul":
        strikes < 2 ? setStrikes(strikes + 1) : setStrikes(2);
        break;
      case e.target.id === "hit":
        setStrikes(0);
        setBalls(0);
        break;
    }
  };

  return (
    <div className="disCont">
      <Display balls={balls} strikes={strikes} />
      <div className="buttons">
        <button data-testid="strike" id="strike" onClick={clickHandler}>
          Strike
        </button>
        <button data-testid="ball" id="ball" onClick={clickHandler}>
          Ball
        </button>
        <button data-testid="foul" id="foul" onClick={clickHandler}>
          Foul
        </button>
        <button data-testid="hit" id="hit" onClick={clickHandler}>
          Hit
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
