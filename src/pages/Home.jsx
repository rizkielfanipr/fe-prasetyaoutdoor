import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'
import Layanan from '../components/Layanan'
import PreviewBarang from '../components/Product'; 
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial'
import Location from '../components/Location'

const Home = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className="home">
      <Navbar cartItems={cart} />
      <Hero />
      <Layanan />
      <PreviewBarang cart={cart} setCart={setCart} />
      <Testimonial />
      <Location />
      <Footer />
    </div>
  );
};

export default Home;
