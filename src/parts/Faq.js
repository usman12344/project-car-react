import React from 'react'

export default function Faq() {
  return (
    <section className="md:flex justify-center items-center md:mx-52">
      <div className="w-full md:w-1/2">
        <div className="block">
          <h2 className="text-white text-bold md:text-4xl mt-4 text-2xl px-2">LUXURY CAR RENTAL MIAMI</h2>
          <p className="block text-white mt-4 text-xs px-2">Are you looking for exotic or luxury car rental in Miami ? <br />
            You want to rent a luxury car or maybe exotic car? Get in touch with Rental Car - <br />
            Exotic and Luxury Cart Rental Miami agency. whether you need a exotic or luxury carrentals <br />
            for you business or for play.</p>
        </div>
          <div className="flex my-10">
            <div className="flex items-center">
              <img src="/images/design/mileage.png" alt="" className="md:mx-5 mx-2 text-semibold" style={{width: 20}} />
              <h2 className="text-white">MILEAGE <br /> UNLIMITED</h2>
            </div>
          <div className="flex items-center">
              <img src="/images/design/pickup.png" alt="" className="md:mx-5 mx-2 text-semibold" style={{width: 20}} />
              <h2 className="text-white">PICK UP <br /> SERVICE</h2>
            </div>
          <div className="flex items-center">
              <img src="/images/design/delivery.png" alt="" className="md:mx-5 mx-2 text-semibold" style={{width: 20}} />
              <h2 className="text-white">DELIVERY TO <br /> DOOR</h2>
            </div>
          </div>
      </div>
      <div className="w-full md:w-1/2 md:ml-20 md:-mt-10">
        <img src="/images/design/faq.jpg" alt="" />
      </div>
    </section>
  )
}
