import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import logo from "../img/logo_enssea_oval-light.png"

import styles from "./Contact.module.css";


function Contact( {handleBurger , burgerMenu, darkLight, handleDarkLight} ) {
  return (
    <>
    <Header  handleBurger={handleBurger} burgerMenu={burgerMenu} darkLight={darkLight} handleDarkLight={handleDarkLight} />
    <NavBar burgerMenu={burgerMenu}></NavBar>
        <Section>
        <div className={styles.contact}>
                <img src={logo} alt="Logo" />
                <h1 className={styles.title}>Contactez Nous</h1> 

                <div className={styles.info}>
    
                    <div className={styles.item}>
                        <i className="fa-solid fa-map-marker-alt"></i>
                        <p>Pôle universitaire de Koléa, Koléa, Tipaza, Algérie</p>
                    </div>
                    <div className={styles.item}>
                        <i className="fa-solid fa-phone"></i>
                        <p>+213 (0) 24-38-00-24</p>
                    </div>
                    <div className={styles.item}>
                        <i className="fa-solid fa-fax"></i>
                        <p>+213 (0) 24-38-00-25</p>
                    </div>
                    <div className={styles.item}>
                        <i className="fa-solid fa-globe"></i>
                        <p><a href="http://www.enssea.edu.dz">www.enssea.edu.dz</a></p>
                    </div>
                </div>
            </div> 
        </Section>
        <Footer/>
    </>
  );
}

export default Contact;