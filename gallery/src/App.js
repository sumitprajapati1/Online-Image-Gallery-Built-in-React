import React,{useState,useEffect} from 'react';
import './App.css';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images,setImages]=useState([]);
  const [isloading ,setIsloading]=useState(true);
  const [term,setTerm]=useState(' ');

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=45240813-dfca0b2c82e16fb38149b8704&q=green+pots&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then(data=>
    {
      setImages(data.hits);
      setIsloading(false);
    })
    .catch(err=>console.log(err))
  },[])
  return (
   <>
   <ImageSearch/>

   <div className="container mx-auto">
      {isloading? <div className="h1 text-6xl text-ceter mx-auto mt-32">Loading...</div>:<div className="md:grid md:grid-cols-3 md:gap-4">

        {images.map(image=>(
          <ImageCard key={image.id} image={image}></ImageCard>
        ))}

      </div>}
   </div>
   </>
  );
}

export default App;
