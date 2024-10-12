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
      <div className="com-image">
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
              <Link to="/unhrc" className="add-level">
                UNHRC: Refugees
              </Link>
            </li>

            <li onClick={closeMobileMenu}>
              <Link to="/iaea" className="add-level">
                IAEA: Nuclear Energy
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/regional" className="add-level">
                Regional: NATO
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/legal" className="add-level">
                6th Legal: Biotechnology
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/unoosa" className="add-level">
                UNOOSA 2050: Mars
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/taylor" className="add-level">
                President Taylor Swift
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/tables" className="add-level">
                Tables du Monde
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/formula1" className="add-level">
                Formula 1
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/disney" className="add-level">
                Disney Board
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/ojsimpson" className="add-level">
                LA Court: OJ Simpson
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
              <Link to="/percyjackson" className="add-level">
                Percy Jackson
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/unsc" className="add-level">
                UNSC: Cyprus
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="/adhoc" className="add-level">
                ADHOC
              </Link>
            </li>
          </ul>
        </div>
        <div className="list">
          <h1 style={{ alignSelf: "center" }}>General Assemblies</h1> <br />
          <div className="coms">
            <div className="dum">
              <CommitteeItem
                src={require("../images/committees/ga/unhrc refugees.jpg")}
                committee="UNHRC: Healthcare Access for Refugee Women and Children"
                skill="Skill Level: Novice"
                link="/unhrc"
              />
              <CommitteeItem2
                src={require("../images/committees/ga/iaea nuclear energy.jpg")}
                committee="IAEA: Peaceful Use of Nuclear Energy"
                skill="Skill Level: Intermediate"
                link="/iaea"
              />

              <CommitteeItem
                src={require("../images/committees/ga/nato south china sea.jpg")}
                committee="NATO - South China Sea: Territorial Disputes"
                skill="Skill Level: Intermediate"
                link="/regional"
              />
              <CommitteeItem2
                src={require("../images/committees/ga/6th legal biotech.jpg")}
                committee="(Double Del) 6th Legal: Implications of Biotechnology and Biosecurity"
                skill="Skill Level: Intermediate"
                link="/legal"
              />
              <CommitteeItem
                src={require("../images/committees/ga/unoosa mars.png")}
                committee="UNOOSA 2050: Mars Exploration and Resource Extraction"
                skill="Skill Level: Advanced"
                link="/unoosa"
              />
              <br />
            </div>
          </div>
          <h1 style={{ alignSelf: "center" }}>Specialized Bodies</h1>
          <br />
          <div className="dum">
            <div className="list">
              <CommitteeItem2
                src={require("../images/committees/spec/taylor swift presidential campaign.jpg")}
                committee="Taylor Swift’s Presidential Campaign "
                skill="Skill Level: Novice"
                link="/taylor"
              />
              <CommitteeItem
                src={require("../images/committees/spec/les grandes tables du monde.jpg")}
                committee=" Les Grandes Tables du Monde"
                skill="Skill Level: Novice"
                link="/tables"
              />
              <CommitteeItem2
                src={require("../images/committees/spec/f1.avif")}
                committee="Formula 1: Survive to Drive"
                skill="Skill Level: Intermediate"
                link="/formula1"
              />
              
              <CommitteeItem
                src={require("../images/committees/spec/oj simpson.webp")}
                committee="Los Angeles County Superior Court: The Trial of OJ Simpson"
                skill="Skill Level: Advanced"
                link="/ojsimpson"
              />
              <br />
            </div>
          </div>
          <h1 style={{ alignSelf: "center" }}>Crisis Committees</h1>
          <br />
          <div className="dum">
            <div className="list">
              <CommitteeItem2
                src={require("../images/committees/crisis/barbenheimer.jpg")}
                committee="Barbenheimer "
                skill="Skill Level: Novice"
                link="/barbenheimer"
              />
              <CommitteeItem
                src={require("../images/committees/crisis/jcc adani.jpg")}
                committee="JCC: Adani Group"
                skill="Skill Level: Novice"
                link="/jccadani"
              />
              <CommitteeItem2
                src={require("../images/committees/crisis/jcc cbi.jpg")}
                committee=" JCC: Central Bureau of Investigation"
                skill="Skill Level: Novice"
                link="/jcccbi"
              />
              <CommitteeItem
                src={require("../images/committees/crisis/percy jackson.webp")}
                committee="Percy Jackson — The Heroes of Olympus"
                skill="Skill Level: Intermediate"
                link="/percyjackson"
              />
              <CommitteeItem2
                src={require("../images/committees/spec/disney bod.jpg")}
                committee="Disney Board of Directors"
                skill="Skill Level: Intermediate"
                link="/disney"
              />
              <CommitteeItem
                src={require("../images/committees/crisis/unsc cyprus.webp")}
                committee="UNSC: Reunification of Cyprus"
                skill="Skill Level: Advanced"
                link="/unsc"
              />
              <CommitteeItem2
                src={require("../images/committees/crisis/gavel adhoc.jpg")}
                committee="ADHOC"
                skill="Skill Level: Advanced"
                link="/adhoc"
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
