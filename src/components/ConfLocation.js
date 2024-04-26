
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './LocationSchedule.css';

function ConfSchedule() {
  return (
    <div className='container'>
      {/* <image src='images/ocean-image.jpg'/> */}
      <div className='us-image'>
      <div className='header'>
        Locations
        <br/>
        {/* <img className='ucbmun-image' src={require('./images/ucbmun.png')} alt='UCBMUN Logo' /> */}
      </div>
      <br/>
      <br/>
      <br/>
      </div>
      <br/>
      <br/>
      <br/>
      <div className='letter'>
      <p>
        <br/>
            Please note that sometimes locations will change.

        </p>
        <br/>
        <br/>
        <div className='location'>
          <div className='room'>
            <h1>Committees</h1>
            <br/><p> UNSC 2067</p>
            <br/><p> ADHOC</p>
            <br/><p> Jurassic Park</p>
            <br/><p> ICC: Pablo Escobar</p>
            <br/><p> JCC: Barbie</p>
            <br/><p> JCC: Oppenheimer</p>
            <br/><p> ICJ: Nicaragua vs US</p>
            <br/><p> 6th Legal: Biotechnology</p>
            <br/><p> Regional: NATO </p>
            <br/><p> WHO: Conflict Zones </p>
            <br/><p> IAEA: Nuclear Energy</p>
            <br/><p> UNHRC: Refugees</p>
            <br/>
          </div>
          <div className='room'>
            <h1>Locations</h1>
            <br/><p> Some room</p>
            <br/><p> Some room</p>
            <br/><p> Some room</p>
            <br/><p> Some room</p>
            <br/><p> Some room</p>
            <br/><p> Some room</p>
            <br/><p> Some room</p>
            <br/><p> Some room</p>
            <br/><p> Some room</p>
            <br/><p> Some room</p>
            <br/><p> Some room</p>
            <br/><p> Some room</p>

            <br/>
          </div>
        </div>
        <br/>
      </div>
      <br/>
      <br/>
      <br/>

    </div>
  );
}

export default ConfSchedule;