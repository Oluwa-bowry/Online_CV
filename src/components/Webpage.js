import React from 'react';
import LeftPage from './LeftPage';
import RightPage from './RightPage';


export default function Webpage() {
  return (
    <div className="container flex font-serif {Montserrat} ">
      <div className="container-fluid m-4 w-1/3" >
         <LeftPage />
      </div>
      <div className="container-fluid m-4 w-full">
        <RightPage />
      </div>         
        
    </div>
  )
}