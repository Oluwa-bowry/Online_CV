import React from 'react';
import {projects} from '../data';

export default function Project () {
  return (
    <div>
      <div className="container  text-left  ">
         <h5 className="bg-white p-4 font-bold text-gray-700 text-base uppercase mb-4 rounded-lg shadow-lg">Projects ({projects.length})</h5>
      
      <div className="container">
          {projects.map((project) => (
            <div className="bg-white p-4 m-4   shadow-lg rounded-lg sm: flex-wrap space-x-4 lg:flex break-word" key={project.title}>
                <img src ={project.image} alt="alt" className="rounded-lg justify-left w-full lg:w-1/4"/>
                <div className='w-full lg: w-2/4 '>
                  <small className="text-xs text-gray-400 ">{project.programmingLanguage}</small>
                  <h3 className="text-gray-600 text-lg font-bold my-4 ">{project.title}</h3>
                  <p className="text-sm text-gray-500 pb-6 ">{project.description}</p>

                  <div className=" flex space-x-4"> <a href={project.demo}><button className=" bg-blue-500 p-2  text-white text-sm rounded-lg border-blue-700">Demo</button></a>
                  <a href={project.code}>  <button className=" bg-white text-blue-500 text-sm p-2 rounded-lg border-2 border-blue-500">Code</button></a>
                  </div>
                </div>
            </div>          
          ))}        
        </div>
      </div>
    </div>
  )
}