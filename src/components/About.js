import React from 'react';

//import Progressbar from 'react-bootstrap/ProgressBar';

import Skills from './Skills';
import Design from './Design';
import Details from './Detail';

export default function About () {
  return (
    <section id="about" className=" big-teal flex flex-wrap sm: display{block}">
      <div className="flex w-1/4 h-1/3 item center container">
        <Details />
      </div>
      <div className="flex w-1/3 h-1/4 item center container">
        <Skills />        
      </div>
      <div className="flex w-1/3 h-1/4 item center container">
        <Design />   
      </div>
    </section>
  )
}