import React from 'react';
import { Button } from '../Button/Button';
import './Pricing.css';
import { HiSun, HiOutlineLightBulb, HiOutlineGlobe } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'gatsby';

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Precios</h1>
          <div className='pricing__container'>
            <Link to='/signup' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <HiSun />
                </div>
                <h3>Inicial</h3>
                <h4>$4.99</h4>
                <p>por mes</p>
                <ul className='pricing__container-features'>
                  <li>Estadísticas</li>
                  <li>Soporte Técnico</li>
                  <li>Chat Disponible</li>
                </ul>
                <Button buttonStyle='btn--ghost' buttonColor='green' buttonSize='btn--wide'>
                  Elige un Plan
                </Button>
              </div>
            </Link>
            <Link to='/signup' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <HiOutlineLightBulb />
                </div>
                <h3>Intermedio</h3>
                <h4>$9.99</h4>
                <p>por mes</p>
                <ul className='pricing__container-features'>
                  <li>Actualización Exlusiva</li>
                  <li>Chat con Expertos</li>
                  <li>PDF con Resultados</li>
                </ul>
                <Button buttonStyle='btn--ghost' buttonSize='btn--wide' buttonColor='yellow'>
                  Elige un Plan
                </Button>
              </div>
            </Link>
            <Link to='/signup' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <HiOutlineGlobe />
                </div>
                <h3>Maestro</h3>
                <h4>$14.99</h4>
                <p>por mes</p>
                <ul className='pricing__container-features'>
                  <li>Expertos Presenciales</li>
                  <li>Abono y Tutoriales a Medida</li>
                  <li>Software Único Para Ti</li>
                </ul>
                <Button buttonStyle='btn--ghost' buttonColor='green' buttonSize='btn--wide'>
                  Elige un Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;