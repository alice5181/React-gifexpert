import { useState, useEffect } from 'react'
import {getGifs} from '../helpers/getGifs'

const useFetchgifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    
    const getImages =async() =>{
        const newImages = await getGifs ( category );
        setImages(newImages);
        setIsloading(false);        
    }
    
    useEffect( ()=> {
        getImages();
        },[])


  return {
    //images:images,  //cuando tenemos una propiedad que apunta a una variable del mismo nombre se puede dejar 
    images,
    isLoading,
  }
}

export default useFetchgifs;