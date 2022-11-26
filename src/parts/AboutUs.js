import React from 'react';

export default function AboutUs() {
  return (
    <section>
      <div className=" md:flex mt-6">
        <div className="rounded-xl overflow-hidden">
          <img src="/images/design/aboutus.png" alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute md:relative md:pt-28 md:-ml-10 md:visible invisible md:w-auto w-0">
          <h2 className="text-white font-bold  text-4xl text-center justify-start items-center flex">RENTAL CAR</h2>
          <button href="">
            <h2 className="text-white font-semibold text-yellow-100 text-2xl text-center justify-end items-center flex mt-10 hover:text-white">Follow Us</h2>
          </button>
        </div>
      </div>
    </section>
  )
}
