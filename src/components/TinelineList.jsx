import React from 'react';
import TimelineListItem from './TimelineListItem';
import AnimScale from './animation/AnimScale';

const TimelineList = ({
  title,
  timelineContent
}) => {
  return (
    <div className='timeline-container'>
      <p className='timeline-container_title'>{title}</p>
        <div className='timeline'>
          {timelineContent.map((item) => (
            <AnimScale>
              <TimelineListItem key={item.id} item={item} />
            </AnimScale>
          ))}
        </div>
    </div>
  );
};

export default TimelineList;
