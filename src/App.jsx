import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SwiperComponent from './components/SwiperComponent';
import AppInfo from './components/AppInfo';
import Footer from './components/Footer';
import About from './components/About';
import Gallery from './components/Gallery';
import Video from './components/Video';


export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <SwiperComponent />
      <AppInfo />
      <Video />
      <Footer />
    </div>
  )
}
