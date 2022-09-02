import React from 'react';
import LeftPage from './LeftPage';
import RightPage from './RightPage';


export default function Webpage() {
  return (
    <div className="container flex ">
      <div className="container-fluid m-4 w-1/4">
         <LeftPage />
      </div>
      <div className="container-fluid m-4 w-full">
        <RightPage />
      </div>        
        
    </div>
  )
}