import React from 'react';
import ProgressBar from '../components/Progress_bar';
import { designs } from '../data';

export default function Design() {
  return (
    <div className="bg-white px-4 py-4 w-full justify-center overflow-hidden items-center shadow-lg rounded-lg break-word m-4 ">
    <h3 className="font-bold text-gray-700 text-base uppercase mt-2 text-left ">Design</h3>
    <div className="mt-4">
        {designs.map((design) =>(
          <div className="container flex">
            <div className="w-1/4 text-left text-sm"><span className="mr-8 text-left">{design.name}</span> </div>
            <div className="w-1/2 ml-8 justify-right item-right"> <ProgressBar bgcolor="#99ccff" progress={design.progress} height={10} />   </div>
          </div>
        ))}
    </div>
  </div>     
  )
}