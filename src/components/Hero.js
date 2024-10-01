import React from 'react';
import musica from '../images/musica.mp4';

function Hero() {
  return (
    <section className='hero' id='about'>
      {/* Video background */}
      <video className='hero-video' autoPlay muted loop>
        <source src={musica} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      {/* Hero content */}
      <div className='hero-banner'>
        {/* <h1>la nueva novedad</h1> */}
        <h3>Listos pa cualquier evento</h3>
        <a href='#quotes' className='btn hero-btn'>
          quotes
        </a>
      </div>
    </section>
  );
}

export default Hero;
