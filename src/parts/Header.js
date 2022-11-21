import { useGlobalContext } from 'helper/hooks/useGlobalContext';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as IconCart } from 'assets/image/icon-cart.svg'

export default function Header({ position }) {
  const [toggleMainMenu, setToggleMainMenu] = useState(false);
  const [isCartChanged, setCartChanged] = useState(false)
  const {state} = useGlobalContext();

  const prevCart = useRef(state?.cart || {})

  useLayoutEffect(() => {
    if(prevCart.current !== state){
      prevCart.current = state?.cart || {}
      setCartChanged(true)
      setTimeout(() => {
          setCartChanged(false)
      }, 550);
    }
  }, [state.cart])


  return (
    <header className={[position,"w-full z-40 bg-transparent "].join(" ")}>
      <div className="container">
        <div className="flex flex-strech items-center">
          <div className="w-full items-center">
            <img src="/images/content/logo.svg" alt="Rental Car adalah Sebuah mobil rental yang baru beroperasi" />
          </div>
          <div className="w-full py-10"></div>
          {/* <!-- START: Menu Hamburger wrapper --> */}
          <div className="w-auto py-10">
            <ul id="menu" className={["fixed flex bg-gray-500 inset-0 flex-col  items-center justify-center opacity-0 md:visible md:flex-row md:bg-transparent md:relative md:opacity-100", toggleMainMenu ? "opacity-100 z-30 visible": "invisible opacity-0"].join (" ")}>
              <li className="md:mr-28 py-6 md:py-0">
                <Link to="/home" className="text-white hover:text-black hover:underline">HOME</Link>
                </li>
              <li className="md:mr-28 py-6 md:py-0">
                <Link to="/garage" className="text-white hover:text-white hover:underline">GARAGE</Link>
                </li>
              <li className="md:mr-28 py-6 md:py-0">
                <Link to="/about" className="text-white hover:text-white hover:underline">ABOUT</Link>
                </li>
              <li className="md:mr-28 py-6 md:py-0">
                <Link to="/faq" className="text-white hover:text-white hover:underline">FAQ</Link>
                </li>
              <li className="md:mr-28 py-6 md:py-0">
                <Link to="/contact" className="text-white hover:text-white hover:underline">CONTACT</Link> 
              </li>
            </ul>
          </div>
          {/* <!-- END: Menu Hamburger wrapper --> */}
          <div className="w-auto py-10">
            <ul className="flex items-center">
              <li className="ml-3 block md:hidden">
                <button className={["relative flex z-50 items-center justify-center w-8 h-8 text-black focus:outline-none", toggleMainMenu? "fixed top-0 right-0" : "relative"].join(" ")} onClick={() => setToggleMainMenu(prev => !prev)}>
                  <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9773 0.296875H1.04219C0.466585 0.296875 0 0.661833 0 1.11206C0 1.5623 0.466668 1.92725 1.04219 1.92725H15.9773C16.5529 1.92725 17.0195 1.5623 17.0195 1.11206C17.0195 0.661768 16.5529 0.296875 15.9773 0.296875Z" fill="#FFAB18"/>
                    <path d="M15.9773 8.31775H1.04219C0.466585 8.31775 0 8.68271 0 9.13294C0 9.58317 0.466668 9.94813 1.04219 9.94813H15.9773C16.5529 9.94813 17.0195 9.58317 17.0195 9.13294C17.0195 8.68264 16.5529 8.31775 15.9773 8.31775Z" fill="#FFAB18"/>
                    <path d="M15.9773 16.3386H1.04219C0.466585 16.3386 0 16.7036 0 17.1538C0 17.604 0.466668 17.969 1.04219 17.969H15.9773C16.5529 17.969 17.0195 17.604 17.0195 17.1538C17.0195 16.7035 16.5529 16.3386 15.9773 16.3386Z" fill="#FFAB18"/>
                    </svg>                                        
                </button>
              </li>
              
              <li className="ml-3 mr-3">
                <Link to={`/cart`} className={["cart flex items-center justify-center w-8 h-8 text-white hover:text-white",state.cart && Object.keys(state.cart).length > 0 ? "cart-filled" : "", isCartChanged ? "animate-bounce" : ""].join(" ")}>
                  <IconCart />                    
                </Link>
              </li>
            </ul>
          </div>
       <div className="md:w-auto py-10"></div>
        </div>
      </div>
    </header>
  )
}
