import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'gatsby';
import { GiFruitTree } from 'react-icons/gi';
import {  FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './button';
import { IconContext } from 'react-icons/lib';

export default function Navbar() {
  // State~
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // Functions =>
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton);

  useEffect(() => {
    showButton();
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div className="navbar-container container">

            {/* Logo & name [GrowHub] */}
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
              <GiFruitTree className="navbar-icon"/>
              GrowHub
            </Link>

            {/* Menu-Icon Bar / X */}
            <div className="menu-icon" onClick={() => handleClick()}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            {/* Menu Names / Mobile (slide) */}
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                  Productos
                </Link>
              </li>
              <li className="nav-bar">
                {button ? 
                (
                  <Link to='/signup' className="btn-link">
                    <Button buttonStyle="btn--outline">
                      REGISTRATE
                    </Button>
                  </Link>
                )
                :
                (
                  <Link to='/signup' className="btn-link" onClick={closeMobileMenu}>
                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>REGISTRATE</Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>  
    </>
  )
}