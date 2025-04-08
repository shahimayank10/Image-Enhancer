import React from 'react'

const ImageUpload = (props) => {

    function Fileext(e){
    const file=e.target.files[0];
    console.log(file);
   

    props.extractFile(file);
}
  return (
    <div className='w-full max-w-2xl shadow-lg bg-white p-6 rounded-2xl '>
        
        <label htmlFor="fileinput" className='block text-center w-full border-2 rounded-xl p-4 border-dashed border-gray-300 cursor-pointer hover:border-blue-500 transition-all'>

        <input type="file" id="fileinput" className='hidden' onChange={Fileext}/>
        <p>Click and Drag to upload image</p>

        </label>
   
    </div>
  )
}

export default ImageUpload
