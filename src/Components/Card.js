import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const Card = (props) => {
  let imageUrl = `images/${props.card.imageUrl}`;
  return (
    <div className="card-container">
      <img src={imageUrl} alt="" />
      <div className="info-container">
        <div className="location">
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
          <div className="location-title">{props.card.location}</div>
          <div className="google-maps-link">
            <a href={props.card.googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </div>
        </div>
        <div className="title">
          <h1>props.</h1>
        </div>
        <div className="date"></div>
        <div className="description"></div>
      </div>
    </div>
  );
};
