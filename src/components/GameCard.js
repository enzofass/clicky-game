import React from "react";
import "./style.css";

function GameCard(props) {
  console.log("GameCard", props);
  return (
    <div>
      <img
        alt={props.name}
        src={props.src}
        style={imgStyles}
        className='grow:hover grow shadow'
        onClick={props.handleClick}
      />
    </div>
  );
}

const imgStyles = {
  height: "200px",
  width: "200px",
  margin: "20px",
  float: "left"
};

export default GameCard;
