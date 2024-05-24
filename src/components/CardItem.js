import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <div className="cards__item__inner">
      <div className="individual-cards">
        <br />
        <br />
        <img className="cards__item__img" src={props.src} alt={props.name} />
        <div className="bio-text">
          <h3 className="name">{props.name}</h3>
          <p className="title">{props.title}</p>
          <p className="email">{props.email}</p>
          <p className="cards__item__text">{props.bio}</p>
          <br />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default CardItem;
