import React from 'react';
import { Html, useProgress } from "@react-three/drei";

import ComputersCanvas from '../components/Computers';
import AnimText from '../components/animation/AnimText';

const MainPage = () => {
  const { progress } = useProgress();

  return (
    <div className='page main-page'>
      <div className='main-page_text-container'>
        <AnimText>
          <h1 className="main-page_text-container_title">
            Hi, I'm <span className="color-blue">Olha</span>
          </h1>
        </AnimText>
        <AnimText>
          <h2 className="main-page_text-container_subtitle">
            <span className="color-blue">Web</span> Developer<br/>
          </h2>
        </AnimText>
      </div>
      <div className='main-page_canvas'>
        <ComputersCanvas />
        {progress === 100 && (
          <div className='hint-container'>
            <div className='drag-icon'> </div>
            <p className='hint-container_text'>
              ROTATE IT!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
