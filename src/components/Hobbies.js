import React from 'react';
import { hobbies } from '../data';


export default function Hobbies() {
  return (
    <div className="bg-white overflow-hidden justify-center shadow-lg items-center rounded-lg break-word w-full m-4 p-4 h-1/3 display-block">
      <h3 className="text-gray-400 text-lg font-bold">Hobbies</h3>
      <div className="my-2">
        {hobbies.map((hobby) =>(
          <div className='display-block p-3' key={hobby}>
              <small>{hobby.image}</small>
               <h5 className='font-bold'>{hobby.title}</h5>
               <small className='text-gray-500'> {hobby.description}</small>              
          </div>
        ))}
      </div>

    </div>
  )
}