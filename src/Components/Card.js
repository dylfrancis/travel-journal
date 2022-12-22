import React from "react";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img src={`../../public/images/${props.card.imgUrl}`} alt="" />
      <div className="info-container">
        <div className="location"></div>
        <div className="title"></div>
        <div className="date"></div>
        <div className="description"></div>
      </div>
    </div>
  );
};
