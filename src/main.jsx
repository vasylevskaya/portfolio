import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ScrollToTop from './components/SrcollToTop';

import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RecoilRoot>
        <div className='app'>
          {/* <div className='bg bg-1'></div>
          <div className='bg bg-2'></div> */}
          <Header />
          <HomePage />
          <Footer />
          <ScrollToTop />
        </div>
    </RecoilRoot>
  </React.StrictMode>
);
