
import React from 'react';
import {experiences} from "../data";

export default function Experience() {
  return (
    <div className="bg-white overflow-hidden justify-center shadow-lg items-center rounded-lg break-word w-full m-4 p-4 h-1/3 display-block">
      <h3 className="text-gray-600 text-lg font-bold">Experience</h3>
      <div className="my-2">
        {experiences.map((experience) =>(
          <div className='display-block p-3' key={experience}>
              <small>{experience.date}</small>
               <h6 className='font-semibold text-muted pb-4'>{experience.title}</h6>
               <p className='text-sm text-gray-500 pt-2'> {experience.description}</p>              
          </div>
        ))}
        Lenght of Experience:
        {experiences.length}
      </div>

    </div>
  )
}