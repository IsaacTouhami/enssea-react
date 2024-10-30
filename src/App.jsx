import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Error from './pages/Error';
import { useState } from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import MotDirecteur from './pages/MotDirecteur';
import './assets/fontawesome-free-6.6.0-web/css/all.min.css';
import favicon from '/src/img/logo_enssea_oval-light.png'; // use it as a variable

function App() {
  document.title = "ENSSEA";
// change document tab logo
  const icon = document.querySelector('link[rel="icon"]');
  icon.href = favicon;


  

  const [darkLight, setDarkLight] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);

  function toggleDarkLight() {
    setDarkLight(prev => !prev);
  }

  function toggleBurgerMenu() {
    setBurgerMenu(prev => !prev);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home handleBurger={toggleBurgerMenu} burgerMenu={burgerMenu}  darkLight={darkLight} handleDarkLight={toggleDarkLight} />} />
        <Route path="/contact" element={<Contact handleBurger={toggleBurgerMenu} burgerMenu={burgerMenu}  darkLight={darkLight} handleDarkLight={toggleDarkLight}/>} />
        <Route path="/MotDirecteur" element={<MotDirecteur handleBurger={toggleBurgerMenu} burgerMenu={burgerMenu}  darkLight={darkLight} handleDarkLight={toggleDarkLight}></MotDirecteur>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );


}


export default App;
