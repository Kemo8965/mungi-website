/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'

const Gallery = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Gallery</h1>
    
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/2 sm:w-1/2 p-4 lg:py-20">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full lg:h-80 h-full object-cover object-center" src={process.env.PUBLIC_URL + "/assets/agri1.jpeg"}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">--------------</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Egg Production</h1>
            <p className="leading-relaxed">One of our egg production farms.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-1/2 p-4 lg:py-20">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full lg:h-80 h-full object-cover object-center" src={process.env.PUBLIC_URL + "/assets/cow2.jpg"}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 ">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">---------------</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Cattle Management</h1>
            <p className="leading-relaxed">Our cattle ranch in Southern province.</p>
          </div>
        </div>
      </div>
     
      <div className="lg:w-1/2 sm:w-1/2 p-4 lg:py-20">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full lg:h-80 h-full object-cover object-center" src={process.env.PUBLIC_URL + "/assets/cow.jpg"}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 ">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">-----------</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Cattle Management</h1>
            <p className="leading-relaxed">Our cattle ranch in Southern province.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-1/2 p-4 lg:py-20">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full lg:h-80 h-full object-cover object-center" src={process.env.PUBLIC_URL + "/assets/agric3.jpeg"}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 ">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">--------------</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3"></h1>
            <p className="leading-relaxed">A visit to one of our poultry farms from The Ambassador from Angola to Zambia Hon. Mr. Azevedo Xavier Francisco and the team. </p>
          </div>
        </div>
      </div>
     
    </div>
  </div>
  
</section>

        </div>
    )
}

export default Gallery


