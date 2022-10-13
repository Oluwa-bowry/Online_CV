import React from 'react';
import Project from './Project';

//import Progressbar from 'react-bootstrap/ProgressBar';

import Skills from './Skills';
import Design from './Design';
import Blog from './Blog';

export default function About () {
  return (
    <section id="about" className=" big-teal display-block">
      <div className="flex flex-wrap">
          <div className="flex sm: w-2/3 h-1/4 p-2 item center container">
            <Skills />        
          </div>
          <div className="flex sm: w-1/3 h-1/4 p-2 item center container">
            <Design />   
          </div>
      </div>    

      <div className=" display-block  p-2 container">
        <Project  />
      </div>
      <div className=" display-block p-2 item center container">
        <Blog  />
      </div>
    </section>
  )
}