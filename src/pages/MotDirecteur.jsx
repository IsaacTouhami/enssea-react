import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Section from '../components/Section';
import Footer from '../components/Footer';

import styles from './MotDirecteur.module.css';

function MotDirecteur({ handleBurger, burgerMenu, darkLight, handleDarkLight }) {
  return (
    <>
      <Header handleBurger={handleBurger} burgerMenu={burgerMenu} darkLight={darkLight} handleDarkLight={handleDarkLight} />
      <NavBar burgerMenu={burgerMenu} />
      <Section>
      
        <div className={styles.headerContainer}>
          <img src="/src/img/Mr-Tomach.png" alt="directeur" className={styles.directorImage} />
          <h1 className={styles.title}>Mot du Directeur</h1>
        </div>

        <p className={styles.paragraph}><span>Chers étudiants, chers partenaires, chers collègues,</span></p>
        <p className={styles.paragraph}><span>C’est avec une immense fierté que je m’adresse à vous en tant que directeur de l’École Nationale Supérieure de Statistique et d’Économie Appliquée (ENSSEA). Depuis sa création, l’ENSSEA s’est affirmée comme un pôle d’excellence dans la formation des cadres supérieurs dans les domaines de la statistique, de l’économie, et de l'analyse des données en Algérie, Afrique et au-delà.</span></p>
        <p className={styles.paragraph}><span>Dans un monde où les données et leur analyse sont devenues des ressources stratégiques pour la prise de décisions, notre mission est plus pertinente que jamais. Nous nous engageons à former des cadres de haut niveau, capables de répondre aux besoins de nos sociétés et d’accompagner les transformations économiques, sociales et technologiques.</span></p>
        <p className={styles.paragraph}><span>Notre mission est claire : offrir une formation de qualité qui allie rigueur académique et savoir-faire pratique, tout en restant à l’écoute des besoins du marché du travail. Grâce à notre réseau d’anciens élèves, nos partenariats internationaux et notre corps professoral hautement qualifié, l’ENSSEA continue d’asseoir sa réputation d’excellence.</span></p>
        <p className={styles.paragraph}><span>Chers étudiants, vous êtes au cœur de notre mission. Nous nous engageons à vous accompagner dans votre parcours, à vous fournir les outils nécessaires pour devenir des leaders dans vos domaines respectifs. À travers des stages, des échanges internationaux et des projets de recherche, nous veillons à ce que vous sortiez de notre école prêts à faire face aux défis du monde moderne.</span></p>
        <p className={styles.paragraph}><span>L’ENSSEA, en partenariat avec de nombreuses institutions internationales, offre un cadre académique de qualité. Nos programmes sont conçus pour doter les étudiants des compétences techniques, analytiques et managériales indispensables à leur insertion dans des environnements complexes et dynamiques. Nous encourageons également la recherche et l’innovation afin de proposer des solutions adaptées aux défis actuels.</span></p>
        <p className={styles.paragraph}><span>Je suis convaincu que l'ENSSEA continuera à jouer un rôle clé dans la promotion du développement en Afrique et ailleurs, à travers l'expertise de ses diplômés. Ensemble, nous construirons un avenir où l’analyse des données et la rigueur scientifique seront au cœur du progrès.</span></p>
        <p className={styles.paragraph}><span>Ensemble, nous continuerons à faire de l’ENSSEA une institution de référence, pionnière dans la formation des statisticiens et économistes de demain.</span></p>
        <p className={styles.paragraph}><span>Je vous souhaite à tous beaucoup de succès dans vos projets et une carrière prometteuse. Merci à vous tous pour votre engagement et votre confiance en notre école.</span></p>

        <p className={styles.signature}>Pr. Toumache Rachid<br />Directeur de l'ENSSEA</p>
      </Section>
      <Footer />
    </>
  );
}

export default MotDirecteur;
