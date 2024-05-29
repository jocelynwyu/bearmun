import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./LocationSchedule.css";

function Faqs() {
  return (
    <div className="container">
      <div className="us-image">
        <div className="header">
          Contact Us
          <br />
          {/* <img className='ucbmun-image' src={require('./images/ucbmun.png')} alt='UCBMUN Logo' /> */}
        </div>
        <br />
        <br />
        <br />
      </div>
      <p>
        <br />
      </p>
      <br />
      <div className="schedule">
        <p></p>
        <div className="day">
          <h1>QUESTION</h1>
          <br />
          <p> Answer</p>
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Faqs;
