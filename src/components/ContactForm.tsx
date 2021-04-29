/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react'
import emailjs from 'emailjs-com'


export default function form(){
  
  function sendEmail(e:any) {
    e.preventDefault();

    emailjs.sendForm('service_3q753bp', 'template_6ov2hql', e.target, 'user_vyxdwhSS8wyzhL6xaBD7B')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);

          
      });
      e.target.reset();
 
  }
    return (
        <div>
          <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" title="map"  scrolling="no" src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d6980.393955660213!2d28.35635337361027!3d-15.445313065684202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x19408d864304f367%3A0xd8613616eae9f5c6!2sNyumba%20Yanga%20Police%20Post%2C%20Unnamed%20Road%2C%20Lusaka!3m2!1d-15.4463215!2d28.3644331!4m3!3m2!1d-15.4448125!2d28.3667198!5e1!3m2!1sen!2szm!4v1619620536532!5m2!1sen!2szm"></iframe>
      
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">8 John Soko <br/> Road Nyumba Yanga</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed" href="mailto:sales@mungi.com">sales@mungi.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed"><a href="tel:+260-972-836-538">+260-972-836-538</a></p>
          <p className="leading-relaxed"><a href="tel:+260-962-220-856">+260-962-220-856</a></p>
       
        </div>
      </div>
    </div>
    <form onSubmit={sendEmail} className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Write to us or click the email or numbers in the bottom left section</p>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="from_name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
      <p className="text-xs text-green-500 mt-3">Email responses are typically within a few hours of receipt.</p>
    </form>
  </div>
</section>
        </div>
        )
}


