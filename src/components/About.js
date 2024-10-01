import React from 'react';

import lnn from '../images/lnn.jpg';
import Title from './Title';

function About() {
  return (
    <section className='section' id='about'>
      {/* <Title title='about' subTitle='us' /> */}
      <Title title='about' />
      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={lnn} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>📍bothell, WA</h3>

          <p>
            Armonia/1ra -
            <a href='https://www.instagram.com/jgomezz.07/'> @jgomezz.07</a>
          </p>

          <p>
            Requinto -
            <a href='https://www.instagram.com/eleazar1k/'> @eleazark1k</a>
          </p>
          <p>
            Bajo/2da -
            <a href='https://www.instagram.com/cmpa_huape/'> @cmpa_huape</a>
          </p>
          <a href='#shows' className='btn'>
            shows
          </a>
        </article>
      </div>
    </section>
  );
}

export default About;
