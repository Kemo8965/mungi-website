
import React from 'react';




import "tailwindcss/tailwind.css"
import Team from '../components/Team';




function About() {

  return (
    <div>

         
   <div className="text-center justify-items-left mx-20 py-8 px-8 bg-white shadow-lg rounded-lg my-20">
       
   <div className="flex justify-center md:justify-end -mt-16">
   <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={process.env.PUBLIC_URL + '/assets/mungi-logo.png'} alt="logo"/>
   
    </div>

   

   <div>
  
   <h2 className="text-gray-800 text-3xl pb-10 font-semibold">About Us</h2>

   <section className=" grid lg:grid-cols-2 grid-cols-1 gap-y-3 ">
     
     <div className="grid lg:grid-cols-1 grid-cols-1 order-first">

      <img className="lg:object-cover h-72 object-contain lg:pt-36 lg:w-full lg:h-100 lg:pb-8" src={process.env.PUBLIC_URL + '/assets/mungi-logo.png'} alt=""/>
     
     </div>

     <div className="bg-blue-400 text-center font-serif text-blue-200 lg:pt-24 lg:text-xl font-semi-bold h-full lg:h-100">
       <article className="pb-24 p-10 text-left lg:space-y-6" >
       <article className="mt-2 text-gray-200 text-left font-medium tracking-wider md:pl-24 md:pr-20  md:pb-20 gap-y-4">
      <span className="text-blue-900">Mungi Company Limited</span> was formed in 2016 and incorporated in 2019. 
      Our aim is to become market leaders in the provision of
       Agricultural, Construction, Trade and Consultancy services 
       by supplying high quality products and services to our customers.
    </article>
        
       </article>

       
     </div>
  </section>

  <Team/>
    
     </div>
   
</div>
</div>


   )
}

export default About;


/* eslint-disable jsx-a11y/anchor-is-valid */






