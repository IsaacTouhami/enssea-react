
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Header from "../components/Header";



function Home({handleBurger , burgerMenu, darkLight, handleDarkLight}) {
  return (

    <>
    <Header  handleBurger={handleBurger} burgerMenu={burgerMenu} darkLight={darkLight} handleDarkLight={handleDarkLight} />
    <NavBar burgerMenu={burgerMenu}></NavBar>
    <Section>
    <h1>Accueil</h1>
            <div className="skills">
                <div className="skill">
                    <i className="fa-solid fa-graduation-cap"></i>
                    <h3>Formations</h3>
                    <p>Les formations dispensées à l'ENSSEA sont de haut niveau et répondent aux besoins du marché de l'emploi.</p>
                </div>
                <div className="skill">
                    <i className="fa-solid fa-award"></i>
                    <h3>Recherche</h3>
                    <p>Les laboratoires de recherche de l'ENSSEA sont parmi les plus performants du pays.</p>
                </div>
                <div className="skill">
                    <i className="fa-solid fa-users"></i>
                    <h3>Etudiants</h3>
                    <p>Les étudiants de l'ENSSEA sont parmi les plus brillants du pays.</p>
                </div>


            <div className="info">
                <ul  className="actualite">
                    <li><a href="">Article (fr-fr)</a> </li>
                    <li><a href="">Reglement Interieur</a></li>
                    <li><a href="">Stage</a></li>
                    <li><a href="">Guide de Memoire</a></li>
                    <li><a href="">L'assurance Qualité</a></li>
                    <li><a href="">Textes Règlementaires de La Post Graduation</a></li>
                    <li><a href="">Formation Doctorale</a></li>
                    <li><a href="">Mot du Directeur</a></li>
                    <li><a href="">Les Offres de Formations</a></li>
                    <li><a href="">Structure De l'Ecole</a></li>
                </ul>
                <span className="splitLine"></span>
                <form action="Post" >
                    <input type="text" placeholder="Identifiant" required/>
                    <input type="password" placeholder="Mot de passe" required/>
                    <div className="checkbox-container">
                        <input type="checkbox" name="maintenir" id="maintenir"/>
                        <label htmlFor="maintenir">Maintenir la connexion</label>
                    </div>
                    <button type="submit">Connexion</button>
                    <div className="links">
                        <a href="">Identifiant perdu?</a>
                        <a href="">Mot de passe perdu?</a>
                    </div>
                </form>
            </div>
        </div>
    </Section>
    <Footer></Footer>
    </>

  );
}

export default Home;