import React from 'react'

const Testimonials = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
              <div className="text-4xl pt-10 font-semibold text-blue-400 text-center">
                <h1>What Our Customers Are Saying</h1>
              </div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"  src={process.env.PUBLIC_URL + '/assets/bob.jpg'}/>
          <p className="leading-relaxed">"Very Professional. Proper customer service"</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
          <p className="text-gray-500">Businessman</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={process.env.PUBLIC_URL + '/assets/Ann.jpg'}/>
          <p className="leading-relaxed">"I felt very comfortable and happy with how I was treated. As a client, I really felt Valued."</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALINA KUMAR</h2>
          <p className="text-gray-500">Marketing Manager, ABS Corp</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={process.env.PUBLIC_URL + '/assets/tom.jpg'}/>
          <p className="leading-relaxed">"Helped me throughout the time I needed help. Always on call ready to assist me. Thumbs up fro me!"</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
          <p className="text-gray-500">CTO</p>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default Testimonials
