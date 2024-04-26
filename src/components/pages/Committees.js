import React from 'react';
import '../../App.css';
import '../Committee.css';
import CommitteeItem from '../CommitteeItem1';
import CommitteeItem2 from '../CommitteeItem2';
import { Link } from 'react-router-dom';

function Committees() {
  return (
    <div className='committees'>
      <div className='us-image'>
        <div className='header'>
          Committees
          <br />
        </div>
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <ul className='committee__items'>
        <br/>
        <br/>
        <div className='com-link'>
          <br/>
          <br/>
          <br/>
              <Link to='/unhcr' className='add-level'>
              UNHCR: Refugees
              </Link>
              <Link to='/unhcr' className='add-level'>
              IAEA: Nuclear Energy
              </Link>
              <Link to='/unhcr' className='add-level'>
              6th Legal: Biotechnology
              </Link>
              <Link to='/unhcr' className='add-level'>
              Regional: NATO
              </Link>
              <Link to='/unhcr' className='add-level'>
              UNOOSA 2050: Mars
              </Link>
              <Link to='/unhcr' className='add-level'>
              Tables du Monde
              </Link>
              <Link to='/unhcr' className='add-level'>
              President Taylor Swift
              </Link>
              <Link to='/unhcr' className='add-level'>
              ICJ: Nicaragua vs US
              </Link>
              <Link to='/unhcr' className='add-level'>
              LA Court: OJ Simpson
              </Link>
              <Link to='/unhcr' className='add-level'>
              Percy Jackson
              </Link>
              <Link to='/unhcr' className='add-level'>
              Barbenheimer
              </Link>
              <Link to='/unhcr' className='add-level'>
              JCC: Adani Group
              </Link>
              <Link to='/unhcr' className='add-level'>
              JCC: CBI
              </Link>
              <Link to='/unhcr' className='add-level'>
              ADHOC: Mystery Crisis              </Link>
              <Link to='/unhcr' className='add-level'>
              UNSC: Cyprus
              </Link>
              </div>
            <div className='list'>
              <h1>General Assemblies</h1>
              <br />
              <div className='coms'>
                <div className='list'>
                  <CommitteeItem
                    src={require('../images/committees/unhcr.webp')}
                    committee="UNHRC: Protection of Refugee Women and Children"
                    skill="Skill Level: Novice"
                  />
                  <CommitteeItem2
                    src={require('../images/committees/iaea.webp')}
                    committee="IAEA: Peaceful Use of Nuclear Energy"
                    skill="Skill Level: Intermediate"
                  />
                  
                  <CommitteeItem
                    src={require('../images/committees/nato.jpg')}
                    committee="6th Legal: Legal Implications of Biotechnology (Cloning)"
                    skill="Skill Level: Intermediate"
                  />
                  <CommitteeItem2
                    src={require('../images/committees/jurrassic.jpg')}
                    committee="Regional: NATO - South China Sea"
                    skill="Skill Level: Intermediate"
                  />
                  <CommitteeItem
                    src={require('../images/committees/who.jpg')}
                    committee="UNOOSA 2050: Mars Exploration and Resource Extraction"
                    skill="Skill Level: Advanced"
                  />
                  <br />
                </div>
              </div>
              <h1>Specialized Bodies</h1>
              <br />
              <div className='add-level'>
                <div className='list'>
                  <CommitteeItem2
                    src={require('../images/committees/unhcr.webp')}
                    committee=" Les Grandes Tables du Monde"
                    skill="Skill Level: Novice"
                  />
                  <CommitteeItem
                    src={require('../images/committees/iaea.webp')}
                    committee="Taylor Swift’s Presidential Campaign "
                    skill="Skill Level: Novice"
                  />
                  <CommitteeItem2
                    src={require('../images/committees/jurrassic.jpg')}
                    committee=" ICJ: Nicaragua vs US"
                    skill="Skill Level: Intermediate"
                  />
                  <CommitteeItem
                    src={require('../images/committees/nato.jpg')}
                    committee="LACSC: The Trial of OJ Simpson"
                    skill="Skill Level: Advanced"
                  />
                  <br />
                </div>
              </div>
              <h1>Crisis Committees</h1>
              <br />
              <div className='add-level'>
                <div className='list'>
                  <CommitteeItem2
                    src={require('../images/committees/unhcr.webp')}
                    committee="Percy Jackson — The Heroes of Olympus"
                    skill="Skill Level: Novice"
                  />
                  <CommitteeItem
                    src={require('../images/committees/iaea.webp')}
                    committee="Barbenheimer "
                    skill="Skill Level: Novice"
                  />
                  <CommitteeItem2
                    src={require('../images/committees/who.jpg')}
                    committee="JCC: Adani Group"
                    skill="Skill Level: Intermediate"
                  />
                  <CommitteeItem
                    src={require('../images/committees/jurrassic.jpg')}
                    committee=" JCC: Central Bureau of Investigation"
                    skill="Skill Level: Intermediate"
                  />
                  <CommitteeItem2
                    src={require('../images/committees/nato.jpg')}
                    committee="ADHOC: Mystery Crisis"
                    skill="Skill Level: Advanced"
                  />
                  <CommitteeItem
                    src={require('../images/committees/nato.jpg')}
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
