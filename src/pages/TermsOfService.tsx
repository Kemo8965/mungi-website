

import React from 'react'
import NewSidebar from '../components/NewSidebar';

const TermsOfService = () => {
    return (
     <div>

         <NewSidebar/>
          
    <div className="w-3/4 text-center justify-items-left ml-20 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        
    <div className="flex justify-center md:justify-end -mt-16">
    <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={process.env.PUBLIC_URL + '/assets/gari.jpeg'} alt="logo"/>
    
     </div>

    

    <div>
   
    <h2 className="text-gray-800 text-3xl font-semibold">Terms Of Service</h2>

      <article>
        About us goes here!
      </article>
      </div>
    
</div>
</div>


    )
}

export default TermsOfService;
