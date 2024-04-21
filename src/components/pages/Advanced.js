import React from 'react';
import '../../App.css';
import '../Committee.css';
import CommitteeItem from '../CommitteeItem1';
import CommitteeItem2 from '../CommitteeItem2';

function Advanced() {
  return (
    <div className='committees'>
      <div className='us-image'>
        <div className='header' style={{marginTop: '6rem'}}>
          {/* <br /> */}
          Advanced<br/> Committees
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
        <br />
        <div className='add-level'>
          <div className='level'>
            General Assemblies
          </div>
          <div className='list'>

        <CommitteeItem
          src={require('../images/committees/unhcr.webp')}
          committee="6th Legal: Legal Implications of Biotechnology (Cloning)"
          chair="Chair: An Awesome One"
       />
        </div>
        </div>
        <div className='add-level'>
          <div className='level'>
            Crisis
            Committees
          </div>
          <div className='list'>

        <CommitteeItem2
          src={require('../images/committees/unhcr.webp')}
          committee="ICC: Pablo Escobar"
          chair="Chair: An Awesome One"
       />
        
        <CommitteeItem
          src={require('../images/committees/iaea.webp')}
          committee="Crisis AdHoc"
          chair="Chair: An Awesome One"
          />
        <CommitteeItem2
          src={require('../images/committees/who.jpg')}
          committee="UNSC 2067 Extraterrestrial Relations"
          chair="Chair: An Awesome One"
          />
        </div>
        </div>
        <div className='add-level'>
          <div className='level'>
            Joint Crisis
            Committees
          </div>
          <div className='list'>

        <CommitteeItem
          src={require('../images/committees/unhcr.webp')}
          committee="JCC: Barbie"
          chair="Chair: An Awesome One"
       />
        
        <CommitteeItem2
          src={require('../images/committees/iaea.webp')}
          committee="JCC: Oppenheimer"
          chair="Chair: An Awesome One"
          />

        </div>
        </div>
       
            

      </ul>
      
    </div>
  );
}

export default Advanced;
