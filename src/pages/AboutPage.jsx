import React from 'react';
import { motion } from "framer-motion";
import { Element } from 'react-scroll';
import { headerNav } from '../data/content';
import { aboutPageContent, aboutPagePoints } from '../data/content';
import AnimText from '../components/animation/AnimText';

const AboutPage = () => {
  return (
    <Element name={headerNav.ABOUT}>
      <div className='page about-page'>
        <AnimText>
          <h2 className='page_title'>Experience</h2>
        </AnimText>
        <div className='about-page_text-container'>
          {aboutPageContent.map((paragraph) =>
            <AnimText key={paragraph}>
              <p>{paragraph}</p>
            </AnimText>
          )}
        </div>
        <div className='about-page_points'>
          {aboutPagePoints.map((pointObject) => (
            <div key={pointObject.year} className='about-page_points_point'>
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.3
                }}
              >
                <div className='about-page_points_point_circle'>
                  <h3 className='about-page_points_point_circle_year'>
                    {pointObject.year}
                  </h3>
                </div>
              </motion.div>
              <ul className='about-page_points_point_list'>
                {pointObject.points.map((point) => (
                  <li key={point} className='about-page_points_point_list_li'>
                    <AnimText>{point}</AnimText>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default AboutPage;
