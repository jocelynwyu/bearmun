import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
    <div className='overall-footer'>
      <section class='social-media'>
          <div class='footer-logo'>
           
          </div>
          <div class='social-icons'>
          <a
            class='social-icon-link instagram'
            href='https://www.instagram.com/bearmun.berkeley/'
            target='_blank'
            aria-label='Instagram'
            >
            <i class='fab fa-instagram' />
            </a>
            
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/bearmun.berkeley/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook' />
            </a>
            
          </div>
          <p class='website-rights'>BearMUN © 2024</p>
      </section>
    </div>
    </div>
  );
}

export default Footer;