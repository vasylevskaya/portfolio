import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { headerNav } from '../data/content';
import MenuMob from './MenuMob';

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
      <nav className='header_nav hidden-mobile'>
        <ul className='header_nav_ul'>
          {Object.values(headerNav).map((navItem) => (
            <li key={navItem}>
              <Link
                className='header_nav_ul_link hover-text'
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
        <a
          className='header_btns_link header_btns_link--email'
          href="mailto:vasylevska98@gmail.com"
          title="Send email"
        >
          <div className='header_btns_link_content header_btns_link_content--email'> </div>
        </a>
        <a
          className='header_btns_link'
          href="https://www.linkedin.com/in/olha-vasylevska-74633a193/"
          title="Linkedin"
        >
          <div className='header_btns_link_content header_btns_link_content--linkedin'> </div>
        </a>
        <a
          className='header_btns_link'
          href="https://github.com/vasylevskaya"
          title="Github"
        >
          <div className='header_btns_link_content header_btns_link_content--github'> </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
