import React, {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';



export default function Blog ({title, info, url}) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <div className="text-left  ">
         
      
      <div className="container bg-white justify-center p-4 mb-4 overflow-hidden items-center shadow-lg rounded-lg break-word">
                <header className='flex justify-between'>
                  <h4>{title}</h4>
                  <button className='btn' onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </button>
                </header>
                {showInfo && <p className='mt-4 text-sm text-gray-500 pb-6'>
                  <small>{info}</small>
                  <a href={url}>{url}</a></p>
                }
                
      </div>   
              
        
      </div>
    </div>
  )
}