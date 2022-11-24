import useScrollToTop from 'helper/hooks/useScrollToTop';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import PageErrorMessage from 'parts/PageErrorMessage';
import React from 'react';


export default function Notfound() {
  useScrollToTop();
  return (
    <>
    <Header />
    <PageErrorMessage/>
    <Footer />
    </>
  )
}
