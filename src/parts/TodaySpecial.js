import fetch from 'helper/fetch/index'
import Carousel from 'components/Carousel/index';
import useAsync from 'helper/hooks/useAsync';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


function Loading(){
  return Array(6).fill().map((_, index) => {
    return <div key={index} className="px-4 relative card group">
    <div className="rounded-xl bg-[#2C2C2C] overflow-hidden card-shadow" style={{width:287, height: 251}}>
    </div>
      <h5 className="h-3 bg-[#2C2C2C] rounded-full mt-3 w-36 mx-auto"></h5>
      <h2 className="h-3  bg-[#2C2C2C] rounded-full mt-3 w-26"><span className="h-3 bg-yellow-500 rounded-full mt-3 w-24"></span> </h2>
  </div>
  })
}



export default function TodaySpecial() {

  const {data, error, run, isLoading} = useAsync();

  const refContainer = useRef(null);
  
  useEffect(() => {
    run(
      fetch(
        { url : "/api/products/?page=1&limit=10" }
      )
    )
  }, [run])
  
  // console.log(data,status,error);

  return (

    <section className="flex flex-col md:py-16  mt-60 md:mt-0" id="today">

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

        <div className="overflow-x-hidden px-4" id="carousel">
          <div className="container mx-auto" ref={refContainer}></div>

               
              {
                 isLoading ?<div className="flex -mx-4 flex-row relative"> <Loading /></div>  : error ? JSON.stringify(error) : data.data.length === 0 ? "No Product Found" : <Carousel refContainer={refContainer}>
                 {data.data.map((item) => {
                   return  <div key={item.id} className="px-4 relative card">
                   <div className="rounded-xl overflow-hidden card-shadow" style={{width:287}}>
                     <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover object-center" />
                   </div>
                   
                     <h5 className="text-lg font-semibold mt-4 text-white text-center">{item.title}</h5>
                     <h2 className="px-8 md:px-0 text-yellow-100 md:text-center text-center">{item.price}<span className="text-gray-500 ">/ Per Day</span> </h2>
                     <Link to={`/products/${item.id}`} className="stretched-link">
                       {/* <!-- fake children --> */}
                     </Link>
                   
                 </div>
                 })}
                 </Carousel>
                }
              
           
            
           
        </div>
    </section>

  )
}
