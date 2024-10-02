import React, { useEffect, useState } from 'react';
import { socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLinks, setShowLinks] = useState(false); // State for toggling the social icons

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLinks = () => {
    setShowLinks((prev) => !prev); // Toggle the visibility of social icons
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className='nav-center'>
        <div className='nav-header'>
          <h2>Novedad</h2>
          <button type='button' className='follow-us' onClick={toggleLinks}>
            Follow Us
          </button>
        </div>

        <PageLinks parentClass='nav-links' itemClass='nav-link' />

        {/* Show social icons only when showLinks is true */}
        <ul className={`nav-icons ${showLinks ? 'show-icons' : ''}`}>
          {socialLinks.map((link) => (
            <SocialLink key={link.id} {...link} itemClass='nav-icon' />
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
