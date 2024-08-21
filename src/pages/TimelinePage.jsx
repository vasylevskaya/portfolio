import React, { useEffect } from 'react';
import { t } from '../hooks/lang';
import { Element } from 'react-scroll';
import { headerNav, experienceTimeline, educationTimeline } from '../data/content';
import TimelineList from '../components/TinelineList';

const TimelinePage = () => {
  console.log(window.scrollY, window);
  return (
    <div className='timeline-page page'>
      <Element name={headerNav.EXPERIENCE}>
        <TimelineList
          title={t('experience')}
          timelineContent={experienceTimeline}
        />
      </Element>
      <Element name={headerNav.EDUCATION}>
        <TimelineList
          title={t('education')}
          timelineContent={educationTimeline}
        />
      </Element>
    </div>
  );
};

export default TimelinePage;
