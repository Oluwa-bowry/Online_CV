import React from 'react';
import { details } from '../data';


export default function Details() {
  return (
    <div className="bg-white m-4 w-full flex flex-col text-left overflow-hidden justify-center shadow-lg items-center rounded-lg break-word p-4">          
      <div className='mb-6'>
        {details.map((detail) => (
          <div>
              <figure className="">
              <img src ={detail.image} className="rounded-lg h- sm:mx-0 sm:shrink-0"/>
              <figcaption>
                <h2 className="font-bold text-gray-700 text-2xl  mt-2 ">Oluwabori Ige</h2>
                <p className='text-sm text-gray-500 pb-4'>Front-end developer</p>
              </figcaption>
          </figure>
          <a href={detail.mail} className="block text-sm text-gray-500">{detail.mail}</a>
          <a href={detail.mail} className='text-sm text-gray-500'>{detail.number}</a>
          </div>
                   
        ))}
        <p className="text-sm text-gray-500 pt-4 break-word">Self-motivated developer, who is willing to learn and create outstanding UI applications.</p>
       
      </div>
    </div>
  )
}