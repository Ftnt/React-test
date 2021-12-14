import React from "react";
import "./Card.css";

const Card = ({ id, name, status, species, image }) => {
  return (
    <article id={id} className="card-container">
      <div className="card-content-img">
        <img src={image} alt="imagen" />
      </div>
      <div className="card-content-body">
        <div>
          <h2>{name}</h2>
          <p>
            <span>{status}</span>-<span>{species}</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
