// src/App.jsx
import './styles/globals.css';
import './styles/layout.css';
import './styles/components.css'
import './styles/responsive.css';

import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="headerContainer">
        <nav className="headerMenu">
          <a href="#contact">Tilaa meidät</a>
          <a href="#members">Bändijäsenet</a>
        </nav>

        <div className="headerLogo">
          <img 
            src="/src/assets/aaltos-logo-red.svg" 
            alt="aaltos band" 
            className="logo"/>
        </div>

        <div className="headerIcons">
          <a href="https://www.instagram.com/aaltosband/" aria-label="Instagram">
            <img src="/src/assets/instagram-icon-red.svg" alt="Instagram icon"/>
          </a>
          <a href="mailto:aaltosband@gmail.com" aria-label="Email">
            <img src="/src/assets/email-icon-red.svg" alt="Email icon"/>
          </a>
        </div>

        {/* Only in mobile view */}
        <button
          className="hamburger"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {menuOpen && (
          <div className="mobileMenu">
            <a href="#contact">Tilaa meidät</a>
            <a href="#members">Bändijäsenet</a>
            <div className="mobileIcons">
              <a href="https://www.instagram.com/aaltosband/">
                <img src="/src/assets/instagram-icon-red.svg" alt="Instagram icon" className="icon"/>
              </a>
              <a href="mailto:aaltosband@gmail.com">
                <img src="/src/assets/email-icon-red.svg" alt="Email icon" className="icon"/>
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="imageContainer">
        <img src="/src/assets/bg-1-fullsize-cropped.jpg" alt="background image" className="landingBackground"/>
      </section>

      <section className="contentContainer">
        <div id="contact" className="contact">
          <h2>Olemme aaltos</h2>
          <p>
            Entisistä ja nykyisistä tekniikanopiskelijoista koottu bilebändi aaltos 
            soittaa kiinnostavaa musiikkia persoonallisella otteella. aaltos on niin 
            cool että sen nimi kirjoitetaan pienellä alkukirjaimella. Bändiläiset ovat 
            tuttuja konkareita useista opiskelijabändeistä, ja toistaiseksi bändi soittaa 
            vain cover-musiikkia, mutta saa nähdä mitä tulevaisuus tuo tullessaan! 
            Bändi on tilattavissa rahalla aivan mihin vain tilaisuuteen, ja yhteyden 
            heihin saa instagramin tai sähköpostin kautta.
            </p>
        </div>
        <div id="members" className="members">
          <h2>Bändijäsenet</h2>
        </div>
      </section>
    </div>
  );
}

export default App;
