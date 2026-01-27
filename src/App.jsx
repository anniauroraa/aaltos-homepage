// src/App.jsx
import "./styles/globals.css";
import "./styles/layout.css";
import "./styles/carousel.css";
import "./styles/cards.css";
import "./styles/footer.css"
import "./styles/mediaQueries.css";

import { Hamburger } from "./components/Hamburger.jsx";
import { Carousel } from "./components/Carousel.jsx";

import { slides } from "./data/carouselData.json";
import membersData from "./data/membersData.json";

function App() {
  return (
    <section className="pageContainer">
      <header className="headerContainer">
        <nav className="headerMenu">
          <a href="#tilaa">Tilaa meidät</a>
          <a href="#jasenet">Bändijäsenet</a>
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
        <Hamburger/>
      </header>

      <div className="carouselContainer">
        <Carousel data={slides}/>
      </div>

      <div id="tilaa" className="contact">
        <h3>Tilaa meidät juhliisi soittamaan!</h3>
        <p>
          Kaipaavatko juhlasi livemusiikkia? Olivatpa kyseessä häät, synttärit, jatkot tai valmistujaiset, aaltos on oiva bändi juhlaan kuin juhlaan. Tämä tamperelainen kokeneista soittajista koostuva bilebändi soittaa kiinnostavaa musiikkia persoonallisella otteella. Ohjelmistomme tarjoaa musiikkia kaikkien rakastamista hittibiiseistä ja tanssimusiikista aina Suomi-indieen ja sovituksiin yllättävistäkin musagenreistä. Räätälöimme setin aina tilaisuuteen sopivaksi toiveesi huomioiden.
        </p>
        <p>
          Tuomme mukanamme laadukkaan ääni- ja valotekniikan. Poikkeuksellisista tarpeista tai juhlatilasi valmiin äänentoiston sopivuudesta voit tiedustella tarkemmin meiltä. 
        </p>
        <p>
          Toimimme pääasiassa Tampereen seudulla, mutta keikkailu onnistuu kauempanakin. Matkakuluja laskutamme tilanteen mukaan. Ole yhteydessä, niin päästään yhdessä suunnittelemaan loistokeikka tapahtumaasi!
        </p>
        <div className="bandInfo">
          <h4>
            Yhteystiedot
          </h4>
          <p className="contactEmail">
            Email: aaltos (at) gmail.com
          </p>
          <p className="instagram">
            Instagram: aaltosband
          </p>
        </div>
      </div>
      <div id="jasenet" className="members">
        <h3>Bändijäsenet</h3>
        <div className="membersGrid">
          {membersData.members.map((member, index) => (
            <div className="memberCard" key={index}>
              <img src={member.src} alt={member.alt} />
              <h4 className="memberName">{member.name}</h4>
              <h4 className="memberInstrument">{member.instrument}</h4>
            </div>
          ))}
        </div>
      </div>
      <footer className="siteFooter">
        <h5 className="bandName">aaltos</h5>
        <div className="footerContent">
          <div className="footerBandInfo">
            <p className="contactEmail">
              aaltos (at) gmail.com
            </p>
            <p className="instagram">
              aaltosband
            </p>
          </div>
          <div className="footerCredits">
            <p>
              Sivut: Anni Virtanen
            </p>
            <p>
              Kuvat: Siina Siuvo, Antti Hakkarainen, Sanni Perttula
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default App;
