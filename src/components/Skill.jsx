import React from 'react';
import AnimScale from './animation/AnimScale';

const Skill = ({ skill }) => {
  return (
    <div className='skills-page_skills_skill'>
      <p className='skills-page_skills_skill_title'>
        {skill.title}
      </p>
      <ul className='skills-page_skills_skill_list'>
        {skill.list.map((listItem) => (
          
          <li
            key={listItem}
            className='skills-page_skills_skill_list_item'
          >
            {listItem}
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default Skill;
