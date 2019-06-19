import React from "react";
import "./style.css";

function GameCard(props) {
  return (
    <div>
      <img
        alt={props.name}
        src={props.src}
        style={imgStyles}
        className='grow:hover grow shadow'
        onClick={props.handleClick}
        id={props.id}
      />
    </div>
  );
}

const imgStyles = {
  height: "200px",
  width: "200px"
};

export default GameCard;
