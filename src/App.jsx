import { useState } from 'react'
import Home from './components/Home'

function App() {


  return (
    <div className='flex flex-col justify-center items-center min-h-screen py-8 px-4 bg-zinc-100'>
      
      {/* header */}
      <div className='mb-8 text-center'>
        <h1 className='font-bold text-4xl'>AI Image Enhancer</h1>
        <p className='text-lg text-gray-500'>Upload your image and let Ai Enhance it </p>
      </div>

      <Home/>

      {/* footer */}
      <div className='text-gray-500 mt-5'>
        <p className='text-sm'>powered by @picWish</p>
      </div>
    </div>
  )
}

export default App
