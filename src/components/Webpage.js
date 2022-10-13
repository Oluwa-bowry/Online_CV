import React from 'react';
import LeftPage from './LeftPage';
import RightPage from './RightPage';


export default function Webpage() {
  return (
    <div className="container flex font-serif {Montserrat} sm: text-xs">
      <div className="sm: w-1/3" >
         <LeftPage />
      </div>
      <div className="">
        <RightPage />
      </div>         
        
    </div>
  )
}