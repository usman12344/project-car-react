import React from 'react';
import { Link } from 'react-router-dom';

export default function Suggestion() {
  return (
    <section className="px-4 py-16">
    <div className="container mx-auto">
      <div className="flex flex-start mb-4 text-white">
        <h3 className="text-2xl capitalize font-semibold">
          complete your room <br /> with what we designed
        </h3>
      </div>
      <div className="flex flex-wrap overflow-x-auto mb-4 -mx-3">
        {/* <!-- START: item 1 --> */}
        <div className="relative px-3 w-full md:w-3/12 mb-4">
        <div className="rounded-xl p-4 pb-8 relative bg-yellow-500">
          <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
              <img src="../images/content/car1.png" alt="" className="w-full h-full object-cover object-center" />
          </div>
          <h5 className="text-lg font-semibold mt-4">
            Office Chair 2xl
          </h5>
          <span className="">IDR 89.000.000</span>
          <Link to="details.html" className="stretched-link">
            {/* <!-- fake children --> */}
          </Link>
        </div>
      </div>
      {/* <!-- END: item 1 --> */}

      {/* <!-- START: item 2 --> */}
      <div className="relative px-3 w-full md:w-3/12 mb-4">
        <div className="rounded-xl p-4 pb-8 relative bg-yellow-500">
          <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
              <img src="../images/content/car2.png" alt="" className="w-full h-full object-cover object-center" />
          </div>
          <h5 className="text-lg font-semibold mt-4">
            Office Chair 2xl
          </h5>
          <span className="">IDR 89.000.000</span>
          <Link to="details.html" className="stretched-link">
            {/* <!-- fake children --> */}
          </Link>
        </div>
      </div>
      {/* <!-- END: item 2 --> */}

      {/* <!-- START: item 3 --> */}
      <div className="relative px-3 w-full md:w-3/12 mb-4">
        <div className="rounded-xl p-4 pb-8 relative bg-yellow-500">
          <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
              <img src="../images/content/car3.png" alt="" className="w-full h-full object-cover object-center" />
          </div>
          <h5 className="text-lg font-semibold mt-4">
            Office Chair 2xl
          </h5>
          <span className="">IDR 89.000.000</span>
          <Link to="details.html" className="stretched-link">
            {/* <!-- fake children --> */}
          </Link>
        </div>
      </div>
      {/* <!-- END: item 3 --> */}

      {/* <!-- START: item 4 --> */}
      <div className="relative px-3 w-full md:w-3/12 mb-4">
        <div className="rounded-xl p-4 pb-8 relative bg-yellow-500">
          <div className="rounded-xl overflow-hidden card-shadow w-full h-48 ">
              <img src="../images/content/car4.png" alt="" className="w-full h-full object-cover object-center" />
          </div>
          <h5 className="text-lg font-semibold mt-4">
            Office Chair 2xl
          </h5>
          <span className="">IDR 89.000.000</span>
          <Link to="details.html" className="stretched-link">
            {/* <!-- fake children --> */}
          </Link>
        </div>
      </div>
      {/* <!-- END: item 4 --> */}
      </div>
    </div>
  </section>
  )
}
