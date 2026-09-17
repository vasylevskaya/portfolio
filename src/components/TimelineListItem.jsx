import React, { useState } from 'react';
import AnimText from '../components/animation/AnimText';
import { t } from '../hooks/lang';
import { Carousel } from 'react-responsive-carousel';

/** When false: projects stay visible and the collapse toggle is hidden. */
const projectsToggleEnabled = false;

const TimelineListItem = ({
  item
}) => {
  const [isOpened, setIsOpened] = useState(item.openedByDefault ?? true);
  const isExpanded = !projectsToggleEnabled || isOpened;

  const toggleTab = () => {
    if (!projectsToggleEnabled) return;
    setIsOpened(!isOpened);
  };

  return (
    <div
      className={`timeline_item ${isExpanded ? 'expanded' : ''}`}
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
            Array.isArray(item.description) ? (
              <ul className='description'>
                {item.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            ) : (
              <p className='description'>{item.description}</p>
            )
          )}
        </div>
        {item.techStack?.length > 0 && (
          <div className='project_tech-stack'>
            {item.techStack.map((tool) => (
              <div key={tool} className='project_tech-stack_tool'>
                <p>{tool}</p>
              </div>
            ))}
          </div>
        )}
        {projectsToggleEnabled && item.projects && (
          <div className='timeline_item_main_projects-toggle'>
            <button
              type='button'
              className={`timeline_item_main_projects-toggle_btn
                ${isOpened ? '' : 'collapsed'}
              `}
              onClick={toggleTab}
            >
              <p className='timeline_item_main_projects-toggle_btn_text'>
                {item.projectsTitle ?? t('projects')}
              </p>
              <div className="icon--arrow-up"></div>
            </button>
          </div>
        )}
      {item.projects && (
        <div className='timeline_item_collapsed'>
          {item.projects.map((project) => (
            <div
              key={project.title}
              className={`timeline_item_collapsed_project`}
            >
              {project.img && (
                <div className={`timeline_item_collapsed_project_img ${project.img}`} />
              )}
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
                {project.description && (
                  Array.isArray(project.description) ? (
                    <ul className='timeline_item_collapsed_project_description'>
                      {project.description.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className='timeline_item_collapsed_project_description'>
                      {project.description}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelineListItem;
