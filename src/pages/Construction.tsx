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
            We own and have access to 500 hectares of land and farm implements
            on which we cultivate crops and rear livestock. With our partners
            and other outgrowers, provide these products for sale on a retail
            basis. We have also invested in cattle, wealth management and egg
            production.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              itaque dignissimos doloribus unde laborum mollitia aspernatur
              perferendis beatae obcaecati, ullam commodi officiis saepe. Dolore
              unde odio dicta reiciendis suscipit harum totam alias mollitia at
              itaque natus laborum quibusdam necessitatibus, consequatur facilis
              accusamus quasi libero eos fugiat molestiae voluptas veritatis
              quae? Beatae accusamus fugiat voluptatem quos quo obcaecati, vitae
              saepe commodi provident quis cupiditate eius nulla blanditiis
              autem, minima illo minus recusandae laboriosam quibusdam!
              Veritatis unde ipsam animi adipisci, quos laudantium molestiae
              dolorem odio ullam quo voluptas ducimus maiores, voluptate esse
              doloribus, repellendus consectetur placeat eveniet alias
              perspiciatis sapiente non aliquam.
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
