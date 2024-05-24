import React from "react";
import { Link } from "react-router-dom";
import "./Committee.css";

function CommitteeItem(props) {
  return (
    <div className="committees__item__inner">
      <div className="individual1">
        <br />
        <br />
        <div className="the-image">
          <img
            className="committees__item__img"
            src={props.src}
            alt={props.name}
          />
        </div>
        <div className="text-box-left">
          <div className="committees__item__text">
            <h3 className="committee">{props.committee}</h3>
            <div className="skill">{props.skill}</div>
            <Link to={props.link} className="back-btn">Background</Link>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default CommitteeItem;
