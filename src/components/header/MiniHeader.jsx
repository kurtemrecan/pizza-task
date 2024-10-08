import React from 'react';

export default function miniHeader() {
  return (
    <div>
      <header className="order-header" style={{ backgroundColor: '#ce2829' }}>
        <img
          src="Assets/Interfaces/iteration-1-assets/logo.svg"
          alt="logo"
          className="logo"
        />
        <div className="navigation">
          <span className="nav-item" onClick={goToHome}>
            Ana Sayfa
          </span>
          <span className="nav-separator"> - </span>
          <span
            className="nav-item"
            onClick={goToOrder}
            style={{ fontWeight: 'bold' }}
          >
            Sipariş Oluştur
          </span>
        </div>
      </header>
    </div>
  );
}
