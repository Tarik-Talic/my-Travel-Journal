import React from "react";
import "./styles/Card.css";
export default function Card(props) {
  return (
    <div className="card">
      <img src={props.item.imageUrl} />
      <span className="card-location">
        <p>{props.item.location}</p>
        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
      </span>
      <h1>{props.item.title}</h1>
      <p className="card-duration">{props.item.startDate}</p>
      <p className="card-description">{props.item.description}</p>
    </div>
  );
}
