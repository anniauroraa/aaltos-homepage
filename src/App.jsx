// src/App.jsx
import "./styles/globals.css";
import "./styles/layout.css";
import "./styles/contactLink.css"

import "./styles/carousel.css";
import "./styles/cards.css";
import "./styles/footer.css"

import "./styles/mediaQueries.css";

import { Hamburger } from "./components/Hamburger.jsx";
import { Carousel } from "./components/Carousel.jsx";

import { slides } from "./data/carouselData.json";
import membersData from "./data/membersData.json";
import { ContactLink } from "./components/ContactLink.jsx";

import logoPng from "/src/assets/aaltos-logo-red.svg";

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
            src={logoPng} 
            alt="aaltos band logo where 'aaltos' is in cursive." 
            className="logo"/>
        </div>

        <div className="headerIcons">
          <ContactLink 
            type={"email"}
            color="red"
            iconHeight={24}
          />
          <ContactLink 
            type={"instagram"}
            color="red"
            iconHeight={24}
          />
        </div>

        {/* Only in mobile view */}
        <Hamburger/>
      </header>

      <div className="carouselContainer">
        <Carousel data={slides}/>
      </div>

      <div id="tilaa" className="contact">
        <h1>Tilaa meidät juhliisi soittamaan!</h1>
        <p>
          Kaipaavatko juhlasi livemusiikkia? Olivatpa kyseessä häät, synttärit, jatkot tai valmistujaiset, aaltos on oiva bändi juhlaan kuin juhlaan. Tämä tamperelainen kokeneista soittajista koostuva bilebändi soittaa kiinnostavaa musiikkia persoonallisella otteella. Ohjelmistomme tarjoaa musiikkia kaikkien rakastamista hittibiiseistä ja tanssimusiikista aina Suomi-indieen ja sovituksiin yllättävistäkin musagenreistä. Räätälöimme setin aina tilaisuuteen sopivaksi toiveesi huomioiden.
        </p>
        <p>
          Tuomme mukanamme laadukkaan ääni- ja valotekniikan. Poikkeuksellisista tarpeista tai juhlatilasi valmiin äänentoiston sopivuudesta voit tiedustella tarkemmin meiltä. 
        </p>
        <p>
          Toimimme pääasiassa Tampereen seudulla, mutta keikkailu onnistuu kauempanakin. Matkakuluja laskutamme tilanteen mukaan. Ole yhteydessä, niin päästään yhdessä suunnittelemaan loistokeikka tapahtumaasi!
        </p>
        <div className="mainContactLinks">
          <h2>
            Yhteystiedot
          </h2>
          <ContactLink 
            type={"email"}
            color="red"
            iconWidth={18}
          >
            Email: aaltosband@gmail.com
          </ContactLink>
          <ContactLink 
            type={"instagram"}
            color="red"
            iconWidth={18}
          >
            Instagram: aaltosband
          </ContactLink>          
        </div>
      </div>
      <div id="jasenet" className="members">
        <h1>Bändijäsenet</h1>
        <div className="membersGrid">
          {membersData.members.map((member, index) => (
            <div className="memberCard" key={index}>
              <img src={member.src} alt={member.alt} />
              <h3 className="memberName">{member.name}</h3>
              <h3 className="memberInstrument">{member.instrument}</h3>
            </div>
          ))}
        </div>
      </div>
      <footer className="siteFooter">
        <h5 className="bandName">aaltos</h5>
        <div className="footerContent">
          <div className="footerBandInfo">
            <ContactLink 
              type={"email"}
              color="white"
              iconWidth={18}
            >
              Email: aaltosband@gmail.com
            </ContactLink>
            <ContactLink 
              type={"instagram"}
              color="white"
              iconWidth={18}
            >
              Instagram: aaltosband
            </ContactLink>   
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
