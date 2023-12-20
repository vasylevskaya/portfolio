import React from 'react';
import AnimText from './animation/AnimText';

import Desk001 from '../images/projects/001-desk.png';
import Mob001 from '../images/projects/001-mob.png';
import Desk002 from '../images/projects/002-desk.png';
import Mob002 from '../images/projects/002-mob.png';
import Desk003 from '../images/projects/003-desk.png';
import Mob003 from '../images/projects/003-mob.png';
import Desk004 from '../images/projects/004-desk.png';
import Mob004 from '../images/projects/004-mob.png';
import Desk005 from '../images/projects/005-desk.png';
import Mob005 from '../images/projects/005-mob.png';
import Desk006 from '../images/projects/006-desk.png';
import Mob006 from '../images/projects/006-mob.png';
import Desk007 from '../images/projects/007-desk.png';
import Mob007 from '../images/projects/007-mob.png';
import Desk008 from '../images/projects/008-desk.png';
import Mob008 from '../images/projects/008-mob.png';
import Desk009 from '../images/projects/009-desk.png';
import Mob009 from '../images/projects/009-mob.png';
import Desk010 from '../images/projects/010-desk.png';
import Desk011 from '../images/projects/011-desk.png';

const getPictures = (id) => {
  switch (id) {
    case '001':
      return { desk: Desk001, mob: Mob001 };
    case '002':
      return { desk: Desk002, mob: Mob002 };
    case '003':
        return { desk: Desk003, mob: Mob003 };
    case '004':
      return { desk: Desk004, mob: Mob004 };
    case '005':
      return { desk: Desk005, mob: Mob005 };
    case '006':
      return { desk: Desk006, mob: Mob006 };
    case '007':
      return { desk: Desk007, mob: Mob007 };
    case '008':
      return { desk: Desk008, mob: Mob008 };
    case '009':
      return { desk: Desk009, mob: Mob009 };
    case '010':
      return { desk: Desk010, mob: null };
    case '011':
      return { desk: Desk011, mob: null };

    default:
      return { desk: null, mob: null }
  }
}

const Project = ({ project }) => {
  const { id, className, title, description, techStack } = project

  const { desk, mob } = getPictures(id)

  return (
    <div className={`project ${className}`}>
      <AnimText>
        <h3 className='project_title'>{title}</h3>
      </AnimText>
      <AnimText>
        <p className='project_description'>{description}</p>
      </AnimText>

      <AnimText>
      <div className='project_tech-stack'>
        {techStack.map((tool) => (
            <div
              key={tool.title}
              className={`project_tech-stack_tool ${tool.class}`}
            >
              <p>{tool.title}</p>
            </div>
        ))}
      </div>
      </AnimText>

      <AnimText>
      <div className='project_images'>
        {desk && (
          <img
            className='project_images_img project_images_img-desktop'
            src={desk}
            alt='desktop screenshot'
          />
        )}
        {mob && (
          <img
            className='project_images_img project_images_img-mobile'
            src={mob}
            alt='mobile screenshot'
          />
        )}
      </div>
      </AnimText>

      <AnimText>
      <p>
        *Name and logo cannot be displayed out of respect for client
        confidentiality and privacy.
      </p>
      </AnimText>
    </div>
  );
};

export default Project;
