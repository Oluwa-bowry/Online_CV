import React from 'react';
import Project from './Project';

//import Progressbar from 'react-bootstrap/ProgressBar';

import Skills from './Skills';
import Design from './Design';


export default function About () {
  return (
    <section id="about" className=" big-teal display-block">
      <div className="flex flex-wrap">
          <div className="flex w-2/3 h-1/4 item center container">
            <Skills />        
          </div>
          <div className="flex w-1/3 h-1/4 item center container">
            <Design />   
          </div>
      </div>    

      <div className=" display-block item center container">
        <Project  />
      </div>
    </section>
  )
}