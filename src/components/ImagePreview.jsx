import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
  return (
    <div className='grid gap-5 grid-cols-1 md:grid-cols-2 w-full max-w-4xl mt-8'>

    {/* original iamge */} 
        <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className=' bg-black text-white py-2  text-center font-semibold'>Original image</h2>

        {props.upload ? 
        <img src={props.upload} alt="" className='w-full h-full object-cover'/>
        :  <div className='flex justify-center items-center h-80 bg-white'>No image selected</div>
    }
        
       
        </div>
    
    {/* enhanced image */}
        <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className=' bg-blue-500 text-white py-2 font-semibold text-center'>Enhanced image</h2>

        {props.enhanced && !props.loading && <img src={props.enhanced} alt="" className='w-full h-full object-cover'/>}

        {props.loading ? <Loading/> :   <div className='flex justify-center items-center h-80 bg-white'>No image to enhanced</div>
         }

       
     
      
        </div>
    </div>
  )
}

export default ImagePreview
