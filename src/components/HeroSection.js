import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='image'>
      <div className='home-intro'>
      <br/>
        BearMUN XXVIII
        <br/>
        <p>
        November __ —  __, 2024
        </p>
      </div>
      <br/>
      <br/>
      <br/>
      </div>

      <div className='sec-letter'>
        <h1 style={{alignItems:'left'}}>
        <br/>
            A Letter from the Secretary General:
        </h1>
        <br/>
        <div className='home-info'>
        <img className='sec-gen-image' src={require('./images/headshots/Anna.JPEG')} alt='UCBMUN Logo' />

        <div className='home-text'>
        <p> Dearest delegates and advisors,
          <br/>
          <br/>
          My letter will come soon. In the meantime, enjoy this beautiful photo of my lovely DG.
          
          <br/>
          <br/>
          Yours,
          <br/>
          <br/>
          <div className='signature'>
          Sara Khemani
          </div>
     
          Secretary General
          <br/>
          <p style={{fontStyle: 'italic'}}>
  secretarygeneral@bearmun.berkeley.edu
</p>

          </p>
      
      </div>
      </div>

      </div>
      <br/>
      <br/>
      <br/>

    </div>
  );
}

export default HeroSection;