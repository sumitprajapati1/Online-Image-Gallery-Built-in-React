import React,{useState,useEffect} from 'react';
import './App.css';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images,setImages]=useState([]);
  const [isloading ,setIsloading]=useState(true);
  const [term,setTerm]=useState(' ');

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=45240813-dfca0b2c82e16fb38149b8704&q=${term}&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then(data=>
    {
      setImages(data.hits);
      setIsloading(false);
    })
    .catch(err=>console.log(err))
  },[term])
  return (
   <>
   <ImageSearch searchText={(text)=>setTerm(text)}/>

   <div className="container mx-auto">
    {isloading===false && images.length===0 && <h1 className="text-5xl text-ceter mx-auto mt-32">Image Not Found </h1>}

      {isloading? <h1 className="text-6xl text-ceter mx-auto mt-32">Loading...</h1>:<div className="md:grid md:grid-cols-3 md:gap-4">

        {images.map(image=>(
          <ImageCard key={image.id} image={image}></ImageCard>
        ))}

      </div>}
   </div>
   </>
  );
}

export default App;
