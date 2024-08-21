import React, { useState } from 'react';
import AnimText from '../components/animation/AnimText';
import { t } from '../hooks/lang';

const TimelineListItem = ({
  item
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleTab = () => {
    setIsOpened(!isOpened);
  }

  return (
    <div
      className={`timeline_item ${isOpened ? 'expanded' : ''}`}
    >
      <div className='timeline_item_main'>
        <p className='date'>{item.date}</p>
        <div className='flex-column'>
          <p className='title'>{item.title}</p>
          <p className='subtitle'>{item.subtitle}</p>
          {item.content && (
            <ul className='timeline_item_main_responsibilities-list'>
              {item.content.map((contentItem) => (
                <li key={contentItem}>{contentItem}</li>
              ))}
            </ul>
          )}
        </div>
        {item.projects && (
          <div className='timeline_item_main_projects-toggle'>
            <p className='timeline_item_main_projects-toggle_title'>
              {item.projectsTitle ?? t('projects')}
            </p>
            <button
              className={`timeline_item_main_projects-toggle_btn
                ${isOpened ? '' : 'collapsed'}
              `}
              onClick={() => toggleTab(item.id)}
            >
              <div className="icon--arrow-up"></div>
            </button>
          </div>
        )}
      </div>
      {item.projects && (
        <div className='timeline_item_collapsed'>
          {item.projects.map((project) => (
            <div
              key={project.title}
              className={`timeline_item_collapsed_project ${project.img}`}
            >
              <div className='timeline_item_collapsed_project_overlay flex-column'>
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
