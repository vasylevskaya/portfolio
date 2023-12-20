import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Element } from 'react-scroll';
import { headerNav } from '../data/content';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { projectsContent } from '../data/content';
import Project from '../components/Project';
import AnimText from '../components/animation/AnimText';

const ProjectsPage = () => {
  return (
    <Element name={headerNav.PROJECTS}>
      <div className='projects-page page'>
        <AnimText>
          <h2 className='page_title'>Projects</h2>
        </AnimText>
        <div className='projects-page_projects'>
          <Carousel transitionTime={400} showThumbs={false}>
            {projectsContent.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </Carousel>
          
        </div>
      </div>
    </Element>
  );
};

export default ProjectsPage;
