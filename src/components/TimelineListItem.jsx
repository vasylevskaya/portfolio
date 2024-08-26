import React, { useState } from 'react';
import AnimText from '../components/animation/AnimText';
import { t } from '../hooks/lang';
import { Carousel } from 'react-responsive-carousel';

const TimelineListItem = ({
  item
}) => {
  const [isOpened, setIsOpened] = useState(true);

  const toggleTab = () => {
    setIsOpened(!isOpened);
  }

  return (
    <div
      className={`timeline_item ${isOpened ? 'expanded' : ''}`}
    >
        <div className='timeline_item_main'>
          {item.img && (
            <div className={`timeline_item_main_img ${item.img}`} /> 
          )}
          <div className='flex-column'>
            <p className='title'>{item.title}</p>
            {item.subtitle && (
              <p className='subtitle'>{item.subtitle}</p>
            )}
          </div>
          <p className='date'>{item.date}</p>
          {item.description && (
            <p className='description'>{item.description}</p>
          )}
        </div>
        {/* item.projects && (
          <div className='timeline_item_main_projects-toggle'>
            <button
              className={`timeline_item_main_projects-toggle_btn
                ${isOpened ? '' : 'collapsed'}
              `}
              onClick={() => toggleTab(item.id)}
            >
              <p className='timeline_item_main_projects-toggle_btn_text'>
                {item.projectsTitle ?? t('projects')}
              </p>
              <div className="icon--arrow-up"></div>
            </button>
          </div>
        ) */}
      {item.projects && (
        <div className='timeline_item_collapsed'>
          {item.projects.map((project) => (
            <div
              key={project.title}
              className={`timeline_item_collapsed_project`}
            >
              <div className={`timeline_item_collapsed_project_img ${project.img}`} />
              <div className='flex-column'>
                {!!project.title && (
                  <p className='timeline_item_collapsed_project_title'>
                    {project.title}
                  </p>
                )}
                {!!project.subtitle && (
                  <p className='timeline_item_collapsed_project_subtitle'>
                    {project.subtitle}
                  </p>
                )}
                <p className='timeline_item_collapsed_project_description'>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelineListItem;
