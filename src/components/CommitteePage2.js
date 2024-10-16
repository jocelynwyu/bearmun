import React from "react";
import { Link } from "react-router-dom";
import "./CommitteePage.css";

function CommitteePage2(props) {
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
      <div
        className="description"
        style={{ textAlign: "center", fontStyle: "italic" }}
      >
        {props.description1}
      </div>
      <div
        className="description"
        style={{ textAlign: "center", fontStyle: "italic" }}
      >
        {props.description2}
      </div>
      <div
        className="description"
        style={{ textAlign: "center", fontStyle: "italic" }}
      >
        {props.description3}
      </div>
      <div
        className="description"
        style={{ textAlign: "center", fontStyle: "italic" }}
      >
        {props.description4}
      </div>
      <br />
      <div
        className="description"
        style={{ textAlign: "center", fontStyle: "italic" }}
      >
        {props.description5}
      </div>
      <div
        className="description"
        style={{ textAlign: "center", fontStyle: "italic" }}
      >
        {props.description6}
      </div>
      <div
        className="description"
        style={{ textAlign: "center", fontStyle: "italic" }}
      >
        {props.description7}
      </div>
      <div
        className="description"
        style={{ textAlign: "center", fontStyle: "italic" }}
      >
        {props.description8}
      </div>
      <a
        href={props.guide}
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
          color: "black",
        }}
        className="guide-btn"
      >
        Background Guide
      </a>
      <div className="com-name">
        Staff
        <div className="chair-container" style={{ justifyContent: "center" }}>
          <br></br>
          <br></br>

          <br></br>
          <br></br>

          {/* <h2>Coming Soon!</h2> */}
          <div className="chair-box">
            {/* <h2>Coming Soon!</h2> */}
            <div className="chair-box">
              <div className="chairs">
                {props.chair1}
                <img className="photo" src={props.photo1} alt={props.chair1} />
                <div className="position">{props.position1}</div>
                <div className="chairs-bio">{props.bio11}</div>
                <div className="chairs-bio">{props.bio12}</div>
                <div className="chairs-bio">{props.bio13}</div>
                <div className="chairs-bio">{props.bio14}</div>
                <div className="chairs-bio">{props.bio15}</div>
                <div className="chairs-bio">{props.bio16}</div>
                <div className="chairs-bio">{props.bio17}</div>
              </div>
            </div>
            <div className="chair-box">
              <div className="chairs">
                {props.chair2}
                <img className="photo" src={props.photo2} alt={props.chair2} />
                <div className="position">{props.position2}</div>
                <div className="chairs-bio">{props.bio21}</div>
                <div className="chairs-bio">{props.bio22}</div>
                <div className="chairs-bio">{props.bio23}</div>
                <div className="chairs-bio">{props.bio24}</div>
                <div className="chairs-bio">{props.bio25}</div>
                <div className="chairs-bio">{props.bio26}</div>
                <div className="chairs-bio">{props.bio27}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommitteePage2;
