import React from 'react'
import Button from './button'

export default function HomeSixthComponent() {
  return (
    <div className="relative w-full h-[500px] bg-white overflow-hidden flex">
      {/* leftSide */}
      <div className="absolute top-0 left-0 w-[700px] h-[500px] bg-green-600 rounded-br-full z-20" />
      <div className="absolute top-0 left-0 w-[750px] h-[500px] bg-green-500 rounded-br-full z-10" />

      
      <div className="relative z-30 flex-1 flex items-center px-12 md:px-24 py-6">
        <div className="max-w-xl text-white">
          <p className=" uppercase tracking-wider text-white text-xl font-bold mb-2">
           
          </p>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            The all in one finance platform you’ve been looking for
          </h1>
          <p className="text-white text-base mb-6 pr-14">
            Our platform offers the tools, insights, and support you need to
            grow your wealth strategically
          </p>
          
          <button className='bg-green-800 hover:bg-green-700  text-white text-sm px-2 py-2 rounded-md  transition-colors'> DISCOVER MORE</button>
          
        </div>
      </div>

   {/* ImagePart */}
      <div className="absolute left-8 flex-1 hidden md:block z-0">
        <img
          src="./team meeting2.jpeg" 
          alt="Business meeting"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
