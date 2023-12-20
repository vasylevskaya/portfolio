import React from 'react';
import Skill from '../components/Skill';
import { Element } from 'react-scroll';
import { headerNav } from '../data/content';
import { techSkillsContent, softSkillsContent } from '../data/content';
import AnimText from '../components/animation/AnimText';

const SkillsPage = () => {
  return (
    <Element name={headerNav.SKILLS}>
      <div className='skills-page page'>
        <AnimText>
          <h2 className='page_title'>Tech skills</h2>
        </AnimText>
        <div className='skills-page_skills'>
          {techSkillsContent.map((skill) => (
            <AnimText key={skill.title}>
              <Skill skill={skill} />
            </AnimText>
          ))}
        </div>

        <AnimText>
          <h2 className='page_title'>Soft skills</h2>
        </AnimText>
        <div className='skills-page_skills'>
          {softSkillsContent.map((skill) => (
            <AnimText key={skill.title}>
              <Skill skill={skill} />
            </AnimText>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default SkillsPage;
