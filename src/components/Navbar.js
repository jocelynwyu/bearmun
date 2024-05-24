import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import navImage from "./images/bearmun-logo.png";

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
            <img src={navImage} alt="Nav Image" style={{ width: "250px" }} />
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
                <li className="dropdown-item">
                  <a
                    href="/static/images/AdvisorHandbook.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Advisor Handbook
                  </a>
                </li>
                <li className="dropdown-item">
                  <a
                    href="/images/DelegateHandbook.pdf"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Delegate Handbook
                  </a>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/faq"
                    className="dropdown-links"
                    onClick={closeMobileMenu}
                  >
                    FAQs
                  </Link>
                </li>
                {/* <li className='dropdown-item'>
                  <Link to='/registration' className='dropdown-links' onClick={closeMobileMenu}>
                    Registration
                  </Link>
                </li> */}
                {/* <li className='dropdown-item'>
                  <Link to='/about/page5' className='dropdown-links' onClick={closeMobileMenu}>
                    Page 5
                  </Link>
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
              {/* <ul className='dropdown-menu'>
              <p style={{ fontStyle: 'italic', opacity: '0.6', marginTop: '15px', marginBottom: '15px' }}>
                        General Assembly
                    </p>

                <li className='dropdown-item'>
                  <Link to='/unhcr' className='dropdown-links' onClick={closeMobileMenu}>
                  UNHRC: Refugees

                  </Link>
                </li>
                <li className='dropdown-item'>
                  <Link to='/iaea' className='dropdown-links' onClick={closeMobileMenu}>
                  IAEA: Nuclear Energy
                  </Link>
                </li>
                <li className='dropdown-item'>
                  <Link to='/who' className='dropdown-links' onClick={closeMobileMenu}>
                  WHO: Conflict Zones
                  </Link>
                </li>

                <p style={{ fontStyle: 'italic', opacity: '0.6', marginTop: '15px', marginBottom: '15px' }}>
                        Crisis
                    </p>

                <li className='dropdown-item'>
                  <Link to='/about/jurassic' className='dropdown-links' onClick={closeMobileMenu}>
                  Jurassic Park
                  </Link>
                </li>
                <li className='dropdown-item'>
                  <Link to='/nato' className='dropdown-links' onClick={closeMobileMenu}>
                  Regional: NATO
                  </Link>
                </li>
                <p style={{ fontStyle: 'italic', opacity: '0.6', marginTop: '15px', marginBottom: '15px' }}>
                        Intermediate
                    </p>
                <li className='dropdown-item'>
                    
                  <Link to='/about/icj' className='dropdown-links' onClick={closeMobileMenu}>
                  ICJ: Nicaragua vs US
                  </Link>
                </li>
              </ul> */}
            </li>

            <li className="nav-item">
              <Link
                to="/registration"
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
