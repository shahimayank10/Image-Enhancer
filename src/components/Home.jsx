import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhancedImageAPi } from '../utils/enhanceimageApi'

const Home = () => {
    const [uploadimg,setUploadimg]=useState(null)
    const [enhancedimg,setEnhancedimg]=useState(null)
    const [loading, setLoading]=useState(false);
    


   async function extractFile(file){
        
        const imageURL=URL.createObjectURL(file);  // convert the file to object
        
        setUploadimg(imageURL);
        
        setLoading(true);

        // api call

     try {
        const enhancedUrl=await enhancedImageAPi(file);

        setEnhancedimg(enhancedUrl);

        setLoading(false);

     } catch (error) {

        alert(error);
     }
    }

    return (
    <>
      <ImageUpload extractFile={extractFile}/>
      <ImagePreview upload={uploadimg} enhanced={enhancedimg} loading={loading}/>
    </>
  )
}

export default Home
