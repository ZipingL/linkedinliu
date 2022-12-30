import React from 'react';
import About from './Sections/About';
import Activity from './Sections/Activity';
import Analytics from './Sections/Analytics';
import Education from './Sections/Education';
import Experience from './Sections/Experience';
import Intro from './Sections/Intro';
import Resources from './Sections/Resources';

import './styles/main.css'


export  const Main = ()  => {

    return (
    <>
        <main id="main" className="scaffold-layout__main">

         <Intro />

         
         

         <Analytics />
         
         
         <Resources />

         


         
         
        <Activity />

      <About />

         
   
      <Experience />

      <Education />
    

      </main>

  
    </>
    );
    
    }
    export default Main;