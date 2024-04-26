import React, { useEffect, useState } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import AnimatedNumbers from 'react-animated-numbers';


function HeroSection() {
  const [countdownString, setCountdownString] = useState('');

  useEffect(() => {
    // Calculate the countdown to December 7th, 8 am
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 10, 16, 8); // December is month 11

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      // Format the countdown string with leading zeros and consistent format
      const countdownStr = `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      // Update the state with the countdown string
      setCountdownString(countdownStr);
    }, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hero-container'>
      <div className='image'>
        <div className='home-intro'>
          <br />
          BearMUN XXVIII
          <br />
          <p>
            November 16th - 17th, 2024 <br />
          </p>
        </div>
        <br/>
        <div className='countdown-container'>
          <div className='home-time'>
            <div className='home-section'>
              <p>Days</p>
              <div className='countdown'>
                {/* Display the days count */}
                <p>{countdownString.split(':')[0]}</p>
              </div>
            </div>
            <div className='home-section'>
              <p>Hours</p>
              <div className='countdown'>
                {/* Display the hours count */}
                <p>{countdownString.split(':')[1]}</p>
              </div>
            </div>
            <div className='home-section'>
              <p>Minutes</p>
              <div className='countdown'>
                {/* Display the minutes count */}
                <p>{countdownString.split(':')[2]}</p>
              </div>
            </div>
            <div className='home-section'>
              <p>Seconds</p>
              <div className='countdown'>
                {/* Display the seconds count */}
                <p>{countdownString.split(':')[3]}</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>

      <div className='sec-letter'>
        <h1 style={{ alignItems: 'left' }}>
          <br />
          A Letter from the Secretary General:
        </h1>
        <br />
        <div className='home-info'>
          <img className='sec-gen-image' src={require('./images/headshots/Anna.JPEG')} alt='UCBMUN Logo' />

          <div className='home-text'>
            <p> Dearest delegates and advisors,
              <br />
              <br />
              My letter will come soon. In the meantime, enjoy this beautiful photo of my lovely DG.

              <br />
              <br />
              Yours,
              <br />
              <br />
              <div className='signature'>
                Sara Khemani
              </div>

              Secretary General
              <br />
              <p style={{ fontStyle: 'italic' }}>
                secretarygeneral@bearmun.berkeley.edu
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