import React from "react";

const Card = (props) => (
  <div className="cardContainer" onClick={() => props.selectCard(props.id)}>
    <div className="imageContainer">
      <img alt="card" src={props.image} />
    </div>
  </div>
);

export default Card;
