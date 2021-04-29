/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Parallax} from 'react-parallax'


function Header() {
  const img1=`${process.env.PUBLIC_URL + '/assets/vivian-m\'soka.jpeg'}`
  return (
    <div className="pb-20">
   <section className=" grid lg:grid-cols-2 grid-cols-1 gap-y-3 ">
     
      <div className="order-first">
      <Parallax className="lg:object-cover h-72 object-contain  lg:w-full lg:h-200 lg:pb-8" bgImage={img1}>
        
      </Parallax>
      </div>

      <div className="bg-blue-400 text-center  tracking-wider text-blue-100 lg:pt-60 lg:text-3xl font-semibold h-96 lg:h-full">
        <article className="pb-24 p-10 text-left lg:space-y-6" >
          "Since I started working with <span className="text-blue-900">Mungi</span>, my professional and non-professional skills have really sharpened and my focus is getting better and better everyday. <span className="text-blue-900">Mungi</span> has taught me way more than I thought."

         
        </article>

        <h5 className=" text-lg font-semibold ">-Vivian M'soka</h5>
        <h4 className="font-italics text-lg">Director of Administration</h4>

        
        
      </div>
   </section>
 
  </div>
  );
}

export default Header;





