import React from 'react';
import {blogs} from '../data.js'


export default function Blog () {
  return (
    <div>
      <div className="container  text-left  ">
         <h5 className="bg-white p-4 mb-4 rounded-lg shadow-lg">Blogs ({blogs.length})</h5>
      
      <div className="container">
          {blogs.map((blog) => (
            <div className="container bg-white justify-center p-4 mb-4 overflow-hidden items-center shadow-lg rounded-lg break-word" key={blog.id}>
                <h4>{blog.title}</h4>
                <small>{blog.description}</small>
                <a href={blog.url}>{blog.url}</a>
            </div>          
          ))}        
        </div>
      </div>
    </div>
  )
}