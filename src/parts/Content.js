import React from 'react';
import { Link } from 'react-router-dom';

export default function Content() {
  return (
    // <!-- START : Content -->

    <section className="flex items-center bg-transparent hero">
      <div className="invisible md:visible w-1/6 md:relative md:w-auto mt-20 iconn">
        <Link to="https://www.instagram.com/usman.abdat/?hl=id">
          <img src="/images/content/fb.png" alt="" className="w-5 mx-28 my-10" />
        </Link>
        <Link to="#">
          <img src="/images/content/ig.png" alt="" className="w-5 mx-28 my-10" />
        </Link>
        <Link to="#">
          <img src="/images/content/wa.png" alt="" className="w-5 mx-28 my-10" />
        </Link>
        <Link to="#">
          <img src="/images/content/email.png" alt="" className="w-5 mx-28 my-10" />
        </Link>
        <Link to="#">
          <img src="/images/content/message.png" alt="" className="w-5 mx-28 my-10" />
        </Link>
      </div>
      {/* <!-- START: Content | Left side --> */}
      <div className="w-full absolute z-20 inset-0 md:relative md:w-1/4 text-center flex flex-col justify-center hero-caption mt-96">
        <h1 className=" px-8 md:px-0 text-5xl md:text-7xl md:tracking-widest md:text-left leading-tight font-bold text-white text-left garage">
          LUXURY <br className="" />LIFESTYLE <br className="" /> RENTALS
        </h1>
        <h2 className="text-xl px-8 md:px-0 text-white pt-5 md:text-left text-left">THE AMG GLE Coupe 2022</h2>
        <h2 className="px-8 md:px-0 text-yellow-100 md:text-left text-left">IDR 500.000 <font className="text-gray-500 ">/ Per Day</font> </h2>
        <div className="md:text-left">
          <a href="#today" className="bg-transparent text-white hover:bg-black hover:text-yellow-100 rounded-full px-8 py-3 mt-4 inline-block flex-none-transition duration-200 borderr">Drive Now</a>
        </div>
      </div>
      {/* <!-- END: Content | Left side --> */}

      <div className="invisible relative inset-0 md:relative md:w-3/4 md:visible ">
        <div className="relative hero-image">
          <div className="overlay inset-0 opacity-30 z-10"></div>
        </div>
        <img
        className="relative inset-0 md:relative w-full h-full object-contain h-full w-full garagee"
        src="/images/content/garage.jpg" alt="" />
      </div>
      <div className="inset-0 md:hidden md:w-3/4">
        <img
        className="absolute inset-0 md:hidden w-full h-full object-contain h-full w-full -mt-60"
        src="/images/content/garagemobile.jpg" alt="" />
      </div>

    </section>
    // {/* <!-- END : Content --> */}
  )
}
