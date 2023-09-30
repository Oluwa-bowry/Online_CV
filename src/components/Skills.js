import React from 'react';
import {skills} from '../data';
import ProgressBar from '../components/Progress_bar';

export default function Skills() {
  return (
    <div className="bg-white px-4 py-4 justify-center overflow-hidden items-center shadow-lg rounded-lg break-word  ">
    <h3 className="font-bold text-gray-700 text-base uppercase mt-2 text-left ">Front end</h3>
    <div className="mt-4">
        {skills.map((skill) =>(
          <div className="container flex" key={skill.name}>
            <div className="w-1/4 text-left sm: text-sm"><span className="mr-8 text-left">{skill.name}</span> </div>
            <div className="w-1/2 ml-8 justify-right item-right"> <ProgressBar bgcolor="#99ccff" progress={skill.progress} height={10} />   </div>
          </div>
          
        ))}
    </div>
  </div>      
  )
}