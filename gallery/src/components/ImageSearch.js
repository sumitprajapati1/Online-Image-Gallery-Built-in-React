import React,{useState} from 'react'

export default function ImageSearch({searchText}) {
    const [text,setText]=useState("");
    const handleOnSubmit =(e)=>{
        e.preventDefault();
        searchText(text)
    }
    return (
        <div className="flex items-center justify-center my-10 mx-auto mt-5">
        <form onSubmit={handleOnSubmit} className="flex border border-teal-500 rounded-lg overflow-hidden">
          <input onChange={e=>setText(e.target.value)} type="text" className="mr-1 px-2 py-1 w-full text-gray-700 focus:outline-none" placeholder="Search images..." aria-label="Search for images"/>
          <button className="flex-shrink-0 px-2 py-1 bg-teal-500 hover:bg-teal-700 border-teal-500
           text-white hover:border-teal-700 text-sm border-4  focus:outline-none">Search</button>
        </form>
      </div>
    )
}
