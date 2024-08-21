import React from 'react';
import AnimScale from './animation/AnimScale';

const Project = ({ project }) => {
  const { imgClass, title, description, techStack, link } = project

  return (
    <div className='project'>
      {project.imgClass && (
        <AnimScale>
          <div className={`project_img ${imgClass ?? ''}`} />
        </AnimScale>
      )}
      <div className='project_title-container'>
        {title && (
          <p className='project_title'>{title}</p>
        )}
        {link && (
          <a
            href={link}
            target='_blank'
            className='project_link'
          >
            <div className='icon--link'/>
          </a>
        )}
      </div>

      {description && (
        <p className='project_description'>
          {description}
        </p>
      )}

      <div className='project_tech-stack'>
        {techStack.map((tool) => (
            <div
              key={tool}
              className={`project_tech-stack_tool`}
            >
              <p>{tool}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
