import React from 'react'

const Certificates = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Company Certification</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center"  src={process.env.PUBLIC_URL + '/assets/COMPLIANCE CERTIFICATE-MUNGI.jpeg'}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Employer Compliance Certificate</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Issued by Workers' Compensation Fund Control Board</h1>
            <p className="leading-relaxed"></p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center"  src={process.env.PUBLIC_URL + '/assets/TAX CLEARANCE-MUNGI.jpg'}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Tax Clearance Certificate</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Issued by ZRA</h1>
            <p className="leading-relaxed"></p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center"  src={process.env.PUBLIC_URL + '/assets/INCORPORATION  CERTIFICATE- MUNGI.jpg'}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Certificate of Incorporation</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Issued by PACRA</h1>
            <p className="leading-relaxed"></p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center"src={process.env.PUBLIC_URL + '/assets/ANNUAL RETURNS- MUNGI.jpg'}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Annual Returns Compliance Certificate </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Issued by PACRA</h1>
            <p className="leading-relaxed"></p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center"src={process.env.PUBLIC_URL + '/assets/ZPPA CERTIFICATE-MUNGI.jpg'}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Certiciate of Procurement</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Issued by ZPPA</h1>
            <p className="leading-relaxed"></p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
    </div>
  )
}

export default Certificates
