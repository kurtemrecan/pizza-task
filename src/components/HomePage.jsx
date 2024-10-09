import React from 'react';
import Header from './header/header';
import Navbar from './body/navbar';
import Cards from './body/ordercards/Cards';

function HomePage() {
  return (
    <div>
      <Header />
      <Navbar />
      <div style={{ backgroundColor: '#FAF7F2' }}>
        <Cards />
      </div>
    </div>
  );
}

export default HomePage;
