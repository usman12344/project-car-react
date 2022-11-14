import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ position }) {
  const [toggleMainMenu, setToggleMainMenu] = useState(false);

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
                <Link to="#" className="flex items-center justify-center w-8 h-8 text-white hover:text-white cart cart-filled">
                  <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8754 18.6214C9.61762 18.6214 8.59436 19.6017 8.59436 20.8066C8.59436 22.0116 9.61762 22.9919 10.8754 22.9919C12.1331 22.9919 13.1564 22.0116 13.1564 20.8066C13.1563 19.6017 12.1331 18.6214 10.8754 18.6214ZM10.8754 21.7716C10.3199 21.7716 9.86796 21.3387 9.86796 20.8065C9.86796 20.2744 10.3199 19.8414 10.8754 19.8414C11.4308 19.8414 11.8828 20.2744 11.8828 20.8065C11.8828 21.3388 11.4308 21.7716 10.8754 21.7716Z" fill="white"/>
                    <path d="M18.8764 18.6214C17.6186 18.6214 16.5953 19.6017 16.5953 20.8066C16.5953 22.0116 17.6186 22.9919 18.8764 22.9919C20.1342 22.9919 21.1575 22.0116 21.1575 20.8066C21.1574 19.6017 20.1341 18.6214 18.8764 18.6214ZM18.8764 21.7716C18.3209 21.7716 17.869 21.3387 17.869 20.8065C17.869 20.2744 18.3209 19.8414 18.8764 19.8414C19.4319 19.8414 19.8838 20.2744 19.8838 20.8065C19.8838 21.3388 19.4319 21.7716 18.8764 21.7716Z" fill="white"/>
                    <path d="M19.438 7.11639H10.3122C9.96051 7.11639 9.67542 7.38952 9.67542 7.72646C9.67542 8.06339 9.96056 8.33652 10.3122 8.33652H19.438C19.7897 8.33652 20.0748 8.06339 20.0748 7.72646C20.0748 7.38947 19.7897 7.11639 19.438 7.11639Z" fill="white"/>
                    <path d="M18.9414 10.2844H10.8089C10.4572 10.2844 10.1721 10.5575 10.1721 10.8945C10.1721 11.2314 10.4572 11.5045 10.8089 11.5045H18.9413C19.293 11.5045 19.5781 11.2314 19.5781 10.8945C19.5781 10.5576 19.293 10.2844 18.9414 10.2844Z" fill="white"/>
                    <path d="M25.6499 4.39822C25.407 4.11268 25.0472 3.94894 24.6626 3.94894H4.82655L4.42595 2.08594C4.34232 1.69732 4.06563 1.37101 3.68565 1.21295L0.890528 0.0506658C0.567841 -0.0836152 0.192825 0.0582363 0.0528584 0.367272C-0.0872597 0.676404 0.0608116 1.03572 0.383347 1.1698L3.17852 2.33213L6.2598 16.661C6.38117 17.2253 6.90578 17.6349 7.50723 17.6349H22.7635C23.1152 17.6349 23.4003 17.3617 23.4003 17.0248C23.4003 16.6879 23.1152 16.4147 22.7635 16.4147H7.50728L7.13247 14.6718H22.8814C23.4828 14.6718 24.0075 14.2622 24.1288 13.6979L25.9101 5.41511C25.9876 5.05444 25.8928 4.68372 25.6499 4.39822ZM22.8814 13.4517H6.87012L5.08895 5.16902L24.6626 5.16907L22.8814 13.4517Z" fill="white"/>
                    <circle cx="26" cy="4.89026" r="4" fill="#FFAB18"/>
                    </svg>                    
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
