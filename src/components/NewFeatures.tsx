/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const NewFeatures = () => {
    return (
      <div className="text-xl">

        <div className="text-center text-4xl py-4 text-blue-400 font-bold leading-relaxed">
          <h1><span>What We Offer</span></h1>
        </div>
          <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 object-contain h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-400 flex-shrink-0">
       
          <img className="p-3 ml-2" src={process.env.PUBLIC_URL + '/assets/agriculture.svg'} alt=""/>
        
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-3xl title-font font-medium mb-2">Agriculture</h2>
        <p className="leading-relaxed text-xl">We own and have access to 500 hectares of land and farm implements on which we cultivate crops and rear livestock.
        With our partners and other outgrowers, provide these products for sale on a retail basis. 
        We have also invested in cattle, wealth management and egg production.</p>
        <a className="mt-3 text-blue-400 inline-flex items-center">
          
        </a>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-3xl title-font font-medium mb-2">Construction</h2>
        <p className="leading-relaxed text-xl">We provide civil engineering, project management, Architectural design and construction services.</p>
        <a className="mt-3 text-blue-400 inline-flex items-center">
         
        </a>
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-400 flex-shrink-0">
      <img className="p-3 ml-2" src={process.env.PUBLIC_URL + '/assets/construction.svg'} alt=""/>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto pb-10 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-400 flex-shrink-0">
      <img className="p-3 ml-2" src={process.env.PUBLIC_URL + '/assets/vehicle.svg'} alt=""/>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-3xl title-font font-medium mb-2">WELP Automotive Security Technology</h2>
        <p className="leading-relaxed text-xl">WELP is an end-to-end vehicle security service providing complete alarm systems, anti-theft and bullet-proofing.</p>
        <a className="mt-3 text-blue-400 inline-flex items-center">
         
        </a>
      </div>
    </div>

    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-3xl title-font font-medium mb-2">Trade</h2>
        <p className="leading-relaxed text-xl">We provide civil engineering, project management, Architectural design and construction services.</p>
        <a className="mt-3 text-blue-400 inline-flex items-center">
         
        </a>
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-400 flex-shrink-0">
      <img className="p-3 ml-2" src={process.env.PUBLIC_URL + '/assets/trade.svg'} alt=""/>
      </div>
    </div>
    <button className="flex mx-auto mt-20 text-white bg-blue-400 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href="/Contact">Get in touch</a></button>
  </div>
</section>
      </div>
    )
}

export default NewFeatures
