import React , {Fragment, useState} from 'react';
import './App.scss';
import Header from './components/header/header.component';
import Banner from './components/banner/banner.component';
import About from './components/about/aboutcomponent';
import ServiceSection from './components/servicesection/servicesection.component';
import Education from './components/education/education.component';
import Portfolio from './components/portfolio/portfolio.component';
import Footer from './components/footer/footer.component';
;

//React 

function App() {
  return (
    <>
     <Header />
        <div className='content'>
          <div className='homepage-personal'>
              <Banner />
              <About />
              <ServiceSection />
              <Education />
              <Portfolio />
          </div>
        </div>
      <Footer/>
    </>
  );
}

export default App;
