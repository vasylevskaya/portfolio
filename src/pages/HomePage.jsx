import React from 'react';
import MainPage from './MainPage';
import TimelinePage from './TimelinePage';
import SkillsPage from './SkillsPage'
import ProjectsPage from './ProjectsPage'
import Background from '../components/Background/Background';

const HomePage = () => {
  return (
    <>
      <Background />
      <MainPage />
      <TimelinePage />
      <SkillsPage />
      <ProjectsPage />
    </>
  );
};

export default HomePage;
