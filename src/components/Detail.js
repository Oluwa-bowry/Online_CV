import React from 'react';
export default function Details() {
  return (
    <div className="bg-white m-4 w-full flex flex-col overflow-hidden justify-center shadow-lg items-center rounded-lg break-word p-4">          
      <div className='mb-6'>
      <figure className="">
          <img src ="./photo6.png" className="rounded-lg h-90 sm:mx-0 sm:shrink-0"/>
          <figcaption>
            <h2 className="font-bold text-gray-600 text-xl mt-2 ">Oluwabori Ige</h2>
            <p>Front-end developer</p>
          </figcaption>
        </figure>
        <small className="block">igeoluwabori@gmail.com</small>
        <small>+234-703-608-7065</small>
        <p className="text-sm text-gray-700 mt-1">Self-motivated developer, who is willing to learn and create outstanding UI applications.</p>
      </div>
    </div>
  )
}