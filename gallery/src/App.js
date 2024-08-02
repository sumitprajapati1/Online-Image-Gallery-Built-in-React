import React,{useState,useEffect} from 'react';
import './App.css';
import ImageCard from './components/ImageCard';

function App() {
  const [images,setImages]=useState([]);
  const [isloading ,setIsloading]=useState(true);
  const [term,setTerm]=useState(' ');

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=45240813-dfca0b2c82e16fb38149b8704&q=old+cars&image_type=photo&pretty=true`)
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
   <div className="container mx-auto">
    <div className="grid gird-cols-3 gap-4">

      {images.map(image=>(
        <ImageCard key={image.id} image={image}></ImageCard>
      ))}

    </div>
   </div>
   </>
  );
}

export default App;
