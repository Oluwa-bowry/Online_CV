import React from 'react';
import LeftPage from './LeftPage';
import RightPage from './RightPage';


export default function Webpage() {
  return (
    <div className="lg:flex sm:flex-wrap font-serif Montserrat text-xs">
      <div className="lg:w-1/5 sm:w-full">
        <LeftPage />
      </div>
      <div className="lg:w-4/5 sm:w-full">
        <RightPage />
      </div>
    </div>

  )
}