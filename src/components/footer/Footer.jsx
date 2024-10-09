import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-section footer-section-lg chef-container">
        {/* Logo ve Adres Bölümü */}
        <article className="footer-logo">
          <img
            src="Assets/Interfaces/Iteration-2-aseets/footer/logo-footer.svg"
            alt="logo-footer"
          />
          <address className="footer-address">
            <div>
              <img
                src="Assets/Interfaces/Iteration-2-aseets/footer/icons/icon-1.png"
                alt="location"
              />
              <span>
                341 Londonderry Road,
                <br />
                Istanbul Türkiye
              </span>
            </div>
            <div>
              <img
                src="Assets/Interfaces/Iteration-2-aseets/footer/icons/icon-2.png"
                alt="mail"
              />
              <span>aciktim@teknolojikyemekler.com</span>
            </div>
            <div>
              <img
                src="Assets/Interfaces/Iteration-2-aseets/footer/icons/icon-3.png"
                alt="phone"
              />
              <span>+90 216 123 45 67</span>
            </div>
          </address>
        </article>

        {/* Hot Menu Bölümü */}
        <article className="footer-menu">
          <h1>Hot Menu</h1>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </article>

        {/* Instagram Bölümü */}
        <article className="footer-instagram">
          <h1>Instagram</h1>
          <div className="grid">
            <img
              src="Assets/Interfaces/Iteration-2-aseets/footer/insta/li-0.png"
              alt="insta-0"
            />
            <img
              src="Assets/Interfaces/Iteration-2-aseets/footer/insta/li-1.png"
              alt="insta-1"
            />
            <img
              src="Assets/Interfaces/Iteration-2-aseets/footer/insta/li-2.png"
              alt="insta-2"
            />
            <img
              src="Assets/Interfaces/Iteration-2-aseets/footer/insta/li-3.png"
              alt="insta-3"
            />
            <img
              src="Assets/Interfaces/Iteration-2-aseets/footer/insta/li-4.png"
              alt="insta-4"
            />
            <img
              src="Assets/Interfaces/Iteration-2-aseets/footer/insta/li-5.png"
              alt="insta-5"
            />
          </div>
        </article>
      </section>
      <div className="footer-divider"></div>
      <article className="footer-bottom">
        <p>© 2023 Teknolojik Yemekler.</p>
      </article>
    </div>
  );
}

export default Footer;
