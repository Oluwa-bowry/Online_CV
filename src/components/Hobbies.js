import React from 'react';
import { hobbies } from '../data';


export default function Hobbies() {
  return (
    <div className="bg-white overflow-hidden justify-center shadow-lg items-center rounded-lg break-word w-full p-2 h-1/3 display-block">
      <h3  className="font-bold text-gray-700 text-base uppercase mt-2 text-left ">Hobbies</h3>
      <div className="p-2">
        {hobbies.map((hobby) =>(          
            <div className='display-block p-3' key={hobby.title}>
                <small>{hobby.image}</small>
                <h6 className='font-semibold text-muted pb-2'>{hobby.title}</h6>
                <small className='text-gray-500'> {hobby.description}</small>              
            </div>
          
        ))}
      </div>

    </div>
  )
}