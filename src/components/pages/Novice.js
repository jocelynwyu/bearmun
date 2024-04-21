import React from 'react';
import '../../App.css';
import '../Committee.css';
import CommitteeItem from '../CommitteeItem1';
import CommitteeItem2 from '../CommitteeItem2';

function Novice() {
  return (
    <div className='committees'>
      <div className='us-image'>
        <div className='header'>
          {/* <br /> */}
          Novice and <br/>Intermediate<br/> Committees
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
        <h1>General Committees</h1>
        <br />
        <div className='add-level'>
          <div className='level'>
            Novice
            Committees
          </div>
          <div className='list'>

        <CommitteeItem
          src={require('../images/committees/unhcr.webp')}
          committee="UNHRC: Protection of Refugee Women and Children"
        />
        
        <CommitteeItem2
          src={require('../images/committees/iaea.webp')}
          committee="International Atomic Energy Agency: Peaceful use of Nuclear Energy"
        />
        <CommitteeItem
          src={require('../images/committees/who.jpg')}
          committee="WHO: Universal Health Access in Conflict Zones"
        />

        <h1>Crisis</h1>
        <br />
        <CommitteeItem2
          src={require('../images/committees/jurrassic.jpg')}
          committee="InGen Jurassic Park Board of Directors"
        />
        <CommitteeItem
          src={require('../images/committees/nato.jpg')}
          committee="Regional: NATO - South China Sea"
        />
        </div>
        </div>
        <div className='add-level'>
          <div className='level'>
            Intermediate
            Committees
          </div>
          <div className='list'></div>
        <CommitteeItem2
          src={require('../images/committees/icj.jpg')}
          committee="ICJ: Nicaragua vs US"
        />
            </div>

      </ul>
      
    </div>
  );
}

export default Novice;
