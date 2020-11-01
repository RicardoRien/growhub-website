import React from 'react';
import './footer.css';
import { Button } from './button';
import { Link } from 'gatsby';
import {
  FaGithub,
  FaTelegram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { GiFruitTree } from 'react-icons/gi';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        {/* Header */}
        <p className='footer-subscription-heading'>
          Suscribete y te enviaremos las actualizaciones de nuestro sofware y datos importantes para ti.
        </p>
        {/* Sub-Header */}
        <p className='footer-subscription-text'>
          Tranquilo, no te enviaremos spam.
        </p>
        {/* Input */}
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Persona@mail.com'
            />
            <Button buttonStyle='btn--outline'>Suscribirse</Button>
          </form>
        </div>
      </section>
      {/* Footer Links */}
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Nosotros</h2>
            <Link to='/sign-up'>Cómo funciona</Link>
            <Link to='/'>Testimonios</Link>
            <Link to='/'>Inversores</Link>
            <Link to='/'>Políticas de servicio</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contactanos</h2>
            <Link to='/'>Contacto</Link>
            <Link to='/'>Soporte</Link>
            <Link to='/'>Patrocinadores</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Ver Videos</Link>
            <Link to='/'>Embajadores</Link>
            <Link to='/'>Agencia</Link>
            <Link to='/'>Afiliados</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Redes</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      {/* Social Media Icons & Logo Name */}
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              {/* Mame */}
              <GiFruitTree className='navbar-icon' />
              GrowHub
            </Link>
          </div>
          {/* Mame */}
          <small className='website-rights'>GROWHUB © 2020</small>
          {/* Social Icons */}
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Github'
            >
              <FaGithub />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Telegram'
            >
              <FaTelegram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                ''
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;