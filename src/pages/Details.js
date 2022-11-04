import Breadcrumb from 'components/Breadcrumb.js';
import Detail from 'parts/Details/Detail';
import Suggestion from 'parts/Details/Suggestion';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import React from 'react';


export default function Details() {
  return (
    <>
    <Header />
    <Breadcrumb List={[
        {url: "/", name:"Home"},
        {url: "/products", name:"BMW"},
        {url: "/products/1", name:"Details"},
    ]} />
    <Detail />
    <Suggestion />
    <Footer />
    </>
  )
}
