import React from 'react';
import TimelineListItem from './TimelineListItem';

const TimelineList = ({
  title,
  timelineContent
}) => {
  return (
    <div className='timeline-container'>
      <p className='timeline-container_title text-gradient'>
        {title}
      </p>
      <div className='timeline'>
        {timelineContent.map((item) => (
          <TimelineListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TimelineList;
