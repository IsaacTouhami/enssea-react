
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";



function Home({handleBurger , burgerMenu, darkLight, handleDarkLight}) {
  return (

    <>
    <Header  handleBurger={handleBurger} burgerMenu={burgerMenu} darkLight={darkLight} handleDarkLight={handleDarkLight} />
    <NavBar burgerMenu={burgerMenu}></NavBar>
    <Section>
    <h1 className={styles.title}>Accueil</h1>
                <div className={styles.annanceContainer}>
                    <div className={styles.annanceItem}>
                        <img src="/src/img/s1.jpg" alt="Actualité 1"/>
                        <span>Monsieur le directeur et diplômés</span>
                    </div>
                    <div className={styles.annanceItem}>
                        <img src="/src/img/s2.jpg" alt="Actualité 2"/>
                        <span>Spécialités Master</span>
                    </div>
                    <div className={styles.annanceItem}>
                        <img src="/src/img/s3.jpg" alt="Actualité 3"/>
                        <span>ENSSEA</span>
                    </div>
                </div>

            <div className={styles.presentation}>
            <h2>Nos capabilités</h2>
            <div className={styles.skills}>
                <div className={styles.skill}>
                    <i className="fa-solid fa-graduation-cap"></i>
                    <h3>Formations</h3>
                    <p>Les formations dispensées à l'ENSSEA sont de haut niveau et répondent aux besoins du marché de l'emploi.</p>
                </div>
                <div className={styles.skill}>
                    <i className="fa-solid fa-award"></i>
                    <h3>Recherche</h3>
                    <p>Les laboratoires de recherche de l'ENSSEA sont parmi les plus performants du pays.</p>
                </div>
                <div className={styles.skill}>
                    <i className="fa-solid fa-users"></i>
                    <h3>Etudiants</h3>
                    <p>Les étudiants de l'ENSSEA sont parmi les plus brillants du pays.</p>
                </div>
            </div>
            </div>
    




            <div className={styles.info}>
                <ul  className={styles.actualite}>
                    <li><NavLink to=''>Article (fr-fr)</NavLink> </li>
                    <li><NavLink to=''>Reglement Interieur</NavLink></li>
                    <li><NavLink to=''>Stage</NavLink></li>
                    <li><NavLink to=''>Guide de Memoire</NavLink></li>
                    <li><NavLink to=''>L'assurance Qualité</NavLink></li>
                    <li><NavLink to=''>Textes Règlementaires de La Post Graduation</NavLink></li>
                    <li><NavLink to=''>Formation Doctorale</NavLink></li>
                    <li><NavLink to=''>Mot du Directeur</NavLink></li>
                    <li><NavLink to=''>Les Offres de Formations</NavLink></li>
                    <li><NavLink to=''>Structure De l'Ecole</NavLink></li>
                </ul>
                <span className={styles.splitLine}></span>
                <form action="Post" >
                    <h1>Connecter</h1>
                    <input type="text" placeholder="Identifiant" required/>
                    <input type="password" placeholder="Mot de passe" required/>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" name="maintenir" id="maintenir"/>
                        <label htmlFor="maintenir">Maintenir la connexion</label>
                    </div>
                    <button type="submit">Connexion</button>
                    <div className={styles.links}>
                        <NavLink to=''>Identifiant perdu?</NavLink>
                        <NavLink to=''>Mot de passe perdu?</NavLink>
                    </div>
                </form>
            </div>
    </Section>
    <Footer></Footer>
    </>

  );
}

export default Home;