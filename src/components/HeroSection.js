import React, { useEffect, useState } from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  const [countdownString, setCountdownString] = useState("");

  useEffect(() => {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 10, 16, 8);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      const countdownStr = `${days
        .toString()
        .padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      setCountdownString(countdownStr);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <div className="image">
        <div className="words">
          <div className="home-intro">
            BearMUN MMXXIV
            <br />
            <p>
              November 16th - 17th, 2024 <br />
            </p>
          </div>
          <br />
          <div className="countdown-container">
            <div className="home-time">
              <div className="home-section">
                <p>Days</p>
                <div className="countdown">
                  <p>{countdownString.split(":")[0]}</p>
                </div>
              </div>
              <div className="home-section">
                <p>Hours</p>
                <div className="countdown">
                  <p>{countdownString.split(":")[1]}</p>
                </div>
              </div>
              <div className="home-section">
                <p>Minutes</p>
                <div className="countdown">
                  <p>{countdownString.split(":")[2]}</p>
                </div>
              </div>
              <div className="home-section">
                <p>Seconds</p>
                <div className="countdown">
                  <p>{countdownString.split(":")[3]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec-letter">
  <h1 style={{ textAlign: "left" }}>
    <br />A Letter from the Secretary General and Director General:
  </h1>
  <br />
  <div className="home-info">
  <img
      className="letter-image"
      src={require("./images/headshots/sec/letter.png")}
      alt="Sara and Anna"
      style={{ float: "left", marginLeft: "10px" }}
    />
    <div className="home-text">
      <p>
        Esteemed Delegates,
        <br />
        <br />
        Welcome to BEARMUN XXIV! We are Anna Lieggi and Sara Khemani, your
        Director General and Secretary General. We are thrilled for the
        opportunity to host this two-day conference, bringing together local
        and national high schools. BEARMUN offers a diverse array of over 15
        committees, catering to both novice and advanced participants,
        ensuring an enriching experience for all.
        <br />
        <br />
        Our conference unfolds on Berkeley’s historic campus, including
        landmarks like Sather Gate and Dwinelle Hall. Here, amidst our campus
        that is at the forefront in research and innovation across various
        fields, you will engage in dynamic discussions. With distinguished
        speakers and a career fair, you will be provided with invaluable
        insights on a range of issues to advance your professional journey.
        <br />
        <br />
        Most importantly, central to our conference’s excellence is our
        exceptional team of 100+ staffers, all accomplished in collegiate-level
        Model UN. Their guidance and feedback will prove instrumental as high
        school students navigate the MUN circuit.
        <br />
        <br />
        Ensuring that students feel comfortable and have the best experience
        possible is our top priority. Please do not hesitate to reach out with
        any questions or concerns. On behalf of the entire secretariat and
        staff, we eagerly anticipate meeting you on November 16th - 17th, 2024,
        for an unforgettable conference experience!
        <br />
        <br />
        <br />
        <p style={{ textAlign: "right" }}>
          Best regards, <br />
          <div className="signature">Anna Lieggi and Sara Khemani</div>
          Director General and Secretary General
          <br />
          <p style={{ fontStyle: "italic", textAlign: "right" }}>
          directorgeneral@bearmun.studentorg.berkeley.edu  
          </p>
          <p style={{ fontStyle: "italic", textAlign: "right" }}>
          secretarygeneral@bearmun.studentorg.berkeley.edu
          </p>
        </p>
      </p>
    </div>
  </div>
</div>

      <br />
      <br />
      <br />
    </div>
  );
}

export default HeroSection;
