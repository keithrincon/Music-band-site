import React from 'react';
import { socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

function Footer() {
  return (
    <footer className='section footer'>
      <PageLinks parentClass='footer-links' itemClass='footer-link' />

      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass='footer-icon' />;
        })}
      </ul>
      <p className='copyright'>
        La Nueva Nuevedad &copy;
        <span id='date'>{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}

export default Footer;
