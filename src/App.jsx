// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// src/App.jsx
import Nav from './component/Nav'
import Hero from './component/Hero'
import Features from './component/Features';
import Product from './component/Product';
import Franchise from './component/Franchise';
import News from './component/News';
import Testinomials from './component/Testinomials';
import Footer from './component/Footer';
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Nav />
      <Hero />
      <Features />
      <Product />
      <Franchise />
      <News />
      <Testinomials />
      <Footer />
    </div>
  );
}
