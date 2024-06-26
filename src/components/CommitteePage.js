import React from "react";
import { Link } from "react-router-dom";
import "./CommitteePage.css";

function CommitteePage(props) {
  return (
    <div className="committees__item__inner">
      <div className="image-container">
        {/* <div className='back-button'>
            Back to Committees
        </div> */}
        <img className="compage-image" src={props.src} alt={props.name} />
        <div className="header-overlay">{props.committee}</div>
      </div>
      <div className="com-name">{props.committee}</div>
      <div className="description">{props.description}</div>
      <Link to={props.link} className="guide-btn">
        Background Guide
      </Link>
      <div className="com-name">
        Staff
        <div className="chair-container" style={{ justifyContent: "center", alignItems: 'center'}}>
          <br></br>
          <br></br>

          <br></br>
          <br></br>

          <h2>Coming Soon!</h2>
          {/* <div className="chair-box">
            <div className="chairs">
              {props.chair1}
              <img className="photo" src={props.photo1} alt={props.chair1} />
              <div className="position">{props.position1}</div>
              <div className="chairs-bio">{props.bio1}</div>
            </div>
          </div>
          <div className="chair-box">
            <div className="chairs">
              {props.chair2}
              <img className="photo" src={props.photo2} alt={props.chair2} />
              <div className="position">{props.position2}</div>
              <div className="chairs-bio">{props.bio2}</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CommitteePage;
