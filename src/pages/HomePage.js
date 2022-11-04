import React from 'react';
import Header from 'parts/Header';
import Content from 'parts/Content';
import TodaySpecial from 'parts/TodaySpecial';
import AboutUs from 'parts/AboutUs';
import Faq from 'parts/Faq';
import Footer from 'parts/Footer';



export default function HomePage() {
  return (
    <>
    <Header position="absolute" />
    <Content />
    <TodaySpecial />
    <AboutUs />
    <Faq />
    <Footer />
    </>
  )
}
