import React from "react";
import "./styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <nav>
      <FontAwesomeIcon icon={faEarthAmericas} />
      <h2>my travel journal</h2>
    </nav>
  );
}
