import React from 'react';
import { t } from '../hooks/lang';
import Carousel from '../components/Carousel/Carousel';
import { Element } from 'react-scroll';
import { headerNav } from '../data/content';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { petProjects } from '../data/content';
import Project from '../components/Project';
import AnimText from '../components/animation/AnimText';

const ProjectsPage = () => {

  return (
    <Element name={headerNav.PROJECTS}>
      <div className='projects-page page'>
        <div className='projects-page_carousel'>
          
          <Carousel items={petProjects.map((project) => <Project project={project} />)} />
        </div>
        <div className="projects-page_text-container">
          <div className='icon--star' />
          <AnimText>
            <div className="projects-page_text-container_subtitle">
              {t('portfolio')}
            </div>
          </AnimText>
          <AnimText>
            <p className="projects-page_text-container_title">
              {t('projects')}
            </p>
          </AnimText>
          <AnimText>
            <p className="projects-page_text-container_text">
              {t('petProjectsToDemonstrate')}
            </p>
          </AnimText>
        </div>
      </div>
    </Element>
  );
};

export default ProjectsPage;
