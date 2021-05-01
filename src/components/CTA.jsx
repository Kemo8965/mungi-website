/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <div className="bg-white ">
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-2xl lg:pl-52 font-extrabold tracking-tight text-gray-900 lg:text-4xl">
            <span className="block ">Let's get talking</span>
            <span className="block text-blue-400">today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/Contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-400 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get in touch
                    </Link>
                  </div>
                  
                  </div>
            </div>
        </div>
      </div>
    )
}

export default CTA;

  