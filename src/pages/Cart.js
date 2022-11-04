import Breadcrumb from 'components/Breadcrumb.js';
import ShippingCart from 'parts/Cart/ShippingCart';
import ShippingDetails from 'parts/Cart/ShippingDetails';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import React from 'react';

export default function Cart() {
  return (
    <>
    <Header />
    <Breadcrumb List={[
        {url: "/", name:"Home"},
        {url: "/cart/1", name:"Shopping Cart"},
    ]} />

    <section className="md:py-16 ">
        <div className="container mx-auto px-4">
            <div className="flex -mx-4 flex-wrap">
                <ShippingCart />
                <ShippingDetails />
            </div>
            </div>
          </section>

    <Footer />
    </>
  )
}
