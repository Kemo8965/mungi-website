import React from 'react'


// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

const Certificates = () => {
  return (
    <div className="pb-36 pl-2">

      <div>
        <h1 className="py-10 text-center text-3xl text-blue-400">Certificates</h1>
      </div>
<     section>
        <button className="w-1/5 ml-10 h-12 bg-blue-400 text-white rounded-xl"><a href="/zra"> ZRA Tax Clearance Certificate</a></button>
        <button className="w-1/5 ml-10  h-12 bg-blue-400 text-white rounded-xl"><a href="/pacra"> PACRA Certificate of Incorporation</a></button>
        <button className="w-1/5 ml-10  h-12 bg-blue-400 text-white rounded-xl"><a href="/napsa"> NAPSA Compliance Certificate</a></button>
        <button className="w-1/5 ml-10  h-12 bg-blue-400 text-white rounded-xl"><a href="/zppa"> ZPPA Supplier Certificate</a></button>
        
      </section>
     
    </div>
  )
}

export default Certificates
