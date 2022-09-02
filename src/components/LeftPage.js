import React from 'react'
import Details from './Detail';
import Experience from './Experience'

export default function LeftPage () {
  return (
    <div className='display-block'>
      <div className=" h-1/3 item center container">
        <Details />
      </div>
      <div className=" h-1/3 item center container">
        <Experience />
      </div>
    </div>
  )
}