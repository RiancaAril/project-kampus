"use client";
import Cart from '@/components/frontend/Cart';
import Feature from '@/components/frontend/Feature';
import Hero from '@/components/frontend/Hero';
import Navbar from '@/components/frontend/Navbar';
import TrendingProducts from '@/components/frontend/TrendingProducts';
import React, { useState } from 'react';

const Home = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <main>
      <Navbar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart}/>}
      <Hero/>
      <Feature />
      <TrendingProducts/>
    </main>
  );
  
}

export default Home
