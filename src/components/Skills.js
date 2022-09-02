import React from 'react';
import {skills} from '../data';
import ProgressBar from '../components/Progress_bar';

export default function Skills() {
  return (
    <div className="bg-white px-4 py-4 w-full  justify-center overflow-hidden items-center shadow-lg rounded-lg break-word m-4 ">
    <h2 className="font-bold text-gray-600 uppercase text-xl mt-2 text-left ">Front end</h2>
    <div className="mt-2">
        {skills.map((skill) =>(
          <article key={skill} className="flex break-word ">
            <span className="text-left" >{skill}</span>
            <ProgressBar bgcolor="#99ccff" progress={60} height={10} className="item-right" />
          </article>
        ))}
    </div>
  </div>      
  )
}