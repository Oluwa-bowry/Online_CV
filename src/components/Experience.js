
import React from 'react';
import {experiences} from "../data";

export default function Experience() {
  return (
    <div className="bg-white overflow-hidden justify-center shadow-lg items-center rounded-lg break-word w-full m-4 p-4 h-1/3 display-block">
      <h3 className="text-gray-400 text-lg font-bold">Experience</h3>
      <div className="my-2">
        {experiences.map((experience) =>(
          <div className='display-block p-3' key={experience}>
              <small>{experience.date}</small>
               <h5 className='font-bold'>{experience.title}</h5>
               <small className='text-gray-500'> {experience.description}</small>              
          </div>
        ))}
        Lenght of Experience:
        {experiences.length}
      </div>

    </div>
  )
}