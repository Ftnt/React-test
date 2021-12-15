import React from "react";
import "./CardCredit.css";

const CardCredit = ({ numberCard = "" }) => {
  return (
    <div className="panel">
      <div className="card card--front">
        <div className="card__number">{numberCard}</div>
        <div className="card__expiry-date">10/21</div>
        <div className="card__owner">Jairo Rocano</div>
        <img
          className="card__logo"
          src="https://kodemia.mx/icons/kodemia-logo.svg"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default CardCredit;
