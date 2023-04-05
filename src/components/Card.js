import React from "react";
import "./styles/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function Card(props) {
  return (
    <div className="card">
      <img alt="Image" src={props.item.imageUrl} />
      <div className="card__info">
        <span className="card-location">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>{props.item.location}</p>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </span>
        <h1>{props.item.title}</h1>
        <p className="card-duration">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="card-description">{props.item.description}</p>
      </div>
    </div>
  );
}
