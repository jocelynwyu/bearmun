import React from "react";
import { Link } from "react-router-dom";
import "./CommitteePage.css";

function CommitteePage(props) {
  return (
    <div className="committees__item__inner">
      <div className="image-container">
        <img className="compage-image" src={props.src} alt={props.name} />
        <div className="header-overlay">{props.committee}</div>
      </div>
      <div className="com-name">{props.committee}</div>
      <div className="description">{props.description}</div>
      <Link to={props.link} className="guide-btn">
        Background Guide
      </Link>
      <div className="com-name">
        
        Chairs
        <div className="chair-container">
          <div className="chair-box">
            <div className="chairs">
              {props.chair}
              <img className="photo" src={props.photo} alt={props.name} />
              <div className="chairs-bio">{props.bio}</div>
            </div>
          </div>
          <div className="chair-box">
          <div className="chairs">
            {props.chair}
            <img className="photo" src={props.photo} alt={props.name} />
            <div className="chairs-bio">{props.bio}</div>
          </div>
        </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default CommitteePage;
