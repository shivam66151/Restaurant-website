import React from 'react';
import logo from './logo.png';
import './styles.css';

const Logo = () => (
  <div className='header-content_logo'>
    <div>
      <img src={logo} alt='logo' />
      <span>
        <b>PoohLamen</b>
      </span>
    </div>
    <p>
      <b>Restaurant and Bar</b>
    </p>
  </div>
);

export default Logo;
