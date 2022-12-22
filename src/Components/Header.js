import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="header-container">
      <FontAwesomeIcon
        className="header-icon"
        icon={faEarthAmericas}
      ></FontAwesomeIcon>
      <div className="header-text">my travel journal.</div>
    </div>
  );
};
