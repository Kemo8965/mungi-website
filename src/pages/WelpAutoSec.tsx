import React from 'react'
import WelpAutoSecGallery from '../components/Gallery/WelpAutoSecGallery'

const WelpAutoSec = () => {
    return (
        <div>
        
    <div>
      <section className=" bg-blue-50 px-16 lg:rounded-xl shadow-xl pb-20 pt-10 lg:py-24 grid lg:grid-cols-2 grid-cols-1  ">
        <div className=" order-first">
          <img
            src={process.env.PUBLIC_URL + "/assets/welp3.jpg"}
            className="lg:object-cover lg:mr-28 h-auto object-contain w-full  lg:w-full lg:h-200"
            alt=""
          />
        </div>


        <div className=" lg:rounded-tr-3xl lg:rounded-br-3xl  bg-gray-50 text-center   text-black lg:pt-10 lg:text-md  h-full lg:h-full">
         <h1 className="text-left text-2xl lg:text-6xl text-blue-400 ml-10 ">WELP Automotive Security</h1>
         
          <article className="lg:pb-20 p-5 text-xl text-left lg:space-y-6 ">

              <p>
                  We develop and produce armoured vehicles in various security levels- 
                  from fully armoured vehicles that comply with the highest military standards through to individal partial light armour. With this in mind, we only use certified high-quality ballistic materials.

            </p>

            <p>
              Our portfolio includes offroad vehicles, limousines and commercial vehicles which we customise for a wide range of applications with numerous configuration options and systems.
              We are proud to be supporting or customers with our numerous years of experience, state-of-the-art machinery and zero-tolerance policy to errors.
              After all, when it comes to safety, there's no compromise.
            </p>

            <p>
              All our armoured vehicles have been tested under the most rigorous conditions in our ballistics laboratory and certified by the national proof house.
              We have specially adapted and reinforced the chasis components in or vehicles to ensure safe handling in all situations.  
            </p>

            <p>
              And we also offer you a whole host of services designed to ensure you can always use your vehicle to its full potential.
              These include:
              <li>Repairs(infield inclusive)</li>
              <li>Driver training</li>
              <li>Global spare parts supply</li>
            </p>
                      </article>

          
        </div>
      </section>

      <div>
      <WelpAutoSecGallery/>
      </div>
    </div>
  ); 
        </div>
    )
}

export default WelpAutoSec
