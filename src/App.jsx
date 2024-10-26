import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import { useState } from 'react';
import './assets/fontawesome-free-6.6.0-web/css/all.min.css';

function App() {
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
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );


}

export default App;
