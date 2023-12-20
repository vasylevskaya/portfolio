import React from 'react';

const Skill = ({ skill }) => {
  return (
    <div className={`skills-page_skills_skill skill--${skill.class}`}>
      <div className='skills-page_skills_skill_icon'> </div>
      <h4 className='skills-page_skills_skill_title'>
        {skill.title}
      </h4>
    </div>
  );
};

export default Skill;
