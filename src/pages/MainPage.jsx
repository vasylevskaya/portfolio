import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { t } from '../hooks/lang';
import mainPhoto from '../images/portrait.png';

import AnimScale from '../components/animation/AnimScale';
import AnimText from '../components/animation/AnimText';
import Link from '../components/Link';

const MainPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 1); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Element name='top'>
      <div className={`page main-page ${isScrolled ? 'scrolled' : ''}`}>
        {mainPhoto && (
          <AnimScale>
            <img
              className='main-page_image'
              src={mainPhoto}
              alt='portrait'
            />
          </AnimScale>
        )}
        <div className='main-page_text-container'>
            <p className="main-page_text-container_title text-gradient">
              {t('olhaV')}
            </p>
            <p className="main-page_text-container_text">
              {t('mainPageDescription')}
            </p>
            <div className='flex gap-30 mt-20'>
              <Link
                href='mailto:vasylevska98@gmail.com'
                title='Send email'
                text='Email'
                linkClass=''
                iconClass='icon--email'
              />
              <Link
                href='https://www.linkedin.com/in/olha-vasylevska-74633a193/'
                title='Linkedin'
                text='Linkedin'
                linkClass=''
                iconClass='icon--linkedin'
              />
            </div>
        </div>
      </div>
    </Element>
  );
};

export default MainPage;
