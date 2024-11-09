import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const banners = [
  {
    id: 1,
    image: 'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
    title: 'Explore Nature with Prasetya Outdoor',
    description: 'The best outdoor gear for your adventures',
  },
  {
    id: 2,
    image: 'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
    title: 'Discover the Beauty of Nature',
    description: 'Join us for unforgettable adventures',
  },
  {
    id: 3,
    image: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
    title: 'Ready for New Adventures?',
    description: 'Get the best gear for your journey',
  },
  {
    id: 4,
    image: 'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp',
    title: 'Adventure Awaits',
    description: 'Gear up for your next trip!',
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full mt-20 rounded-3xl">
      {banners.map((banner, index) => (
        <div id={`slide${index + 1}`} className="carousel-item relative w-full" key={banner.id}>
          <img src={banner.image} className="w-full" alt={banner.title} />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href={`#slide${index === 0 ? banners.length : index}`} className="btn btn-circle">❮</a>
            <a href={`#slide${index === banners.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;