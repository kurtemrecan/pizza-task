import React from 'react';
import Header from './header/header';
import Navbar from './body/navbar';
import Cards from './body/ordercards/Cards';
import Navbar2 from './body/navbar';
import Footer from './footer/Footer';
function HomePage() {
  return (
    <div>
      <Header />
      <Navbar />
      <div style={{ backgroundColor: '#FAF7F2' }}>
        <Cards />
        <Navbar2 />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
