/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Team = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-60  object-cover object-center sm:mb-0 mb-4" src={process.env.PUBLIC_URL + '/assets/vivian-m\'soka.jpeg'}/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Vivian M'soka</h2>
            <h3 className="text-gray-500 mb-3">Administrative Director</h3>
            <p className="mb-4">Vivian ensures that all company plans are scheduled well and adjusted if necessary. She oversees all business activities and documents.</p>
           
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-60 object-cover object-center sm:mb-0 mb-4"  src={process.env.PUBLIC_URL + '/assets/mungala.jpg'}/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Mungala Matongo</h2>
            <h3 className="text-gray-500 mb-3">CEO, Co-founder</h3>
            <p className="mb-4">Mungala is responsible for the vision and direction of the company and is always thinking 5 steps ahead.</p>
            
            
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-60 object-cover object-center sm:mb-0 mb-4" src={process.env.PUBLIC_URL + '/assets/tom.jpg'}/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Thomas Banda</h2>
            <h3 className="text-gray-500 mb-3">Operations Manager</h3>
            <p className="mb-4">Thomas is responsible for the company's logistics and business operations.</p>
            
            
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-60 object-cover object-center sm:mb-0 mb-4" src={process.env.PUBLIC_URL + '/assets/hailey.jpg'}/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Hailey Letham</h2>
            <h3 className="text-gray-500 mb-3">Lead Designer</h3>
            <p className="mb-4">Hailey is responsible for the design projects of the company.</p>
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>  
        </div>
    )
}

export default Team

