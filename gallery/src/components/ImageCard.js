import React from 'react';

export default function ImageCard({image}) {
    const tags=image.tags.split(",")
    return (
    <div>
       <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl-mb2"> Photo by {image.user}</div>
        <ul>
        <li>
          <strong> Views : {image.views} </strong>
        </li>
        <li> 
          <strong> Likes : {image.likes}</strong>
        </li>
        <li> 
          <strong> Downloads: {image.downloads} </strong>
        </li>
      </ul>
      </div>
    </div>
    <div className="px-6 py-4">
     {tags.map((tag,index)=>(
         <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
         #{tag}
       </span>
     ))}
    </div>
    </div>
  )
}
