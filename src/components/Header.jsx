import React, { useState } from 'react';
import { Link } from 'react-scroll';
import IconLink from './Link';
import { headerNav } from '../data/content';
import MenuMob from './MenuMob';
import headerImg from '../images/header-logo.png';

const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const toggleMenu = () => {
    setMenuIsVisible((prevMenuState) => !prevMenuState)
  }

  return (
    <header className='header'>
      <button
        className='header_menu-btn hidden-desktop'
        onClick={toggleMenu}
      > </button>
      
      {menuIsVisible && (
        <MenuMob setMenuIsVisible={setMenuIsVisible} />
      )}
      {headerImg && (
        <Link
          to={'top'}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img
            className='header_image hidden-mobile pointer'
            src={headerImg}
            alt='compluter logo'
          />
        </Link>
      )}
      <nav className='header_nav hidden-mobile'>
        <ul className='header_nav_ul'>
          {Object.values(headerNav).map((navItem) => (
            <li key={navItem}>
              <Link
                className='header_nav_ul_link'
                activeClass="active"
                to={navItem}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {navItem}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='header_btns'>
        <IconLink
          href='https://github.com/vasylevskaya'
          title='Github'
          text='Github'
          linkClass=''
          iconClass='icon--github'
        />
      </div>
    </header>
  );
};

export default Header;
