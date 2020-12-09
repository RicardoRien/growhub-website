import React from 'react';
import { Spring } from 'react-spring/renderprops';
import './HeroSection.css';
import { Button } from '../Button/Button';
import { Link } from 'gatsby';

function HeroSection ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      {/* Background Color */}
      <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
        
      {/* Container: Row & Column */}
        <div className='container'>
          <div className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            {/* Column */}
            <div className='col'>
              {/* Toplin & Header */}
              <div className='home__hero-text-wrapper'>

                <Spring from={{ opacity:0 }} to={{ opacity:1 }} config={{ delay: 900, duration: 1100 }} >
                  {props => (
                    <div style={props}>
                      <div className='top-line'>{topLine}</div>
                      <h1 className={lightText ? 'heading' : 'heading dark'}>
                        {headline}
                      </h1>
                      {/* Description */}
                      <p className={ lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark' }>
                        {description}
                      </p>
                      {/* Button */}
                      <Link to='/signup'>
                        <Button buttonStyle='btn--ghost' buttonColor='scarlet' buttonSize='btn--wide' >
                          {buttonLabel}
                        </Button>
                      </Link>
                    </div>
                  )}
                </Spring>

              </div>
              
            </div>

            {/* Image */}
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' loading="lazy"/>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
export default HeroSection