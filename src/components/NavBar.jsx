import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({burgerMenu }) {
    const [expandedMenus, setExpandedMenus] = useState({});

    const toggleMenu = (menu) => {
        setExpandedMenus((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    return (
        <nav className={` ${burgerMenu && "active"}`}>
        <ul>
            <li className="navItem"><NavLink to ='/'>Accueil</NavLink></li>
            <li className="navItem"><span onClick={() => toggleMenu('aPropos')}>A Propos</span>
            <ul className={`menu ${expandedMenus['aPropos'] ? 'expand' : ''}`}>
                    <li><NavLink to =''>Historique</NavLink></li>
                    <li><NavLink to ='/MotDirecteur'>Mot du Directeur</NavLink></li>
                    <li><NavLink to =''>Structure de l'école</NavLink></li>
                    <li><NavLink to =''>Assurance Qualité</NavLink></li>
                    <li><NavLink to =''>Textes Règlementaires</NavLink></li>
                    <li><NavLink to =''>Règlement Intérieur</NavLink></li>
            </ul>
            </li>
            <li className="navItem"><span  onClick={() => toggleMenu('formation')}>Formation</span>
            <ul className={`menu ${expandedMenus['formation'] ? 'expand' : ''}`}>
                    <li><NavLink to =''>Les Offres de formation</NavLink></li>
                    <li><span  onClick={() => toggleMenu('classPrep')}>Département des class Préparatoires</span>
                        <ul className={`sub-menu ${expandedMenus['classPrep'] ? 'expand' : ''}`} >
                            <li><span onClick={() => toggleMenu('premierAPrep')}>1ere Année préparatoires</span>
                                <ul className={`last-menu ${expandedMenus['premierAPrep'] ? 'expand' : ''}`}>
                                    <li><NavLink to =''>Programme Pédagogique</NavLink></li>
                                    <li><NavLink to =''>Emploi du temps </NavLink></li>
                                    <li><NavLink to =''>Planning des Examens</NavLink></li>
                                </ul>
                            </li>
                            <li><span onClick={() => toggleMenu('deuxiemPrep')}>2ere Année préparatoires</span>
                                <ul className={`last-menu ${expandedMenus['deuxiemAPrep'] ? 'expand' : ''}`}>
                                    <li><NavLink to =''>Programme Pédagogique</NavLink></li>
                                    <li><NavLink to =''>Emploi du temps </NavLink></li>
                                    <li><NavLink to =''>Planning des Examens</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><span onClick={() => toggleMenu('dec')}>Département d'Enseignements Communs</span>
                        <ul className={`sub-menu ${expandedMenus['dec'] ? 'expand' : ''}`} >
                            <li><NavLink to =''>Programme Pédagoque</NavLink></li>
                            <li><NavLink to =''>Emploi du Temps</NavLink></li>
                            <li><NavLink to =''>Planning des Examens</NavLink></li>
                        </ul>
                    </li>
                    <li><span onClick={() => toggleMenu('dsae')}>Département de Statistique Appliquée et Econométrie</span>
                        <ul className={`sub-menu ${expandedMenus['dsae'] ? 'expand' : ''}`} >
                            <li><span onClick={() => toggleMenu('msa')}>Master en Statistique appliquées</span>
                                <ul className={`last-menu ${expandedMenus['msa'] ? 'expand' : ''}`}>
                                    <li><NavLink to =''>Programme Pédagogique</NavLink></li>
                                    <li><NavLink to =''>Emploi du temps </NavLink></li>
                                    <li><NavLink to =''>Planning des Examens</NavLink></li>
                                </ul>
                            </li>
                            <li><span onClick={() => toggleMenu('msds')}>Master en Statistique et Data Science</span>
                                <ul className={`last-menu ${expandedMenus['msds'] ? 'expand' : ''}`}>
                                    <li><NavLink to =''>Programme Pédagogique</NavLink></li>
                                    <li><NavLink to =''>Emploi du temps </NavLink></li>
                                    <li><NavLink to =''>Planning des Examens</NavLink></li>
                                </ul>
                            </li>
                            <li><span onClick={() => toggleMenu('mspss')}>Master en sciences de la population et statistique sociale</span>
                                <ul className={`last-menu ${expandedMenus['mspss'] ? 'expand' : ''}`}>
                                    <li><NavLink to =''>Programme Pédagogique</NavLink></li>
                                    <li><NavLink to =''>Emploi du temps </NavLink></li>
                                    <li><NavLink to =''>Planning des Examens</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><span onClick={() => toggleMenu('deqp')}>Département d'Economie Quantitative et Prospective</span>
                        <ul className={`sub-menu ${expandedMenus['deqp'] ? 'expand' : ''}`} >
                            <li><span onClick={() => toggleMenu('meap')}>Master en Economie Appliquée et Prospective</span>
                                <ul className={`last-menu ${expandedMenus['meap'] ? 'expand' : ''}`}>
                                    <li><NavLink to =''>Programme Pédagogique</NavLink></li>
                                    <li><NavLink to =''>Emploi du temps </NavLink></li>
                                    <li><NavLink to =''>Planning des Examens</NavLink></li>
                                </ul>
                            </li>
                            <li><span onClick={() => toggleMenu('mspe')}>Master en Statistique et prospective économique</span>
                                <ul className={`last-menu ${expandedMenus['mspe'] ? 'expand' : ''}`}>
                                    <li><NavLink to =''>Programme Pédagogique</NavLink></li>
                                    <li><NavLink to =''>Emploi du temps </NavLink></li>
                                    <li><NavLink to =''>Planning des Examens</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><span onClick={() => toggleMenu('dfma')}>Département de Finance de Marcher et Actuariat</span>
                        <ul className={`sub-menu ${expandedMenus['dfma'] ? 'expand' : ''}`} >
                            <li><span onClick={() => toggleMenu('mfa')}>Master en Finance et Actuariat</span>
                                <ul className={`last-menu ${expandedMenus['mfa'] ? 'expand' : ''}`}>
                                    <li><NavLink to =''>Programme Pédagogique</NavLink></li>
                                    <li><NavLink to =''>Emploi du temps </NavLink></li>
                                    <li><NavLink to =''>Planning des Examens</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><NavLink to =''>Guide de mémoire</NavLink></li>
                    <li><NavLink to =''>Stage</NavLink></li>
                </ul>
            </li>
            <li className="navItem"><span onClick={() => toggleMenu('gr&r')}>Post-Graduation & Recherche</span>
                <ul className={`menu ${expandedMenus['gr&r'] ? 'expand' : ''}`}>
                    <li><NavLink to =''>Formation Doctorale</NavLink></li>
                    <li><NavLink to =''>Le Conseil Scientifique de l'Ecole</NavLink></li>
                    <li><NavLink to =''>Les Comités Scientifiques Des Départements</NavLink></li>
                    <li><span onClick={() => toggleMenu('lr')}>Laboratoire de Recherche</span>
                        <ul className={`sub-menu ${expandedMenus['lr'] ? 'expand' : ''}`} >
                            <li><NavLink to =''>Laboratoire de Statistique Appliquée (LASAP)</NavLink></li>
                            <li><NavLink to =''>Laboratoire d'Economie Quantitative Appliquée au développement (LEQAD)</NavLink></li>
                            <li><NavLink to =''>Laboratoire de Modélisation des Phénomènes Stochastiques (LAMOPS)</NavLink></li>
                            <li><NavLink to =''>Laboratoire d'Intégration Régionale et Union Européenne (LIRUE)</NavLink></li>
                            <li><NavLink to =''>Laboratoire de Gouvernance, Economie Institutionnelle et Croissance Durable</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to =''>Projet PRFU</NavLink></li>
                    <li><NavLink to =''>Manifestations scientifiques</NavLink></li>
                    <li><span onClick={() => toggleMenu('rs')}>Revues Scientifiques</span>
                        <ul className={`sub-menu ${expandedMenus['rs'] ? 'expand' : ''}`} >
                            <li><NavLink to =''>Revue d'économie et de statistique appliquée</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to =''>Textes Règlementaires</NavLink></li>
                </ul>
            </li>
            <li className="navItem"><span onClick={() => toggleMenu('relation')}>Relation Exterieures</span>
                <ul className={`menu ${expandedMenus['relation'] ? 'expand' : ''}`}>
                    <li><NavLink to =''>Présentation</NavLink></li>
                    <li><NavLink to =''>Coopération Nationale</NavLink></li>
                    <li><NavLink to =''>Coopération internationale</NavLink></li>
                    <li><NavLink to =''>Club scientifique</NavLink></li>
                    <li><NavLink to =''>Activité sportive culturelle</NavLink></li>
                    <li><NavLink to =''>Alumni</NavLink></li>
            </ul>
            </li>
            <li className="navItem"><NavLink to =''>Bibliothéque</NavLink></li>
            <li className="navItem"><a href="https://learning.enssea.edu.dz/" target="_blank">E-Learning</a></li>
            <li className="navItem"><NavLink to ='/Contact'>Contact</NavLink></li>
        </ul>
        <div className="searchbar">
            <input type="text" placeholder="Rechercher"/>
            <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>


        
    </nav>
    );
}

export default NavBar;
