// src/App.jsx
import './App.css';

function App() {
  return (
    <div>
      <section className="landing">
        {/* <img src="/src/assets/bg-1-fullsize-cropped.jpg" alt="background image" className="landingImage"/> */}
        <div className="mainLogo">
          <img src="/src/assets/aaltos-logo.svg" alt="aaltos band" className="logo"/>
        </div>
        <div className="menuMain">
            <span>Tilaa meidät</span>
            <span>Bändijäsenet</span>
        </div>
        <div className="menuIcons">
          <img src="/src/assets/instagram-logo-33x33.svg" alt="Instagram icon" className="icon"/>
          <img src="/src/assets/email-logo-38x33.svg" alt="Email icon" className="icon"/>
        </div>

      </section>
      <section className="about">
        <div className="about-content">
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
      </section>
    </div>
  );
}

export default App;
