import React from "react";
import data from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const Card = (props) => {
  let location = props.card.location.toUpperCase();
  let bottomLine;
  if (parseInt(props.card.id) === data.length) {
    bottomLine = false;
  } else {
    bottomLine = true;
  }

  let imageUrl = `images/${props.card.imageUrl}`;
  return (
    <div className="card">
      <div className="card-container">
        <img className="card-img" src={imageUrl} alt="" />
        <div className="info-container">
          <div className="location">
            <FontAwesomeIcon
              className="location-icon"
              icon={faLocationDot}
            ></FontAwesomeIcon>
            <div className="location-title">{location}</div>
            <div className="google-maps-link">
              <a
                href={props.card.googleMapsUrl}
                rel="noreferrer"
                target="_blank"
              >
                View on Google Maps
              </a>
            </div>
          </div>
          <div className="title">
            <h1>{props.card.title}</h1>
          </div>
          <div className="date"></div>
          <h4>{props.card.date}</h4>
          <div className="description">
            <p>{props.card.description}</p>
          </div>
        </div>
        <div className="horizontal-line"></div>
      </div>
      {bottomLine && (
        <div className="horizontal-line">
          <hr></hr>
        </div>
      )}
    </div>
  );
};
