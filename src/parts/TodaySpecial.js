import React from 'react';
import { Link } from 'react-router-dom';

export default function TodaySpecial() {
  return (

    <section className="flex flex-col md:py-16 md:px-4 mt-60 md:mt-0" id="today">

      <div className="container md:mx-auto md:px-20">
        <div className="md:flex flex-start mb-4 justify-center items-center">
          <div className="w-1/2 mx-auto">
            <h3 className="text-2xl md:text-5xl capitalize font-bold text-white mx-auto md:mx-0 mb-4">
              Today Special
            </h3>
          </div>
          
          <div className="flex w-full md:w-1/2 md:mx-auto ml-2">
            <div className="mx-auto">
              <div className="flex mx-auto mr-7 justify-center items-center">
                <img src="/images/design/bmw.png" alt="" className="object-contain h-6 w-6" />
                <h1 className="ml-2 md:ml-5 font-semibold text-white">BMW</h1>
              </div>
            </div>
            <div className="mx-auto">
              <div className="flex mx-auto mr-7 justify-center items-center">
                <img src="/images/design/innova.png" alt="" className="object-contain h-6 w-6" />
                <h1 className="ml-2 md:ml-5 font-semibold text-white">INNOVA</h1>
              </div>
            </div>
            <div className="mx-auto">
              <div className="flex mx-auto mr-7 justify-center items-center">
                <img src="/images/design/sportcar (2).png" alt="" className="object-contain h-6 w-6" />
                <h1 className="ml-2 md:ml-5 font-semibold text-white">SPORTCAR</h1>
              </div>
          </div>
          </div>
          <div className="w-1/6 md:visible invisible">
            <div className="mx-auto">
              <Link to="details.html" className="text-white rounded-full hover:text-yellow-100 borderr p-5">VIEW ALL</Link>
            </div>
          </div>
        </div>
      </div>

        <div className="overflow-x-hidden   py-4" id="carousel">
          <div className="container mx-auto"></div>

            <div className="flex -mx-4 flex-row relative">
            {/* <!-- START: item carousel 1 --> */}

                <div className="px-4 relative card">
                  <div className="rounded-xl overflow-hidden card-shadow" style={{width:287}}>
                    <img src="/images/content/marcedez.png" alt="" className="w-full h-full object-cover object-center" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mt-4 text-white text-center">MARCEDEZ</h5>
                    <h2 className="px-8 md:px-0 text-yellow-100 md:text-center text-center">IDR 500.000 <span className="text-gray-500 ">/ Per Day</span> </h2>
                    <Link to="#details.html" className="stretched-link">
                      {/* <!-- fake children --> */}
                    </Link>
                  </div>
                </div>

            {/* <!-- END: item carousel 1 -->

            <!-- START: item carousel 2 --> */}

                <div className="px-4 relative card">
                  <div className="rounded-xl overflow-hidden card-shadow" style={{width:287}}>
                    <img src="/images/content/innova.png" alt="" className="w-full h-full object-cover object-center" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mt-4 text-white text-center">MARCEDEZ</h5>
                    <h2 className="px-8 md:px-0 text-yellow-100 md:text-center text-center">IDR 500.000 <span className="text-gray-500 ">/ Per Day</span> </h2>
                    <Link to="#details.html" className="stretched-link">
                      {/* <!-- fake children --> */}
                    </Link>
                  </div>
                </div>

            {/* <!-- END: item carousel 2 -->
            <!-- START: item carousel 3 --> */}

                <div className="px-4 relative card">
                  <div className="rounded-xl overflow-hidden card-shadow" style={{width:287}}>
                    <img src="/images/content/sportcar.png" alt="" className="w-full h-full object-cover object-center" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mt-4 text-white text-center">MARCEDEZ</h5>
                    <h2 className="px-8 md:px-0 text-yellow-100 md:text-center text-center">IDR 500.000 <span className="text-gray-500 ">/ Per Day</span> </h2>
                    <Link to="#details.html" className="stretched-link">
                      {/* <!-- fake children --> */}
                    </Link>
                  </div>
                </div>
{/* 
            <!-- END: item carousel 3 -->
            <!-- START: item carousel 4 --> */}

                <div className="px-4 relative card">
                  <div className="rounded-xl overflow-hidden card-shadow" style={{width:287}}>
                    <img src="/images/content/marcedez.png" alt="" className="w-full h-full object-cover object-center" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mt-4 text-white text-center">MARCEDEZ</h5>
                    <h2 className="px-8 md:px-0 text-yellow-100 md:text-center text-center">IDR 500.000 <span className="text-gray-500 ">/ Per Day</span> </h2>
                    <Link to="#details.html" className="stretched-link">
                      {/* <!-- fake children --> */}
                    </Link>
                  </div>
                </div>

            {/* <!-- END: item carousel 4 -->
            <!-- START: item carousel 5 --> */}

                <div className="px-4 relative card">
                  <div className="rounded-xl overflow-hidden card-shadow" style={{width:287}}>
                    <img src="/images/content/marcedez.png" alt="" className="w-full h-full object-cover object-center" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mt-4 text-white text-center">MARCEDEZ</h5>
                    <h2 className="px-8 md:px-0 text-yellow-100 md:text-center text-center">IDR 500.000 <span className="text-gray-500 ">/ Per Day</span> </h2>
                    <Link to="#details.html" className="stretched-link">
                      {/* <!-- fake children --> */}
                    </Link>
                  </div>
                </div>

            {/* <!-- END: item carousel 5 -->
            <!-- START: item carousel 5 --> */}

                <div className="px-4 relative card">
                  <div className="rounded-xl overflow-hidden card-shadow" style={{width:287}}>
                    <img src="/images/content/marcedez.png" alt="" className="w-full h-full object-cover object-center" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mt-4 text-white text-center">MARCEDEZ</h5>
                    <h2 className="px-8 md:px-0 text-yellow-100 md:text-center text-center">IDR 500.000 <span className="text-gray-500 ">/ Per Day</span> </h2>
                    <Link to="#details.html" className="stretched-link">
                      {/* <!-- fake children --> */}
                    </Link>
                  </div>
                </div>

            {/* <!-- END: item carousel 5 -->
             <!-- START: item carousel 5 --> */}

             <div className="px-4 relative card">
              <div className="rounded-xl overflow-hidden card-shadow" style={{width:287}}>
                <img src="/images/content/marcedez.png" alt="" className="w-full h-full object-cover object-center" />
              </div>
              <div>
                <h5 className="text-lg font-semibold mt-4 text-white text-center">MARCEDEZ</h5>
                <h2 className="px-8 md:px-0 text-yellow-100 md:text-center text-center">IDR 500.000 <span className="text-gray-500 ">/ Per Day</span> </h2>
                <Link to="#details.html" className="stretched-link">
                  {/* <!-- fake children --> */}
                </Link>
              </div>
            </div>

        {/* <!-- END: item carousel 5 --> <!-- START: item carousel 5 --> */}

                <div className="px-4 relative card">
                  <div className="rounded-xl overflow-hidden card-shadow" style={{width:287}}>
                    <img src="/images/content/marcedez.png" alt="" className="w-full h-full object-cover object-center" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mt-4 text-white text-center">MARCEDEZ</h5>
                    <h2 className="px-8 md:px-0 text-yellow-100 md:text-center text-center">IDR 500.000 <span className="text-gray-500 ">/ Per Day</span> </h2>
                    <Link to="#details.html" className="stretched-link">
                      {/* <!-- fake children --> */}
                    </Link>
                  </div>
                </div>

            {/* <!-- END: item carousel 5 --> */}
             {/* <!-- END: item carousel 5 --> <!-- START: item carousel 5 --> */}

             <div className="px-4 relative card">
              <div className="rounded-xl overflow-hidden card-shadow" style={{width:287}}>
                <img src="/images/content/marcedez.png" alt="" className="w-full h-full object-cover object-center" />
              </div>
              <div>
                <h5 className="text-lg font-semibold mt-4 text-white text-center">MARCEDEZ</h5>
                <h2 className="px-8 md:px-0 text-yellow-100 md:text-center text-center">IDR 500.000 <span className="text-gray-500 ">/ Per Day</span> </h2>
                <Link to="#details.html" className="stretched-link">
                  {/* <!-- fake children --> */}
                </Link>
              </div>
            </div>

        {/* <!-- END: item carousel 5 --> */}
            
            </div>
        </div>
    </section>

  )
}