import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./LocationSchedule.css";

function ConfSchedule() {
  return (
    <div className="container">
      {/* <image src='images/ocean-image.jpg'/> */}
      <div className="us-image">
        <div className="header">
          Schedule
          <br />
          {/* <img className='ucbmun-image' src={require('./images/ucbmun.png')} alt='UCBMUN Logo' /> */}
        </div>
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <div className="letter">
        {/* <h1>Coming soon!</h1> */}
        <p>
          All times are in Pacific Standard Time, tentative, and subject to
          minor changes.
          <br />
          <br />
        </p>
        <br />
        <div className="schedule">
          <div className="day">
            <h1>Saturday, November 16th</h1>
            <br />
            <div className="box">
              <div className="time-box">
                <p> 8:30 - 9:30</p>
                <br />
                <p> 9:30 - 10:00</p>
                <br />
                <p> 10:30 - 1:30</p>
                <br />
                <p> 1:30 - 3:00</p>
                <br />
                <p> 3:00 - 5:00</p>
                <br />
                <p> 5:00 - 5:20</p>
                <br />
                <p> 5:20 - 7:00</p>
                <br />
              </div>
              <div className="time-box">
                <p>Registration</p>
                <br />
                <p> Opening Ceremony</p>
                <br />
                <p>Committee Session I</p>
                <br />
                <p> Lunch</p>
                <br />
                <p> Committee Session II</p>
                <br />
                <p> Break</p>
                <br />
                <p> Committee Session III</p>
                <br />
              </div>
            </div>
          </div>
          <div className="day">
            <h1>Sunday, November 17th</h1>
            <br />
            <div className="box">
              <div className="time-box">
                <p> 9:30 - 12:00</p>
                <br />
                <p> 12:00 - 1:30 </p>
                <br />
                <p> 1:30 - 3:00 </p>
                <br />
                <p> 3:00 - 4:00 </p>
                <br />
                <p> 4:30 - 5:30</p>
                <br />
              </div>
              <div className="time-box">
                <p>Committee Session IV</p>
                <br />
                <p>Lunch</p>
                <br />
                <p>Committee Session V</p>
                <br />
                <p>Campus Tour</p>
                <br />
                <p>Awards Ceremony</p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default ConfSchedule;
