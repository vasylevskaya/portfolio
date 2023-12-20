import React from 'react';
import SkillsPage from './SkillsPage'
import ProjectsPage from './ProjectsPage'
import MainPage from './MainPage';
import AboutPage from './AboutPage';

const HomePage = () => {
  return (
    <>
      <MainPage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
    </>
  );
};

export default HomePage;
