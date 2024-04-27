import React, { useState, useEffect } from "react";
import "../../App.css";
import "../Committee.css";
import CommitteeItem from "../CommitteeItem1";
import CommitteeItem2 from "../CommitteeItem2";
import { Link } from "react-router-dom";

function Committees() {
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
    window.addEventListener("resize", showButton);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  return (
    <div className="committees">
      <div className="us-image">
        <div className="header">
          Committees
          <br />
        </div>
        <br />
        <br />
        <br />
      </div>

      <ul className="committee__items">
        <br />
        <br />
        <div className="com-link">
          <h3 style={{ display: "flex" }}>
            {" "}
            Committees{" "}
            <div className="com-icon" onClick={handleClick}>
              {click ? "-" : "+"}
            </div>
          </h3>

          <ul className={click ? "com-menu active" : "com-menu"}>
            <li onClick={closeMobileMenu}>
              <Link to="/unhcr" className="add-level">
                UNHCR: Refugees
              </Link>
            </li>

            <li onClick={closeMobileMenu}>
              <Link to="/iaea" className="add-level">
                IAEA: Nuclear Energy
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/legal" className="add-level">
                6th Legal: Biotechnology
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/regional" className="add-level">
                Regional: NATO
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/unoosa" className="add-level">
                UNOOSA 2050: Mars
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/tables" className="add-level">
                Tables du Monde
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/taylor" className="add-level">
                President Taylor Swift
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/icj" className="add-level">
                ICJ: Nicaragua vs US
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/ojsimpson" className="add-level">
                LA Court: OJ Simpson
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/percyjackson" className="add-level">
                Percy Jackson
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/barbenheimer" className="add-level">
                Barbenheimer
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/jccadani" className="add-level">
                JCC: Adani Group
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/jcccbi" className="add-level">
                JCC: CBI
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/adhoc" className="add-level">
                ADHOC: Mystery Crisis{" "}
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/unsc" className="add-level">
                UNSC: Cyprus
              </Link>
            </li>
          </ul>
        </div>
        <div className="list">
          <h1 style={{ alignSelf: "center" }}>General Assemblies</h1> <br />
          <div className="coms">
            <div className="dum">
              <CommitteeItem
                src={require("../images/committees/unhcr.webp")}
                committee="UNHRC: Protection of Refugee Women and Children"
                skill="Skill Level: Novice"
              />
              <CommitteeItem2
                src={require("../images/committees/iaea.webp")}
                committee="IAEA: Peaceful Use of Nuclear Energy"
                skill="Skill Level: Intermediate"
              />

              <CommitteeItem
                src={require("../images/committees/nato.jpg")}
                committee="6th Legal: Legal Implications of Biotechnology (Cloning)"
                skill="Skill Level: Intermediate"
              />
              <CommitteeItem2
                src={require("../images/committees/jurrassic.jpg")}
                committee="Regional: NATO - South China Sea"
                skill="Skill Level: Intermediate"
              />
              <CommitteeItem
                src={require("../images/committees/who.jpg")}
                committee="UNOOSA 2050: Mars Exploration and Resource Extraction"
                skill="Skill Level: Advanced"
              />
              <br />
            </div>
          </div>
          <h1 style={{ alignSelf: "center" }}>Specialized Bodies</h1>
          <br />
          <div className="dum">
            <div className="list">
              <CommitteeItem2
                src={require("../images/committees/unhcr.webp")}
                committee=" Les Grandes Tables du Monde"
                skill="Skill Level: Novice"
              />
              <CommitteeItem
                src={require("../images/committees/iaea.webp")}
                committee="Taylor Swift’s Presidential Campaign "
                skill="Skill Level: Novice"
              />
              <CommitteeItem2
                src={require("../images/committees/jurrassic.jpg")}
                committee=" ICJ: Nicaragua vs US"
                skill="Skill Level: Intermediate"
              />
              <CommitteeItem
                src={require("../images/committees/nato.jpg")}
                committee="LACSC: The Trial of OJ Simpson"
                skill="Skill Level: Advanced"
              />
              <br />
            </div>
          </div>
          <h1 style={{ alignSelf: "center" }}>Crisis Committees</h1>
          <br />
          <div className="dum">
            <div className="list">
              <CommitteeItem2
                src={require("../images/committees/unhcr.webp")}
                committee="Percy Jackson — The Heroes of Olympus"
                skill="Skill Level: Novice"
              />
              <CommitteeItem
                src={require("../images/committees/iaea.webp")}
                committee="Barbenheimer "
                skill="Skill Level: Novice"
              />
              <CommitteeItem2
                src={require("../images/committees/who.jpg")}
                committee="JCC: Adani Group"
                skill="Skill Level: Intermediate"
              />
              <CommitteeItem
                src={require("../images/committees/jurrassic.jpg")}
                committee=" JCC: Central Bureau of Investigation"
                skill="Skill Level: Intermediate"
              />
              <CommitteeItem2
                src={require("../images/committees/nato.jpg")}
                committee="ADHOC: Mystery Crisis"
                skill="Skill Level: Advanced"
              />
              <CommitteeItem
                src={require("../images/committees/nato.jpg")}
                committee="UNSC: Cyprus 1964 - Present / Morocco Wall"
                skill="Skill Level: Advanced"
              />
              <br />
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Committees;
