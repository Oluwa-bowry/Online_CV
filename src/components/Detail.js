import React from 'react';
import { details } from '../data';


export default function Details() {
  return (
    <div className="bg-white  w-full flex flex-col text-left overflow-hidden justify-center shadow-lg items-center rounded-lg break-word  ">          
      <div className='mb-6'>
        {details.map((detail) => (
          <div key={detail.mail}>
              <figure className="">
              <img src ={detail.image} alt="alt" className="rounded-lg h- sm:mx-0 sm:shrink-0 p-4"/>
              <figcaption>
                <h2 className="title-font font-bold text-gray-700   mt-2 sm: text-xl px-4 ">Oluwabori Ige</h2>
                <p className='text-sm text-gray-500 pb-4 sm: px-4'>Front-end developer</p>
              </figcaption>
          </figure>
          <a href={detail.mail} className="block text-xs text-gray-500 sm: px-4 text-xs">{detail.mail}</a>
          <a href={detail.mail} className='text-xs text-gray-500 sm: px-4 text-xs'>{detail.number}</a>
          </div>
                   
        ))}
        <p className="text-sm text-gray-500 pt-4 break-word sm: px-4">Self-motivated developer, who is willing to learn and create outstanding UI applications.</p>
       
      </div>
    </div>
  )
}