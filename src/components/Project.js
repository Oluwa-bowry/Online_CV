import React from 'react';
import {projects} from '../data';

export default function Project () {
  return (
    <div>
      <div className="container m-4 p-2 text-left w-full ">
         <h5 className="bg-white p-4 mb-4 rounded-lg shadow-lg">Projects ({projects.length})</h5>
      
      <div className="container">
          {projects.map((project) => (
            <div className="container bg-white justify-center p-4 mb-4 overflow-hidden  shadow-lg rounded-lg flex break-word" key={project.id}>
                <div className='w-1/4 mr-4'><img src ={project.image} className="rounded-lg w-full justify-left items-left"/></div>
                <div className='w-1/2 ml-2'>
                  <small className="text-xs text-gray-400">{project.programmingLanguage}</small>
                  <h3 className="text-gray-600 text-lg font-bold my-4">{project.title}</h3>
                  <p className="text-sm text-gray-500 pb-6">{project.description}</p>

                  <div className=" flex"> <a href={project.demo}><button class="my-4 bg-blue-500 py-2 px-8 text-white text-sm rounded-lg border-blue-700">Demo</button></a>
                  <a href={project.code}>  <button class="m-4 py-2 px-8 bg-white text-blue-500 text-sm rounded-lg border-2 border-blue-500">Code</button></a>
                  </div>
                </div>
            </div>          
          ))}        
        </div>
      </div>
    </div>
  )
}