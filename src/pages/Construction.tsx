import React from 'react'
import ConstructionGallery from '../components/Gallery/ConstructionGallery'

const Construction = () => {
    return (
        <div>
            
    <div>
      <section className=" bg-blue-50 px-16 lg:rounded-xl shadow-xl pb-20 pt-10 lg:py-24 grid lg:grid-cols-2 grid-cols-1  ">
       
      <div className="lg:order-last order-first">
          <img
            src={process.env.PUBLIC_URL + "/assets/construction.jpg"}
            className="lg:object-cover h-auto object-contain w-full  lg:w-full lg:h-200"
            alt=""
          />
        </div>

        <div className=" lg:rounded-tr-3xl lg:rounded-br-3xl  bg-gray-50 text-center   text-black lg:pt-10 lg:text-md  h-full lg:h-full">
         <h1 className="text-left text-2xl lg:text-6xl text-blue-400 ml-10 ">Construction</h1>
         
          <article className="lg:pb-20 p-5 text-xl text-left lg:space-y-6 ">

              <p>
              We provide civil engineering, project management, Architectural design and construction services.
            </p>

           
          </article>

          
        </div>

       


      </section>

      <div>
      <ConstructionGallery/>
      </div>
    </div>
  
   </div>
    )
}

export default Construction
