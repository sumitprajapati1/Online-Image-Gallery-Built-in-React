import React from 'react';

export default function ImageCard({image}) {
  return (
    <div>
       <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl-mb2"> Photo by {image.user}</div>
        <ul>
        <li>
          <strong> Views : 4000 </strong>
        </li>
        <li> 
          <strong> Likes : 300 </strong>
        </li>
        <li> 
          <strong> Downloads: 200 </strong>
        </li>
      </ul>
      </div>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        Tag 1
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        Tag 2
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        Tag 3
      </span>
    </div>
    </div>
  )
}
