/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'

const NewFeatures = () => {
    return (
      <div className="text-xl">

        <div className="title-font lg:pr-16 text-center font-bold title-font lg:text-center text-2xl lg:text-5xl text-blue-400">
          <h1><span>What We Offer</span></h1>
        </div>
          <section className="text-gray-600 body-font">
  <div className="container py-24 mx-auto">
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 object-contain h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-400 flex-shrink-0">
       
          <img className="p-3 ml-2" src={process.env.PUBLIC_URL + '/assets/agriculture.svg'} alt=""/>
        
      </div>
      <div className="flex-grow lg:text-left text-center mt-6 sm:mt-0 p-8 ">
        <h2 className="text-gray-900 font-medium lg:pl-4 title-font text-xl">Agriculture</h2>
        <p className="leading-relaxed text-left lg:pl-4 lg:text-left">We own and have access to 500 hectares of land and farm implements on which we cultivate crops and rear livestock.
        With our partners and other outgrowers, provide these products for sale on a retail basis. 
        We have also invested in cattle, wealth management and egg production.</p>
        <button>
        <a href="/agriculture" className="text-indigo-400 lg:pt-5 lg:ml-4 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </button>
        
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow  lg:text-left  text-center mt-6 sm:mt-0 p-8 ">
        <h2 className=" lg:text-left lg:pl-44 font-medium title-font text-xl text-gray-900 mb-1 ">Construction</h2>
        <p className="leading-relaxed text-left lg:pl-44">We provide civil engineering, project management, Architectural design and construction services.</p>
        <button>
        <a href="/construction" className="text-indigo-400 lg:pt-5 lg:ml-44 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </button>
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-400 flex-shrink-0">
      <img className="p-3 ml-2" src={process.env.PUBLIC_URL + '/assets/construction.svg'} alt=""/>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-400 flex-shrink-0">
      <img className="p-3 ml-2" src={process.env.PUBLIC_URL + '/assets/vehicle.svg'} alt=""/>
      </div>
      <div className="flex-grow lg:text-left text-center mt-6 sm:mt-0 p-8 ">
        <h2 className="text-gray-900 font-medium lg:pl-3 title-font text-xl">WELP Automotive Security Technology</h2>
        <p className="leading-relaxed text-left lg:pl-3 lg:text-left">WELP is an end-to-end vehicle security service providing complete alarm systems, anti-theft and bullet-proofing.</p>
        <button>
        <a href="/welp-automotive-security" className="text-indigo-400 lg:pt-5 lg:ml-4  inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </button>
      </div>
    </div>

    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow  lg:text-left  text-center mt-6 sm:mt-0 p-8 ">
        <h2 className="lg:text-left lg:pl-44 font-medium title-font text-xl text-gray-900 mb-1">Trade</h2>
        <p className="leading-relaxed text-left lg:pl-44">We provide civil engineering, project management, Architectural design and construction services.</p>
        <button>
        <a href="/trade" className="text-indigo-400 lg:pt-5 lg:ml-44 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </button>
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-400 flex-shrink-0">
      <img className="p-3 ml-2" src={process.env.PUBLIC_URL + '/assets/trade.svg'} alt=""/>
      </div>
    </div>
   
  </div>
</section>
      </div>
    )
}

export default NewFeatures
