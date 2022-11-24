import React from 'react'

export default function Footer() {
  return (
    <div>
        <section className="relative md:flex justify-center items-center md:mx-52 md:mt-10">
      <div className="flex justify-start md:w-1/2 w-full my-5 px-5">
        <img src="/images/design/footer.png" alt="" />
        <div className="block ml-5 text-left">
          <h1 className="text-white">Medan - MDN - | IDN</h1>
          <h1 className="text-white">+628-9773-1245</h1>
          <h1 className="text-white">usmanabdat6@gmail.com</h1>
          <h1 className="text-white mt-3">Privacy Policy</h1>
        </div>
      </div>
      <div className="relative md:flex md:justify-star md:items-start md:w-1/2 w-full">
        <div className="block">
          <div className="mx-20 md:mx-0 mb-4">
            <input type="text" id="name" className="border rounded hover:borderr" style={{backgroundColor: '#000000', Color:'#ffffff'}} placeholder=" Name" />
          </div>
          <div className="mx-20 md:mx-0 mb-4">
            <input type="email" id="Email" className="border rounded hover:borderr" style={{backgroundColor: '#000000'}} placeholder=" Email" />
          </div>
          <div className="mx-20 md:mx-0 mb-4">
            <input type="tel" id="Phone" className="border rounded hover:borderr" style={{backgroundColor: '#000000'}} placeholder=" Phone" />
          </div> 
        </div>
        <div className="block mb-4 ml-3">
          <textarea name="Message" cols="30" rows="3" placeholder=" Catatan" className="border rounded hover:borderr mx-10 md:mx-0 " style={{backgroundColor: '#000000'}}></textarea>
          <button href="#" className="block borderr text-white bg-yellow-500 text-center py-1 mx-20 md:mx-0 p-20">SEND</button>
        </div>
      </div>
    </section>

    
    <footer className="flex text-center justify-center px-4 md:mx-60 py-2">
      <div className="md:w-1/2"></div>
      <div className="md:w-1/2">
        <p className="text-sm text-white">
          Copyright 2022 | Rental . All Rights Reserved
        </p>
      </div>
    </footer>
    </div>
  )
}
