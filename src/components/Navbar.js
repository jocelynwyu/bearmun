import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import navImage from "./images/ucbmun copy.png";
import handbook from "./images/AdvisorHandbook.pdf";
import minorform from "./images/forms/AuthorizationConsentTreatmentMinor.pdf";
import photoform from "./images/forms/Photo and Video Release .pdf";
import activityform from "./images/forms/RSO Activities Waiver FORM.pdf";

// Navbar component
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-name" onClick={closeMobileMenu}>
            <img
              src={navImage}
              alt="Nav Image"
              style={{ width: "45px", margin: "1vw" }}
            />
            <p style={{ fontWeight: "300", fontFamily: "Reddit Sans" }}>BEAR</p>
            <p style={{ fontFamily: "Reddit Sans" }}>MUN</p>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-links" onClick={closeMobileMenu}>
                About
              </div>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link
                    to="/secretariat"
                    className="dropdown-links"
                    onClick={closeMobileMenu}
                  >
                    Secretariat
                  </Link>
                </li>
                {/* <li className="dropdown-item">
                  <Link
                    to="/contact"
                    className="dropdown-links"
                    onClick={closeMobileMenu}
                  >
                    Contact Us
                  </Link>
                </li> */}
                <li className="dropdown-item">
                  <Link
                    to="/schedule"
                    className="dropdown-links"
                    onClick={closeMobileMenu}
                  >
                    Schedule
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/locations"
                    className="dropdown-links"
                    onClick={closeMobileMenu}
                  >
                    Locations
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/policies"
                    className="dropdown-links"
                    onClick={closeMobileMenu}
                  >
                    Policies
                  </Link>
                </li>
                {/* <li className='dropdown-item'>
                  <Link to='/about/college' className='nav-links' onClick={closeMobileMenu}>
                    College Application Enrichment
                  </Link>
                </li> */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-links" onClick={closeMobileMenu}>
                Resources
              </div>
              <ul className="dropdown-menu">
                {/* <li className="dropdown-item" onClick={closeMobileMenu}>
      <a href={handbook} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "black" }}>
        Handbooks
      </a>
    </li> */}
                <li className="dropdown-item">
                  <li
                    className="dropdown-links"
                    onClick={closeMobileMenu}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginTop: "-10px",
                    }}
                  >
                    <a
                      href={minorform}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Minor Consent
                    </a>
                  </li>
                </li>
                <li className="dropdown-item">
                  <li
                    className="dropdown-links"
                    onClick={closeMobileMenu}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginTop: "-10px",
                    }}
                  >
                    <a
                      href={photoform}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      Photo Consent
                    </a>
                  </li>
                </li>

                <li className="dropdown-item">
                  <li
                    className="dropdown-links"
                    onClick={closeMobileMenu}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginTop: "-10px",
                    }}
                  >
                    <a
                      href={activityform}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      Liability Form
                    </a>
                  </li>
                </li>

                {/* <li className="dropdown-item" onClick={closeMobileMenu}>
      <a href="/images/DelegateHandbook.pdf" style={{ textDecoration: "none", color: "black" }}>
        Delegate Handbook
      </a>
    </li> */}
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="/committees"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Committees
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSemok5b7eIoZFWrXdo4eawYrxfzvYlyJDBNuUOTJDXWeLbzYw/viewform?embedded=true"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <button className="btn--outline">Registration</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
