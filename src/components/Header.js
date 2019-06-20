import React from "react";
import "./style.css";

function Jumbotron(props) {
  console.log(props);
  return (
    <div className='jumbotron text-center'>
      <div className=''>
        <h1 className='text-outline title-head'>Clicky Game</h1>
        <div className='score-box rounded grid-container'>
          {props.guessedRight ? (
            <div className='score-right text-center'>
              <i className='fas fa-thumbs-up fa-2x' />
            </div>
          ) : (
            <div />
          )}
          <div className='score-col'>
            <span>High Score : {props.highScore}</span>
            <br />
            <span>Current Score : {props.currScore}</span>
          </div>
          {props.guessedWrong ? (
            <div className='score-wrong text-center'>
              <i className='fas fa-thumbs-down fa-2x' />
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
