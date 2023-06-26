import React, { FC, useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import images from '../../constants/images';
import './Navbar.scss';

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show !== isScrolled) setIsScrolled(show);
    };

    document.addEventListener('scroll', handleScroll); 

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <nav className={`app__navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="app__navbar-logo">
        <a href="#about">
          <img src={images.gericht} alt="app__logo" />
        </a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu className="app__navbar-smallscreen__icon" color="#fff" fontSize={30} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineClose className="app__navbar-smallscreen__icon overlay__close" color="#fff" fontSize={27} onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#paranoia" onClick={() => setToggleMenu(false)}>Paranoia</a></li>
              <li><a href="#trailer" onClick={() => setToggleMenu(false)}>Trailer</a></li>
              <li><a href="#projectfear" onClick={() => setToggleMenu(false)}>Project Fear</a></li>
              <li><a href="#newsletter" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
