import React from 'react';
import { t } from '../hooks/lang';
import Skill from '../components/Skill';
import { Element } from 'react-scroll';
import { headerNav } from '../data/content';
import AnimText from '../components/animation/AnimText';
import { skills } from '../data/content';

const SkillsPage = () => {
  return (
    <Element name={headerNav.SKILLS}>
      <div className='skills-page page'>
        <div className="skills-page_text-container">
          <div className='icon--star' />
            <div className="skills-page_text-container_subtitle">
              {t('skillsAndTools')}
            </div>
            <p className="skills-page_text-container_title">
              {t('skills')}
            </p>
        </div>
        <div className="skills-page_skills">
          {skills.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default SkillsPage;
