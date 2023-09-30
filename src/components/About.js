import React, {useState} from 'react';
import Project from './Project';
import {blogs} from '../data.js'

//import Progressbar from 'react-bootstrap/ProgressBar';

import Skills from './Skills';
import Design from './Design';
import Blog from './Blog';

export default function About () {
  const [questions, setQuestions] = useState(blogs);
  return (
    <section id="about" className=" big-teal display-block">
      <div className="lg:flex sm:flex-wrap">
          <div className="lg: w-2/3 h-1/4 p-2 item center container">
            <Skills />        
          </div>
          <div className="lg: w-1/3 h-1/4 p-2 item center container">
            <Design />   
          </div>
      </div>    

      <div className=" display-block  p-2 container">
        <Project  />
      </div>
      <div className=" display-block p-2 item center container">
      <h5 className="bg-white p-4 mb-4 rounded-lg shadow-lg">Blogs ({blogs.length})</h5>
      
        {questions.map((question) => (
          <Blog key={question.id} {...question}></Blog>
        ))}   
        </div>
    </section>
  )
}