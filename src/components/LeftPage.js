import React from 'react'
import Details from './Detail';
import Experience from './Experience'
import Hobbies from './Hobbies';

export default function LeftPage () {
  return (
    <div className='display-block'>
      <div className=" sm: h-1/3 p-2 item center container ">
        <Details />
      </div>
      <div className=" sm: h-1/3 p-2 item center container">
        <Experience />
      </div>
      <div className=" h-1/3 p-2 item center container">
        <Hobbies />
      </div> 
    </div>
  )
}