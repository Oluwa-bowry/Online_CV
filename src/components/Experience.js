
import React from 'react';
import {experiences} from "../data";

export default function Experience() {
  return (
    <div className="bg-white overflow-hidden justify-center shadow-lg items-center rounded-lg break-word w-full h-1/3 display-block sm: p-2">
      <h3 className="text-gray-600 text-lg font-bold sm:text-sm">Experience</h3>
      <div className="my-2">
        {experiences.map((experience) =>(
          <div className='display-block pb-4' key={experience.id}>
              <small>{experience.date}</small>
               <h6 className='font-semibold text-muted pb-2'>{experience.title}</h6>
               <p className='text-sm text-gray-500 '> {experience.description}</p>              
          </div>
        ))}
        {/* Lenght of Experience:
        {experiences.length} */}
      </div>

    </div>
  )
}