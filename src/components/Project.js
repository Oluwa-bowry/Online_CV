import React from 'react';
import {projects} from '../data';

export default function Project () {
  return (
    <div>
      <div className="container m-4 p-2 text-left w-full ">
         <h5 className="bg-white p-4 mb-4 rounded-lg shadow-lg">Projects ({projects.length})</h5>
      
      <div className="container">
          {projects.map((project) => (
            <div className="container bg-white justify-center p-4 mb-4 overflow-hidden items-center shadow-lg rounded-lg break-word" key={project.id}>
                <small>{project.programmingLanguage}</small>
                <h4>{project.title}</h4>
                <small>{project.description}</small>
            </div>          
          ))}        
        </div>
      </div>
    </div>
  )
}