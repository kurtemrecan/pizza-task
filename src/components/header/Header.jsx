import React from 'react';
import './header.css';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const history = useHistory();
  const goToOrder = () => {
    history.push('/order');
  };

  return (
    <div
      className="header-container "
      style={{
        backgroundImage:
          'url("Assets/Interfaces/iteration-1-assets/home-banner.png")',
      }}
    >
      <div className="header-content">
        <div className="header-logo">
          <img src="Assets/Interfaces/iteration-1-assets/logo.svg" alt="logo" />
        </div>
        <p>
          KOD ACIKTIRIR, <br /> PİZZA, DOYURUR
        </p>
        <button className="header-button" onClick={goToOrder}>
          ACIKTIM
        </button>
      </div>
    </div>
  );
}
