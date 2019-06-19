import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className='jumbotron text-center'>
      <h1>Clicky Game</h1>
      <p>Current Score: {props.currScore}</p>
      <p>High Score: {props.highScore}</p>
    </div>
  );
}

export default Jumbotron;
