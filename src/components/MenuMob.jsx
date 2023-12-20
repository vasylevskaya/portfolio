import React from 'react';
import { Link } from 'react-scroll';
import { headerNav } from '../data/content';
import AnimText from './animation/AnimText';

function MenuMob({ setMenuIsVisible }) {
  const closeMenu = () => {
    setMenuIsVisible(false)
  }

  return (
    <div className='menu-mob'>
      <button
        className='menu-mob_btn-close'
        type="button"
        onClick={closeMenu}
      > </button>
      <ul className='menu-mob_nav'>
        {Object.values(headerNav).map((navItem) => (
          <AnimText>
            <li className='menu-mob_nav_item' key={navItem}>
              <Link
                className='header_nav_ul_link hover-text'
                activeClass="active"
                to={navItem}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
              >
                {navItem}
              </Link>
            </li>
          </AnimText>
        ))}
      </ul>
    </div>
  );
}

export default MenuMob;
