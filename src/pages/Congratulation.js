import Breadcrumb from 'components/Breadcrumb.js';
import useScrollToTop from 'helper/hooks/useScrollToTop';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Congratulation() {
  useScrollToTop();
  return (
    <>
    <Header />
    <Breadcrumb List={[
        {url: "/", name: "Home"},
        {url: "/cart/1", name: "Succes Checkout"},
    ]} />

<section className="py-4 md:py-16 text-white">
        <div className="container mx-auto min-h-screen px-4">
          <div className="flex flex -col items-center justify-center">
            <div className="w-full md:w-4/12 text-center">
              <img src="./images/content/illustration-success.png" alt="illustration success" />
              <h2 className="text-3xl font-semibold mb-6">Ah yees it's success!</h2>
              <p className="text-lg mb-12">Mobil success dibayar silahkan datang ke alamat kami sesuai jadwal dan bawa dokumen untuk mengambil mobil rentalnya.</p>
              <Link to="/" className="text-gray-900 bg-yellow-500 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition duration-200 px-8">Back to Shop</Link>
            </div>
          </div>
        </div>
      </section>

    <Footer />
    </>
  )
}
